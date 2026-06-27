import {
  Activity,
  Code2,
  Database,
  GitBranch,
  Github,
  Hash,
  Monitor,
  Sparkles,
  Terminal,
  Type,
  Zap,
  ChartLine,
  Cpu
} from 'lucide-react';

const iconMap = {
  FastAPI: Code2,
  Python: Zap,
  PostgreSQL: Database,
  Cpu,
  Code2: Code2,
  Hash: Hash,
  Activity: Activity,
  ChartLine: ChartLine,
  GitBranch: GitBranch,
  Github: Github,
  Monitor: Monitor,
  Terminal: Terminal,
  Type: Type,
  Zap: Zap,
  Database: Database,
  Sparkles: Sparkles
};

type TechBadgeProps = {
  name: string;
  icon: string;
};

export default function TechBadge({ name, icon }: TechBadgeProps) {
  const Icon = iconMap[icon as keyof typeof iconMap] ?? Sparkles;

  return (
    <div className="group inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-3 py-2 text-sm text-text transition duration-300 hover:border-accent cursor-pointer hover:bg-[rgba(201,162,39,0.08)] hover:text-accent">
      <Icon size={14} className="transition-colors duration-300 group-hover:text-accent" />
      <span>{name}</span>
    </div>
  );
}
