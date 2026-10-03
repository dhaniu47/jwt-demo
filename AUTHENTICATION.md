# JWT Authentication

## What was added

The repository now has a self-contained FastAPI authentication application under `auth_app/`.

- Registration with validation
- PBKDF2-HMAC-SHA256 password hashing with a unique random salt
- SQLite user persistence
- JWT access-token issuance
- JWT signature and expiration validation
- Bearer-token protected endpoints
- Browser demo UI
- Automated tests

## Request flow

1. Browser sends credentials to `POST /auth/register`.
2. The server hashes the password and stores only the hash.
3. Browser sends credentials to `POST /auth/login`.
4. Server verifies the password.
5. Server signs a JWT containing the user ID, username, issued-at time and expiration.
6. Browser sends `Authorization: Bearer <token>` to protected endpoints.
7. The server verifies the JWT signature and expiration.
8. The server loads the current user from SQLite and allows the request.

## Credentials and tokens

Plaintext passwords are never stored.

The JWT signing secret is read from `JWT_SECRET`. A development fallback exists only so the example can start without configuration; use a strong secret in any real deployment.

The browser demo keeps the access token in `sessionStorage`, so it is cleared when the browser tab/session ends. For a production application, review the token-storage and CSRF/XSS strategy for your deployment requirements.

## Run on Windows

PowerShell:

```powershell
py -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
Copy-Item .env.example .env
uvicorn auth_app.main:app --reload
```

Open the browser demo at:

`http://127.0.0.1:8000/frontend/index.html`

API documentation:

`http://127.0.0.1:8000/docs`

## Test

```powershell
pytest -q
```

The tests cover health, registration, login, authenticated requests, invalid passwords, missing tokens and invalid tokens.

## API

- `GET /health`
- `POST /auth/register`
- `POST /auth/login`
- `GET /auth/me` — protected
- `GET /api/protected` — protected

## Production checklist

Before production use:

- Set a strong random `JWT_SECRET`.
- Use HTTPS.
- Review access-token lifetime and rotation/revocation requirements.
- Consider a production database instead of SQLite.
- Add rate limiting and account lockout/abuse controls.
- Add email verification and password reset if required.
- Review frontend token storage against your threat model.
