
import React from 'react';

const logs = [
  { id: 1, event: '管理员登录', user: '张建国', ip: '192.168.1.102', time: '2023-11-21 14:23:10', type: 'info' },
  { id: 2, event: '知识库敏感内容拦截', user: '系统 AI', ip: '127.0.0.1', time: '2023-11-21 12:45:00', type: 'warning' },
  { id: 3, event: '大额资源批量删除', user: '李晓华', ip: '110.23.4.15', time: '2023-11-21 10:12:33', type: 'error' },
  { id: 4, event: '权限策略更新', user: '张建国', ip: '192.168.1.102', time: '2023-11-21 09:30:15', type: 'info' },
  { id: 5, event: '非法 API 请求尝试', user: '未知', ip: '45.12.3.1', time: '2023-11-20 23:55:12', type: 'error' },
];

const SecurityLogs: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">安全日志</h1>
          <p className="text-slate-500 text-sm">系统核心操作的完整审计追踪轨迹。</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium hover:bg-slate-50 transition-colors">
            导出 CSV
          </button>
          <button className="px-4 py-2 bg-rose-100 text-rose-600 rounded-xl text-sm font-bold hover:bg-rose-200 transition-colors">
            清除所有
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">今日事件</p>
          <h4 className="text-3xl font-bold text-slate-800 dark:text-white">1,429</h4>
          <div className="mt-4 flex items-center gap-2 text-green-500 text-xs">
            <span className="material-icons-round text-sm">trending_up</span>
            <span>较昨日增长 4.2%</span>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">拦截风险</p>
          <h4 className="text-3xl font-bold text-rose-500">12</h4>
          <div className="mt-4 flex items-center gap-2 text-rose-500 text-xs">
            <span className="material-icons-round text-sm">security</span>
            <span>高危尝试: 3 次</span>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">平均响应时长</p>
          <h4 className="text-3xl font-bold text-primary-600">42ms</h4>
          <div className="mt-4 flex items-center gap-2 text-slate-400 text-xs">
            <span className="material-icons-round text-sm">speed</span>
            <span>系统状态: 极优</span>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/30">
          <h3 className="font-bold">审计记录</h3>
        </div>
        <div className="space-y-0 divide-y divide-slate-100 dark:divide-slate-800">
          {logs.map(log => (
            <div key={log.id} className="flex items-center p-5 hover:bg-slate-50/50 transition-colors">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mr-4 ${
                log.type === 'error' ? 'bg-rose-100 text-rose-600' : 
                log.type === 'warning' ? 'bg-orange-100 text-orange-600' : 
                'bg-blue-100 text-blue-600'
              }`}>
                <span className="material-icons-round text-xl">
                  {log.type === 'error' ? 'gpp_bad' : log.type === 'warning' ? 'report_problem' : 'info'}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h5 className="font-bold text-sm text-slate-800 dark:text-slate-200">{log.event}</h5>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded uppercase font-bold tracking-wider ${
                    log.type === 'error' ? 'bg-rose-100 text-rose-700' : 
                    log.type === 'warning' ? 'bg-orange-100 text-orange-700' : 
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {log.type}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1"><span className="material-icons-round text-[12px]">person</span> {log.user}</span>
                  <span className="flex items-center gap-1"><span className="material-icons-round text-[12px]">public</span> {log.ip}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">{log.time}</p>
                <button className="text-[10px] text-primary-600 font-bold hover:underline mt-1">查看详情</button>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 bg-slate-50/50 dark:bg-slate-800/20 text-center">
          <button className="text-sm text-slate-500 font-semibold hover:text-primary-600 transition-colors">加载更多记录</button>
        </div>
      </div>
    </div>
  );
};

export default SecurityLogs;
