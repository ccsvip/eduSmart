
import os
from supabase import create_client, Client

url: str = "https://hikmiuecqnehjnjaxbvw.supabase.co"
# User provided JWT key (Anon key)
key: str = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhpa21pdWVjcW5laGpuamF4YnZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY2MzAxNTQsImV4cCI6MjA4MjIwNjE1NH0.kn0QMxp98oNr3QXp66VT22opUvdxm8aE0Kn00f94FyU"

def verify_supabase():
    try:
        print(f"Connecting to {url}...")
        supabase: Client = create_client(url, key)
        print("Client initialized successfully.")

        # Try to access a table to check connection authorization
        # We expect this to either work (empty list) or fail with 'relation does not exist' if table is missing,
        # or fail with 401 if key is bad.
        try:
            print("Attempting to select from 'chat_messages'...")
            response = supabase.table("chat_messages").select("*").limit(1).execute()
            print(f"Query result: {response}")
        except Exception as e:
            # If the table doesn't exist, Supabase API (PostgREST) usually returns a 404 or specific error.
            print(f"Query executed with result/error: {e}")

    except Exception as e:
        print(f"Failed to initialize or connect: {e}")

if __name__ == "__main__":
    verify_supabase()
