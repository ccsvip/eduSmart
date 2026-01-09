
import React from 'react';
import { AppView } from '../types';

interface SidebarProps {
  currentView: AppView;
  onViewChange: (view: AppView) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange }) => {
  const menuItems = [
    { view: AppView.DASHBOARD, label: '课程主页', icon: 'dashboard' },
    { view: AppView.RESOURCES, label: '资源管理', icon: 'folder' },
    { view: AppView.AI_CHAT, label: 'AI 问答模块', icon: 'forum' },
    { view: AppView.AGENT_CONFIG, label: '智能体界面', icon: 'smart_toy' },
  ];

  const adminItems = [
    { view: AppView.PERMISSIONS, label: '权限配置', icon: 'admin_panel_settings' },
    { view: AppView.SECURITY_LOGS, label: '安全日志', icon: 'security' },
  ];

  return (
    <aside className="w-64 flex-shrink-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 hidden md:flex flex-col h-screen sticky top-0">
      <div className="p-6 flex items-center space-x-3">
        <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-600/20">
          <span className="material-icons-round text-white">school</span>
        </div>
        <span className="text-xl font-bold tracking-tight text-slate-800 dark:text-white">EduSmart</span>
      </div>

      <nav className="flex-1 px-4 space-y-1 mt-4 overflow-y-auto custom-scrollbar">
        {menuItems.map((item) => (
          <button
            key={item.view}
            onClick={() => onViewChange(item.view)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all ${
              currentView === item.view
                ? 'bg-primary-600/10 text-primary-600'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <span className="material-icons-round">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}

        <div className="pt-6 pb-2 px-4">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">系统管理</span>
        </div>

        {adminItems.map((item) => (
          <button
            key={item.label}
            onClick={() => onViewChange(item.view)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all ${
              currentView === item.view
                ? 'bg-primary-600/10 text-primary-600'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <span className="material-icons-round">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center space-x-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl">
          <img
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
            src="https://picsum.photos/seed/teacher/100/100"
          />
          <div className="flex-1 overflow-hidden text-left">
            <p className="text-sm font-semibold truncate">张老师</p>
            <p className="text-xs text-slate-500 truncate">高级教研组</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
