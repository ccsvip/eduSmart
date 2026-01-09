
import React from 'react';

const resources = [
  { id: 1, name: '2024年秋季数学大纲.pdf', type: 'pdf', size: '2.4 MB', date: '2023-11-20', subject: '数学', user: '张老师' },
  { id: 2, name: '初中物理实验演示集.mp4', type: 'video', size: '156 MB', date: '2023-11-18', subject: '物理', user: '李老师' },
  { id: 3, name: '中国现代文学史.pptx', type: 'pptx', size: '12.8 MB', date: '2023-11-15', subject: '语文', user: '张老师' },
  { id: 4, name: '期末考复习要点.docx', type: 'doc', size: '450 KB', date: '2023-11-10', subject: '数学', user: '王老师' },
];

const Resources: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'pdf': return 'picture_as_pdf';
      case 'video': return 'movie';
      case 'pptx': return 'slideshow';
      case 'doc': return 'description';
      default: return 'insert_drive_file';
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'pdf': return 'text-rose-500 bg-rose-50';
      case 'video': return 'text-blue-500 bg-blue-50';
      case 'pptx': return 'text-orange-500 bg-orange-50';
      case 'doc': return 'text-indigo-500 bg-indigo-50';
      default: return 'text-slate-500 bg-slate-50';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">资源管理中心</h1>
          <p className="text-slate-500 text-sm">在这里上传、预览和管理您的教学课件与媒体资源。</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm">
            <span className="material-icons-round text-sm">create_new_folder</span>
            <span>新建目录</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-xl text-sm font-medium hover:bg-primary-700 transition-colors shadow-md shadow-primary-600/20">
            <span className="material-icons-round text-sm">cloud_upload</span>
            <span>上传资源</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {['文档库', '视频库', '音频库', '回收站'].map((folder, i) => (
          <div key={folder} className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 cursor-pointer hover:border-primary-600/30 transition-all">
            <div className={`p-3 rounded-xl ${i === 3 ? 'bg-rose-50 text-rose-500' : 'bg-primary-50 text-primary-600'}`}>
              <span className="material-icons-round">{i === 3 ? 'delete' : 'folder'}</span>
            </div>
            <div>
              <p className="font-bold text-slate-800 dark:text-slate-200">{folder}</p>
              <p className="text-xs text-slate-400">124 个项目</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">名称</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">学科</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">大小</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">上传者</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">日期</th>
                <th className="px-6 py-4 text-right text-xs font-bold text-slate-400 uppercase tracking-wider">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {resources.map((res) => (
                <tr key={res.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${getColor(res.type)}`}>
                        <span className="material-icons-round text-sm">{getIcon(res.type)}</span>
                      </div>
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{res.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-[10px] rounded-lg font-medium">{res.subject}</span>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-500">{res.size}</td>
                  <td className="px-6 py-4 text-xs text-slate-500">{res.user}</td>
                  <td className="px-6 py-4 text-xs text-slate-500">{res.date}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-1.5 text-slate-400 hover:text-primary-600 transition-colors">
                        <span className="material-icons-round text-sm">visibility</span>
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-blue-500 transition-colors">
                        <span className="material-icons-round text-sm">download</span>
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-rose-500 transition-colors">
                        <span className="material-icons-round text-sm">more_vert</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Resources;
