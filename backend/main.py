
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from .database import supabase
from .schemas import MessageCreate, Message
from .llm import get_chat_response
from typing import List

app = FastAPI()

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify the frontend domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "EduSmart AI Backend is running"}

@app.get("/history", response_model=List[Message])
def get_history():
    try:
        # Fetch messages ordered by creation time
        response = supabase.table("chat_messages").select("*").order("created_at").execute()
        return response.data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/chat", response_model=Message)
def chat(message: MessageCreate):
    try:
        # 1. Save user message
        user_msg_data = {"role": "user", "content": message.content}
        user_res = supabase.table("chat_messages").insert(user_msg_data).execute()
        if not user_res.data:
            raise HTTPException(status_code=500, detail="Failed to save user message")

        # 2. Get history for context (optional, but good for chat)
        # For simplicity, we might just send the current message or last N messages.
        # Let's fetch the last 10 messages for context.
        history_res = supabase.table("chat_messages").select("role,content").order("created_at", desc=True).limit(10).execute()
        # history is in reverse order (newest first) because of desc=True, need to reverse it back
        context_messages = history_res.data[::-1] if history_res.data else []

        # Ensure the format is correct for OpenAI
        # context_messages is [{'role': '...', 'content': '...'}, ...] which matches.

        # 3. Call LLM
        ai_content = get_chat_response(context_messages)

        # 4. Save AI response
        ai_msg_data = {"role": "assistant", "content": ai_content}
        ai_res = supabase.table("chat_messages").insert(ai_msg_data).execute()

        if not ai_res.data:
            # If saving AI response fails, we should still return it?
            # Or fail? Let's fail for data consistency.
            raise HTTPException(status_code=500, detail="Failed to save AI message")

        return ai_res.data[0] # Return the created AI message object (with ID and timestamp)

    except Exception as e:
        print(f"Error in chat endpoint: {e}")
        raise HTTPException(status_code=500, detail=str(e))
