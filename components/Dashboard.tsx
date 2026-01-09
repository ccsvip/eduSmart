
import React from 'react';
import { Course } from '../types';

const courses: Course[] = [
  {
    id: '1',
    title: '初一数学：代数与函数入门',
    category: 'CORE MATHEMATICS',
    status: 'ongoing',
    resourcesCount: 12,
    grade: '初一年级',
    classes: '1班/2班',
    color: 'from-blue-400 to-indigo-600',
    icon: 'functions'
  },
  {
    id: '2',
    title: '初二语文：中国近现代文学选读',
    category: 'LITERATURE',
    status: 'ongoing',
    resourcesCount: 24,
    grade: '初二年级',
    classes: '重点班',
    color: 'from-emerald-400 to-teal-600',
    icon: 'menu_book'
  },
  {
    id: '3',
    title: '初三物理：力学综合应用与实践',
    category: 'PHYSICS',
    status: 'upcoming',
    resourcesCount: 8,
    grade: '初三年级',
    classes: '全体',
    color: 'from-orange-400 to-rose-600',
    icon: 'biotech'
  }
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white">课程工作台</h1>
          <p className="text-slate-500 mt-1">欢迎回来，今天有 3 个新资源待审核。</p>
        </div>
        <div className="flex bg-white dark:bg-slate-800 p-1 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
          <button className="px-4 py-2 rounded-lg bg-primary-600 text-white text-sm font-medium">列表试图</button>
          <button className="px-4 py-2 rounded-lg text-slate-500 dark:text-slate-400 text-sm font-medium">日历试图</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {['学科分类', '年级', '班级', '学期'].map((label, idx) => (
          <div key={label} className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase mb-1">{label}</p>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                {['全部学科', '全校年级', '全部班级', '2024年 春季'][idx]}
              </p>
            </div>
            <span className="material-icons-round text-primary-600 bg-primary-600/10 p-2 rounded-xl">
              {['category', 'grade', 'groups', 'event'][idx]}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-800">
            <div className={`h-40 bg-gradient-to-br ${course.color} relative overflow-hidden p-6 flex flex-col justify-between`}>
              <div className="absolute top-0 right-0 p-8 opacity-20">
                <span className="material-icons-round text-white text-8xl">{course.icon}</span>
              </div>
              <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-full w-fit uppercase tracking-widest">{course.category}</span>
              <h3 className="text-white text-xl font-bold leading-tight relative z-10">{course.title}</h3>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className={`w-2 h-2 rounded-full ${course.status === 'ongoing' ? 'bg-green-500' : 'bg-orange-500'}`}></span>
                  <span className="text-xs font-medium text-slate-500">{course.status === 'ongoing' ? '正在进行' : '即将开始'}</span>
                </div>
                <span className="text-xs text-slate-400">{course.resourcesCount} 份资源</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-[10px] rounded-lg text-slate-600 dark:text-slate-400">{course.grade}</span>
                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-[10px] rounded-lg text-slate-600 dark:text-slate-400">{course.classes}</span>
              </div>
              <button className="w-full py-3 bg-slate-100 dark:bg-slate-800 hover:bg-primary-600 hover:text-white text-slate-700 dark:text-slate-300 rounded-2xl font-semibold transition-all flex items-center justify-center space-x-2 group-hover:bg-primary-600 group-hover:text-white">
                <span>进入课程</span>
                <span className="material-icons-round text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        ))}
        <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl flex flex-col items-center justify-center p-8 group hover:border-primary-600/50 transition-all cursor-pointer bg-slate-50/50 dark:bg-slate-900/50">
          <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform mb-4">
            <span className="material-icons-round text-slate-400 group-hover:text-primary-600">add</span>
          </div>
          <p className="font-bold text-slate-500 dark:text-slate-400 group-hover:text-primary-600">创建新课程</p>
          <p className="text-xs text-slate-400 mt-2 text-center">快速生成课程大纲与资源包</p>
        </div>
      </div>

      <div className="mt-12 bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary-600/5 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary-600/10 rounded-xl">
                <span className="material-icons-round text-primary-600">auto_awesome</span>
              </div>
              <h2 className="text-xl font-bold">智能辅助概览</h2>
            </div>
            <button className="text-primary-600 text-sm font-semibold hover:underline">查看全部日志</button>
          </div>
          <div className="space-y-4">
            {[
              { label: '知识库已自动解析：', highlight: '《2024数学复习大纲》', desc: '32个知识点已映射到初一数学课程', time: '10分钟前', icon: 'source', color: 'blue' },
              { label: 'AI 问答模块：', highlight: '学生提问激增', desc: '过去一小时收到 45 个关于 "勾股定理" 的提问', time: '1小时前', icon: 'forum', color: 'indigo' }
            ].map((log, idx) => (
              <div key={idx} className="flex items-center p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-transparent hover:border-primary-600/20 transition-all">
                <div className={`w-10 h-10 bg-${log.color}-100 dark:bg-${log.color}-900/30 rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className={`material-icons-round text-${log.color}-500 text-xl`}>{log.icon}</span>
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium">{log.label} <span className="text-primary-600 font-bold">{log.highlight}</span></p>
                  <p className="text-xs text-slate-400 mt-0.5">{log.desc}</p>
                </div>
                <span className="text-xs text-slate-400">{log.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
