from sqlalchemy import create_engine, text
import os

DATABASE_URL = "postgresql://postgres:33441314520Sm@db.hikmiuecqnehjnjaxbvw.supabase.co:5432/postgres"

def test_connection():
    try:
        engine = create_engine(DATABASE_URL)
        with engine.connect() as connection:
            result = connection.execute(text("SELECT 1"))
            print("Database Connection Successful:", result.fetchone()[0] == 1)
    except Exception as e:
        print("Database Connection Failed:", e)

if __name__ == "__main__":
    test_connection()
