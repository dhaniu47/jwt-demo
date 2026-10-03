from datetime import datetime, timezone
from pathlib import Path

import jwt
from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.responses import RedirectResponse
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

from .db import create_user, get_user_by_id, get_user_by_username, init_db
from .security import create_access_token, decode_access_token, hash_password, verify_password

BASE_DIR = Path(__file__).resolve().parent.parent

app = FastAPI(title="JWT Authentication API", version="1.0.0")
app.mount("/frontend", StaticFiles(directory=BASE_DIR / "frontend"), name="frontend")
bearer = HTTPBearer(auto_error=False)


class Credentials(BaseModel):
    username: str = Field(min_length=3, max_length=50, pattern=r"^[A-Za-z0-9_.-]+$")
    password: str = Field(min_length=8, max_length=128)


class TokenResponse(BaseModel):
    access_token: str
    token_type: str


@app.on_event("startup")
def startup():
    init_db()


@app.get("/", include_in_schema=False)
def root():
    return RedirectResponse(url="/frontend/index.html")


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/auth/register", status_code=status.HTTP_201_CREATED)
def register(credentials: Credentials):
    if get_user_by_username(credentials.username):
        raise HTTPException(status_code=409, detail="Username already exists")
    user_id = create_user(
        credentials.username,
        hash_password(credentials.password),
        datetime.now(timezone.utc).isoformat(),
    )
    return {"id": user_id, "username": credentials.username}


@app.post("/auth/login", response_model=TokenResponse)
def login(credentials: Credentials):
    user = get_user_by_username(credentials.username)
    if not user or not verify_password(credentials.password, user["password_hash"]):
        raise HTTPException(
            status_code=401,
            detail="Invalid username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    return {
        "access_token": create_access_token(user["id"], user["username"]),
        "token_type": "bearer",
    }


def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(bearer)):
    if not credentials or credentials.scheme.lower() != "bearer":
        raise HTTPException(
            status_code=401,
            detail="Bearer token required",
            headers={"WWW-Authenticate": "Bearer"},
        )
    try:
        payload = decode_access_token(credentials.credentials)
        user_id = int(payload["sub"])
    except (jwt.InvalidTokenError, KeyError, TypeError, ValueError):
        raise HTTPException(
            status_code=401,
            detail="Invalid or expired token",
            headers={"WWW-Authenticate": "Bearer"},
        )

    user = get_user_by_id(user_id)
    if not user:
        raise HTTPException(
            status_code=401,
            detail="User no longer exists",
            headers={"WWW-Authenticate": "Bearer"},
        )
    return user


@app.get("/auth/me")
def me(user=Depends(get_current_user)):
    return {
        "id": user["id"],
        "username": user["username"],
        "created_at": user["created_at"],
    }


@app.get("/api/protected")
def protected(user=Depends(get_current_user)):
    return {"message": "Authenticated request accepted for " + user["username"]}
