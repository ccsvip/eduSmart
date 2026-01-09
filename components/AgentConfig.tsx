
import React from 'react';

const agents = [
  { id: 1, name: '数学助手', description: '擅长逻辑推理、函数解析与几何证明。', icon: 'functions', color: 'bg-blue-500', active: true },
  { id: 2, name: '语文导师', description: '提供深度文本分析、写作指导与文学赏析。', icon: 'auto_stories', color: 'bg-emerald-500', active: true },
  { id: 3, name: '创意实验室', description: '用于多模态内容生成与教学互动设计。', icon: 'palette', color: 'bg-indigo-500', active: false },
];

const AgentConfig: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">智能体管理</h1>
        <p className="text-slate-500 text-sm">配置与管理不同学科的专用 AI 助手。</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {agents.map(agent => (
          <div key={agent.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white ${agent.color}`}>
                <span className="material-icons-round">{agent.icon}</span>
              </div>
              <div className={`px-2 py-1 rounded-full text-[10px] font-bold ${agent.active ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}>
                {agent.active ? '运行中' : '已停用'}
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2">{agent.name}</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-1">{agent.description}</p>
            <div className="flex gap-2">
              <button className="flex-1 py-2 bg-primary-600 text-white rounded-xl text-sm font-semibold hover:bg-primary-700 transition-colors">配置参数</button>
              <button className="px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 transition-colors">
                <span className="material-icons-round text-sm">settings</span>
              </button>
            </div>
          </div>
        ))}
        <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl flex flex-col items-center justify-center p-8 text-center bg-slate-50/30">
          <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-4 shadow-sm">
            <span className="material-icons-round">add</span>
          </div>
          <h3 className="font-bold text-slate-600">创建新助手</h3>
          <p className="text-xs text-slate-400 mt-1">基于业务场景定义专属智能体</p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
          <span className="material-icons-round text-primary-600">psychology</span>
          全局能力配置
        </h2>
        <div className="space-y-6">
          {[
            { title: '推理模式', desc: '开启深度思维链推理，适用于复杂学术问题。', toggle: true },
            { title: '多模态解析', desc: '允许助手通过上传的图片、PDF等进行关联分析。', toggle: true },
            { title: '实时搜索', desc: '允许助手联网获取最新的学术咨询与新闻。', toggle: false },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-transparent hover:border-primary-600/10 transition-all">
              <div>
                <h4 className="font-bold text-slate-800 dark:text-slate-200">{item.title}</h4>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
              <button className={`w-12 h-6 rounded-full relative transition-colors ${item.toggle ? 'bg-primary-600' : 'bg-slate-300'}`}>
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${item.toggle ? 'right-1' : 'left-1'}`}></div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentConfig;
