-- \c todo_app
CREATE TABLE IF NOT EXISTS todos(
    id SERIAL PRIMARY KEY,
    title TEXT,
    currentdate TEXT,
    content TEXT
);