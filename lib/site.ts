import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  BarChart3,
  ClipboardList,
  Cpu,
  Workflow,
  PenTool,
} from "lucide-react";

export const site = {
  name: "李恒成",
  nameEn: "Li Hengcheng",
  role: "AI 产品经理",
  roleEn: "AI Product Manager",
  tagline:
    "专注于 AI 产品设计与落地，致力于将大模型能力转化为真实用户价值。",
  bio: "我是一名 AI 产品经理，擅长从 0 到 1 构建 AI 驱动的产品。关注用户体验、数据驱动决策与跨团队协作，喜欢把模糊的需求拆解为可被快速验证的方案，并在迭代中持续打磨产品体验。",
  location: "中国 · 深圳",
  phone: "+86 136-8642-3827",
  email: "529559434@qq.com",
  url: "https://www.lihengcheng.com",
  avatar: "/avatar.jpg",
  socials: {
    github: "https://github.com/your-handle",
    linkedin: "https://www.linkedin.com/in/your-handle",
  },
} as const;

export type Skill = {
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
};

export const skills: Skill[] = [
  {
    title: "AI 产品设计",
    description: "围绕大模型能力定义产品形态，把模糊场景沉淀为可交付的方案。",
    tags: ["LLM 场景挖掘", "Prompt 工程", "Agent 工作流"],
    icon: Sparkles,
  },
  {
    title: "数据分析",
    description: "用数据驱动产品决策，建立可量化的评测与增长闭环。",
    tags: ["模型评测", "用户行为分析", "AB 实验"],
    icon: BarChart3,
  },
  {
    title: "产品方法论",
    description: "系统化的需求拆解与节奏把控，让团队聚焦在最有价值的事情上。",
    tags: ["用户研究", "需求拆解", "PRD", "产品路线图"],
    icon: ClipboardList,
  },
  {
    title: "技术理解",
    description: "理解模型能力边界与落地约束，能与算法/工程深入沟通。",
    tags: ["Claude / GPT / Gemini", "RAG", "MCP"],
    icon: Cpu,
  },
  {
    title: "项目管理",
    description: "推动跨团队协作，按节奏交付高质量产品迭代。",
    tags: ["敏捷开发", "跨团队协作", "Jira / Notion"],
    icon: Workflow,
  },
  {
    title: "设计工具",
    description: "用原型与流程图把抽象想法具象化，降低沟通成本。",
    tags: ["原型设计", "用户旅程图", "信息架构"],
    icon: PenTool,
  },
];

export type Experience = {
  period: string;
  company: string;
  title: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    period: "2023 — 至今",
    company: "某 AI 科技公司",
    title: "AI 产品经理",
    highlights: [
      "负责公司核心 AI 助手产品的从 0 到 1 设计与迭代",
      "主导 RAG 知识库产品落地，MAU 增长 300%",
      "设计 Agent 工作流，提升用户任务完成率 45%",
    ],
  },
  {
    period: "2021 — 2023",
    company: "某互联网大厂",
    title: "产品经理",
    highlights: [
      "负责 B 端 SaaS 产品模块，服务超过 5000 家企业客户",
      "推动产品智能化升级，引入 AI 能力提升核心指标",
    ],
  },
  {
    period: "2019 — 2021",
    company: "某初创公司",
    title: "产品助理 → 初级产品经理",
    highlights: ["参与多个 0-1 产品项目，积累完整产品生命周期经验"],
  },
];

export const navItems = [
  { href: "#about", label: "关于" },
  { href: "#skills", label: "技能" },
  { href: "#experience", label: "经历" },
  { href: "#contact", label: "联系" },
] as const;
