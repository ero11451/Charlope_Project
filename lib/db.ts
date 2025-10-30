import Database from "better-sqlite3";
import path from "path";

const db = new Database(path.resolve("./mydatabase.db"));

// Create Causes table
db.prepare(`
  CREATE TABLE IF NOT EXISTS Causes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    img TEXT,
    description TEXT,
    category TEXT,
    percentage TEXT,
    raised TEXT,
    goal TEXT
  );

  CREATE TABLE IF NOT EXISTS Contacts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  message TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
`).run();

export default db;
