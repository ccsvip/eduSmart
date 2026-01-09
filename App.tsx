
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import AIChat from './components/AIChat';
import Resources from './components/Resources';
import AgentConfig from './components/AgentConfig';
import Permissions from './components/Permissions';
import SecurityLogs from './components/SecurityLogs';
import { AppView } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const renderView = () => {
    switch (currentView) {
      case AppView.DASHBOARD:
        return <Dashboard />;
      case AppView.AI_CHAT:
        return <AIChat />;
      case AppView.RESOURCES:
        return <Resources />;
      case AppView.AGENT_CONFIG:
        return <AgentConfig />;
      case AppView.PERMISSIONS:
        return <Permissions />;
      case AppView.SECURITY_LOGS:
        return <SecurityLogs />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      
      <main className="flex-1 flex flex-col min-w-0 bg-background-light dark:bg-background-dark">
        <header className="h-16 flex items-center justify-between px-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-10">
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full w-96 max-w-md border border-transparent focus-within:border-primary-600/30 transition-all">
            <span className="material-icons-round text-slate-400 text-sm">search</span>
            <input
              className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-slate-400"
              placeholder="搜索课程、资源或问答..."
              type="text"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
            >
              <span className="material-icons-round">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
            </button>
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
              <span className="material-icons-round">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
            </button>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-800"></div>
            <button className="flex items-center space-x-2 bg-primary-600 px-4 py-2 rounded-lg text-white font-medium hover:bg-primary-700 transition-colors shadow-md shadow-primary-600/20">
              <span className="material-icons-round text-sm">add</span>
              <span className="text-sm">新建资源</span>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          {renderView()}
        </div>

        {/* Floating Action Button for AI - visible in Dashboard */}
        {currentView === AppView.DASHBOARD && (
          <div className="fixed bottom-8 right-8 z-50">
            <button 
              onClick={() => setCurrentView(AppView.AI_CHAT)}
              className="w-16 h-16 bg-primary-600 text-white rounded-full shadow-2xl shadow-primary-600/50 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 group"
            >
              <span className="material-icons-round group-hover:rotate-12 transition-transform">bolt</span>
              <span className="absolute -top-1 -right-1 bg-red-500 text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white dark:border-slate-900">AI</span>
            </button>
          </div>
        )}
      </main>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-6 py-3 flex justify-between items-center z-50">
        {[
          { view: AppView.DASHBOARD, label: '首页', icon: 'home' },
          { view: AppView.RESOURCES, label: '资源', icon: 'folder_open' },
          { view: AppView.AI_CHAT, label: 'AI', icon: 'forum' },
          { view: AppView.PERMISSIONS, label: '系统', icon: 'person_outline' }
        ].map(nav => (
          <button 
            key={nav.view}
            onClick={() => setCurrentView(nav.view)}
            className={`flex flex-col items-center space-y-1 ${currentView === nav.view ? 'text-primary-600' : 'text-slate-400'}`}
          >
            <span className="material-icons-round">{nav.icon}</span>
            <span className="text-[10px] font-medium">{nav.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
