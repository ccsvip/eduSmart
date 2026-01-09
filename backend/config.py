
import os
from dotenv import load_dotenv

# Load environment variables from a .env file if it exists
load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL", "")
SUPABASE_KEY = os.getenv("SUPABASE_KEY", "")

LLM_BASE_URL = os.getenv("LLM_BASE_URL", "https://api.longcat.chat/openai")
LLM_API_KEY = os.getenv("LLM_API_KEY", "")
LLM_MODEL = os.getenv("LLM_MODEL", "LongCat-Flash-Chat")

if not SUPABASE_URL or not SUPABASE_KEY:
    print("Warning: SUPABASE_URL or SUPABASE_KEY not set in environment.")

if not LLM_API_KEY:
    print("Warning: LLM_API_KEY not set in environment.")
