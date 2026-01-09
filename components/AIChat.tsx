
import React, { useState } from 'react';

const AIChat: React.FC = () => {
  const [input, setInput] = useState('');

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
          <button className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-shadow shadow-sm shadow-primary-600/20">
            <span className="material-icons-round text-sm">add</span>
            <span>开启新对话</span>
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
          {/* User Message */}
          <div className="flex gap-4 justify-end">
            <div className="max-w-[80%] flex flex-col items-end">
              <div className="bg-primary-600 text-white p-4 rounded-2xl rounded-tr-none shadow-sm">
                <p className="leading-relaxed">请解释一下开普勒第三定律的物理意义，以及它在计算卫星轨道时是如何应用的？</p>
              </div>
              <span className="text-[10px] text-slate-400 mt-2 font-medium uppercase tracking-wider">10:42 AM</span>
            </div>
            <div className="w-10 h-10 flex-shrink-0">
              <img alt="User" className="w-full h-full rounded-full border-2 border-white dark:border-slate-800 shadow-sm" src="https://picsum.photos/seed/student/100/100" />
            </div>
          </div>

          {/* AI Message */}
          <div className="flex gap-4">
            <div className="w-10 h-10 flex-shrink-0 bg-primary-600/10 text-primary-600 rounded-full flex items-center justify-center border border-primary-600/20 shadow-sm">
              <span className="material-icons-round">auto_awesome</span>
            </div>
            <div className="max-w-[85%] space-y-4">
              <div className="bg-slate-50 dark:bg-slate-800 p-5 rounded-2xl rounded-tl-none border border-slate-200 dark:border-slate-700 shadow-sm prose dark:prose-invert prose-slate max-w-none">
                <p>开普勒第三定律（周期定律）指出：<strong>所有行星绕太阳运动的椭圆轨道的半长轴的三次方（a³）跟它的公转周期的二次方（T²）的比值都相等</strong>。</p>
                <p>在物理意义上，它揭示了轨道大小与运动快慢之间的内在联系。对于同一中心天体，比值 <code>k = a³/T²</code> 是一个常数，仅由中心天体的质量决定（M = 4π²k/G）。</p>
                <p>在计算卫星轨道时，应用如下：</p>
                <ol>
                  <li><strong>轨道测算：</strong> 已知卫星高度即可求出周期。</li>
                  <li><strong>同步卫星定位：</strong> 通过设定周期为地球自转周期，可以精确计算地球同步轨道的高度（约36000km）。</li>
                </ol>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-semibold">
                  <span className="material-icons-round text-sm">link</span>
                  <span>参考资料溯源</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-3 rounded-xl hover:border-primary-600/50 transition-all cursor-pointer group">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-lg flex items-center justify-center">
                        <span className="material-icons-round">picture_as_pdf</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold truncate group-hover:text-primary-600">高二物理必修二-第五章.pdf</h4>
                        <p className="text-xs text-slate-500 mt-1">第 42 页 · 万有引力与航天</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-3 rounded-xl hover:border-primary-600/50 transition-all cursor-pointer group">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg flex items-center justify-center">
                        <span className="material-icons-round">video_library</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold truncate group-hover:text-primary-600">开普勒定律课堂演示.mp4</h4>
                        <p className="text-xs text-slate-500 mt-1">03:45 处 · 知识点讲解</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span className="text-[10px] text-slate-400 mt-2 font-medium uppercase tracking-wider block">AI 助手 · 刚刚</span>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-slate-200 dark:border-slate-800">
          <div className="relative flex items-end gap-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-2 pl-4 shadow-sm focus-within:ring-2 focus-within:ring-primary-600/20 transition-all">
            <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
              <span className="material-icons-round">attach_file</span>
            </button>
            <textarea
              className="flex-1 bg-transparent border-none focus:ring-0 py-3 resize-none text-slate-700 dark:text-slate-200 placeholder-slate-400"
              placeholder="在此输入您的学习问题..."
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            ></textarea>
            <div className="flex items-center gap-1">
              <button className="p-2 text-slate-400 hover:text-slate-600"><span className="material-icons-round">mic</span></button>
              <button className="bg-primary-600 text-white p-2.5 rounded-xl hover:bg-primary-700 shadow-lg shadow-primary-600/30">
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
                <span key={tag} className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300 hover:border-primary-600 transition-colors cursor-pointer">
                  {tag}
                </span>
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
