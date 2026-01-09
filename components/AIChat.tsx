
import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const res = await fetch('http://localhost:8000/history');
      if (!res.ok) throw new Error('Failed to fetch history');
      const data = await res.json();
      // Map backend data to frontend interface
      const mappedMessages: ChatMessage[] = data.map((msg: any) => ({
        id: msg.id,
        role: msg.role,
        content: msg.content,
        timestamp: msg.created_at,
        sources: [] // Backend doesn't support sources yet
      }));
      setMessages(mappedMessages);
    } catch (err) {
      console.error(err);
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userContent = input.trim();
    setInput('');
    setIsLoading(true);

    // Optimistically add user message
    const tempId = Date.now().toString();
    const userMsg: ChatMessage = {
      id: tempId,
      role: 'user',
      content: userContent,
      timestamp: new Date().toISOString()
    };
    setMessages(prev => [...prev, userMsg]);

    try {
      const res = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: userContent, role: 'user' })
      });

      if (!res.ok) throw new Error('Failed to send message');

      const aiMsgData = await res.json();
      const aiMsg: ChatMessage = {
        id: aiMsgData.id,
        role: aiMsgData.role,
        content: aiMsgData.content,
        timestamp: aiMsgData.created_at
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      console.error(err);
      // Optional: Add error message to chat
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-full gap-6">
      <div className="flex-1 flex flex-col bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <header className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-bold">智能问答与知识溯源</h1>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              知识库已关联: 高二物理
            </div>
          </div>
          <button
            onClick={() => setMessages([])}
            className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-shadow shadow-sm shadow-primary-600/20"
          >
            <span className="material-icons-round text-sm">refresh</span>
            <span>清空对话</span>
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-slate-400">
              <span className="material-icons-round text-6xl mb-4 opacity-50">chat_bubble_outline</span>
              <p>开始一个新的对话吧...</p>
            </div>
          )}

          {messages.map((msg, index) => (
            <div key={msg.id || index} className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : ''}`}>
              {msg.role === 'assistant' && (
                <div className="w-10 h-10 flex-shrink-0 bg-primary-600/10 text-primary-600 rounded-full flex items-center justify-center border border-primary-600/20 shadow-sm">
                  <span className="material-icons-round">auto_awesome</span>
                </div>
              )}

              <div className={`max-w-[85%] flex flex-col ${msg.role === 'user' ? 'items-end' : ''}`}>
                <div className={`
                  p-5 rounded-2xl shadow-sm prose dark:prose-invert prose-slate max-w-none
                  ${msg.role === 'user'
                    ? 'bg-primary-600 text-white rounded-tr-none'
                    : 'bg-slate-50 dark:bg-slate-800 rounded-tl-none border border-slate-200 dark:border-slate-700'
                  }
                `}>
                   <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                </div>
                <span className="text-[10px] text-slate-400 mt-2 font-medium uppercase tracking-wider">
                  {msg.role === 'user' ? 'You' : 'AI Assistant'} · {new Date(msg.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </span>
              </div>

              {msg.role === 'user' && (
                <div className="w-10 h-10 flex-shrink-0">
                  <img alt="User" className="w-full h-full rounded-full border-2 border-white dark:border-slate-800 shadow-sm" src="https://picsum.photos/seed/student/100/100" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-4">
               <div className="w-10 h-10 flex-shrink-0 bg-primary-600/10 text-primary-600 rounded-full flex items-center justify-center border border-primary-600/20 shadow-sm">
                  <span className="material-icons-round">auto_awesome</span>
               </div>
               <div className="bg-slate-50 dark:bg-slate-800 p-5 rounded-2xl rounded-tl-none border border-slate-200 dark:border-slate-700 shadow-sm">
                 <div className="flex gap-1">
                   <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                   <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></span>
                   <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></span>
                 </div>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-6 border-t border-slate-200 dark:border-slate-800">
          <div className="relative flex items-end gap-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-2 pl-4 shadow-sm focus-within:ring-2 focus-within:ring-primary-600/20 transition-all">
            <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
              <span className="material-icons-round">attach_file</span>
            </button>
            <textarea
              className="flex-1 bg-transparent border-none focus:ring-0 py-3 resize-none text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none"
              placeholder="在此输入您的学习问题..."
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            ></textarea>
            <div className="flex items-center gap-1">
              <button className="p-2 text-slate-400 hover:text-slate-600"><span className="material-icons-round">mic</span></button>
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className={`p-2.5 rounded-xl text-white shadow-lg transition-all ${
                  isLoading || !input.trim()
                  ? 'bg-slate-400 cursor-not-allowed shadow-none'
                  : 'bg-primary-600 hover:bg-primary-700 shadow-primary-600/30'
                }`}
              >
                <span className="material-icons-round">send</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <aside className="w-80 space-y-6 hidden xl:block">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6">当前学习场景</h3>
          <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 rounded-xl flex items-center justify-center">
                <span className="material-icons-round">folder</span>
              </div>
              <div>
                <h4 className="font-bold text-sm">关联知识库</h4>
                <p className="text-xs text-slate-500">2023-2024 高二物理</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">文档数量</span>
                <span className="font-semibold">42 个</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full mt-3 overflow-hidden">
                <div className="bg-indigo-500 h-full w-[85%] rounded-full"></div>
              </div>
              <p className="text-[10px] text-slate-400 mt-1">学习进度: 85% 已同步</p>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-xs font-bold text-slate-500 mb-3 flex items-center gap-2">
              <span className="material-icons-round text-sm">tag</span>
              热门提问词
            </h4>
            <div className="flex flex-wrap gap-2">
              {['万有引力', '第一宇宙速度', '双星系统', '变轨运动'].map(tag => (
                <button
                  key={tag}
                  onClick={() => setInput(tag)}
                  className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-primary-600 transition-colors cursor-pointer"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-primary-600 rounded-3xl text-white relative overflow-hidden group shadow-lg shadow-primary-600/20">
          <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
            <span className="material-icons-round text-8xl">school</span>
          </div>
          <h4 className="font-bold text-sm mb-1">学习小贴士</h4>
          <p className="text-xs opacity-90 leading-relaxed mb-3">使用“请举例说明”可以让 AI 给出更具体的物理模型。</p>
          <button className="bg-white/20 hover:bg-white/30 transition-colors text-xs font-bold py-1.5 px-3 rounded-lg backdrop-blur-sm">
            了解更多
          </button>
        </div>
      </aside>
    </div>
  );
};

export default AIChat;
