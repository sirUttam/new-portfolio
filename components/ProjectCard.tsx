import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import type { ProjectItem } from '@/types';

const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
};

type ProjectCardProps = {
  project: ProjectItem;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariant}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      whileHover={{ y: -2, scale: 1.01, boxShadow: '0 18px 40px rgba(5, 8, 12, 0.28)', borderColor: 'rgba(201,162,39,0.24)' }}
      className="section-surface p-6 transition-[transform,box-shadow,border-color,background-color] duration-300 hover:border-[rgba(201,162,39,0.24)] hover:bg-[rgba(201,162,39,0.04)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-muted">Project</p>
          <h3 className="mt-3 text-2xl font-semibold text-text">{project.title}</h3>
        </div>
        <div className="flex items-center gap-2">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} source code`}
            whileHover={{ y: -2, scale: 1.05 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] p-3 text-muted transition-colors duration-300 hover:border-accent hover:bg-[rgba(201,162,39,0.12)] hover:text-accent focus-visible:text-accent"
          >
            <Github size={18} />
          </motion.a>
          <motion.a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} live demo`}
            whileHover={{ y: -2, scale: 1.05 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] p-3 text-muted transition-colors duration-300 hover:border-accent hover:bg-[rgba(201,162,39,0.12)] hover:text-accent focus-visible:text-accent"
          >
            <ExternalLink size={18} />
          </motion.a>
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-muted">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <motion.span
            key={tech}
            whileHover={{ y: -2, scale: 1.02, borderColor: 'rgba(201,162,39,0.24)' }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted transition-colors duration-300"
          >
            {tech}
          </motion.span>
        ))}
      </div>

      <div className="mt-6 flex items-center text-sm text-accent">
        {/* <ArrowRight size={16} /> */}
        {/* <span className="ml-2">Try It</span> */}
      </div>
    </motion.article>
  );
}
