-- Create the chat_messages table
create table if not exists chat_messages (
  id uuid default gen_random_uuid() primary key,
  role text not null check (role in ('user', 'assistant')),
  content text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS) is recommended, but for this demo,
-- to ensure the Anon key works immediately, we will create a policy
-- that allows public access or just disable RLS for this table.
-- Option A: Disable RLS (Simpler for testing)
alter table chat_messages disable row level security;

-- Option B: Enable RLS and allow public access (Better practice but more steps)
-- alter table chat_messages enable row level security;
-- create policy "Allow public read/write" on chat_messages
-- for all
-- using (true)
-- with check (true);
