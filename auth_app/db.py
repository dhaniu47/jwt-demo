import os
import sqlite3
from pathlib import Path
from dotenv import load_dotenv

load_dotenv()
DB_PATH = Path(os.getenv("AUTH_DB_PATH", Path(__file__).resolve().parent / "auth.db"))
def get_connection():
    connection = sqlite3.connect(DB_PATH)
    connection.row_factory = sqlite3.Row
    return connection
def init_db():
    with get_connection() as connection:
        connection.execute("""CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL UNIQUE,
            password_hash TEXT NOT NULL,
            created_at TEXT NOT NULL)""")
        connection.commit()
def get_user_by_username(username):
    with get_connection() as connection:
        return connection.execute("SELECT id, username, password_hash, created_at FROM users WHERE username = ?", (username,)).fetchone()
def get_user_by_id(user_id):
    with get_connection() as connection:
        return connection.execute("SELECT id, username, password_hash, created_at FROM users WHERE id = ?", (user_id,)).fetchone()
def create_user(username, password_hash, created_at):
    with get_connection() as connection:
        cursor = connection.execute("INSERT INTO users (username, password_hash, created_at) VALUES (?, ?, ?)", (username, password_hash, created_at))
        connection.commit()
        return cursor.lastrowid
