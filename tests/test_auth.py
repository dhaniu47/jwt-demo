import os
from pathlib import Path
TEST_DB = Path(__file__).parent / "test_auth.db"
os.environ["AUTH_DB_PATH"] = str(TEST_DB)
os.environ["JWT_SECRET"] = "test-secret-for-automated-tests"
from fastapi.testclient import TestClient
from auth_app.db import init_db
from auth_app.main import app
client = TestClient(app)
def setup_function():
    if TEST_DB.exists(): TEST_DB.unlink()
    init_db()
def teardown_module():
    if TEST_DB.exists(): TEST_DB.unlink()
def test_health():
    assert client.get("/health").status_code == 200
def test_register_login_and_protected_flow():
    assert client.post("/auth/register", json={"username":"dhani_test","password":"StrongPass123"}).status_code == 201
    login = client.post("/auth/login", json={"username":"dhani_test","password":"StrongPass123"})
    assert login.status_code == 200
    token = login.json()["access_token"]
    assert client.get("/api/protected", headers={"Authorization":"Bearer " + token}).status_code == 200
    me = client.get("/auth/me", headers={"Authorization":"Bearer " + token})
    assert me.status_code == 200 and me.json()["username"] == "dhani_test"
def test_wrong_password_rejected():
    client.post("/auth/register", json={"username":"wrong_password","password":"StrongPass123"})
    assert client.post("/auth/login", json={"username":"wrong_password","password":"WrongPass123"}).status_code == 401
def test_protected_endpoint_requires_token():
    assert client.get("/api/protected").status_code == 401
def test_invalid_token_rejected():
    assert client.get("/api/protected", headers={"Authorization":"Bearer definitely-not-a-jwt"}).status_code == 401
