from openai import OpenAI

BASE_URL = "https://api.longcat.chat/openai"
API_KEY = "ak_1061Xg02L8uv4Ua77L7NH6UQ0mC15"

def test_llm():
    client = OpenAI(
        base_url=BASE_URL,
        api_key=API_KEY,
    )

    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo", # Assuming standard model name or one provided by Longcat
            messages=[
                {"role": "user", "content": "Hello, this is a test."}
            ]
        )
        print("LLM Connection Successful. Response:", response.choices[0].message.content)
    except Exception as e:
        print("LLM Connection Failed:", e)

if __name__ == "__main__":
    test_llm()
