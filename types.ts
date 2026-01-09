
export enum AppView {
  DASHBOARD = 'DASHBOARD',
  RESOURCES = 'RESOURCES',
  AI_CHAT = 'AI_CHAT',
  AGENT_CONFIG = 'AGENT_CONFIG',
  PERMISSIONS = 'PERMISSIONS',
  SECURITY_LOGS = 'SECURITY_LOGS'
}

export interface Course {
  id: string;
  title: string;
  category: string;
  status: 'ongoing' | 'upcoming';
  resourcesCount: number;
  grade: string;
  classes: string;
  color: string;
  icon: string;
}

export interface Resource {
  id: string;
  name: string;
  type: 'pdf' | 'video' | 'pptx' | 'doc';
  size: string;
  date: string;
  access: 'all' | 'teacher' | 'class';
  subject: string;
  target: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  sources?: Array<{
    title: string;
    type: string;
    detail: string;
  }>;
}
