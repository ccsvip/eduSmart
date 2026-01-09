
from openai import OpenAI
from .config import LLM_BASE_URL, LLM_API_KEY, LLM_MODEL

client = OpenAI(
    base_url=LLM_BASE_URL,
    api_key=LLM_API_KEY,
)

def get_chat_response(messages: list[dict]) -> str:
    """
    Sends messages to the LLM and returns the response content.
    messages format: [{"role": "user", "content": "..."}, ...]
    """
    try:
        response = client.chat.completions.create(
            model=LLM_MODEL,
            messages=messages,
            stream=False
        )
        return response.choices[0].message.content
    except Exception as e:
        print(f"Error calling LLM: {e}")
        return "I'm sorry, I'm having trouble connecting to my brain right now."
