
import React from 'react';

const users = [
  { id: 1, name: '张建国', role: '超级管理员', email: 'admin@edusmart.ai', status: '在线' },
  { id: 2, name: '李晓华', role: '高级教师', email: 'lx@school.edu', status: '离线' },
  { id: 3, name: '王大伟', role: '教研组长', email: 'wdw@school.edu', status: '在线' },
  { id: 4, name: '陈美玲', role: '普通教师', email: 'cml@school.edu', status: '离线' },
];

const Permissions: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">权限配置</h1>
          <p className="text-slate-500 text-sm">管理系统用户及其对应的访问权限级别。</p>
        </div>
        <button className="px-4 py-2 bg-primary-600 text-white rounded-xl text-sm font-semibold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20">
          添加新成员
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {['管理员', '老师', '学生', '教研室'].map((role, i) => (
          <div key={role} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-primary-600/10 text-primary-600 rounded-full flex items-center justify-center mb-3">
              <span className="material-icons-round">{['admin_panel_settings', 'school', 'face', 'groups'][i]}</span>
            </div>
            <h4 className="font-bold">{role}</h4>
            <p className="text-xs text-slate-400 mt-1">{[1, 12, 450, 4][i]} 位成员</p>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
          <h3 className="font-bold">成员列表</h3>
          <div className="relative">
            <span className="material-icons-round absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
            <input type="text" placeholder="搜索成员..." className="pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-xl text-xs w-64 focus:ring-1 focus:ring-primary-600/30" />
          </div>
        </div>
        <table className="w-full text-left">
          <thead className="bg-slate-50/50 dark:bg-slate-800/30 border-b border-slate-200 dark:border-slate-700">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">成员</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">角色</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">账号</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">状态</th>
              <th className="px-6 py-4 text-right text-xs font-bold text-slate-400 uppercase tracking-wider">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {users.map(user => (
              <tr key={user.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img src={`https://picsum.photos/seed/${user.id}/40/40`} className="w-8 h-8 rounded-full" alt="" />
                    <span className="text-sm font-semibold">{user.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{user.role}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-xs text-slate-500">{user.email}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${user.status === '在线' ? 'bg-green-500' : 'bg-slate-300'}`}></span>
                    <span className="text-xs text-slate-500">{user.status}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-primary-600 text-xs font-bold hover:underline">编辑权限</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Permissions;
