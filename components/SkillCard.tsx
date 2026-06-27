import type { SkillGroup } from '@/types';
import { motion } from 'framer-motion';
import TechBadge from './TechBadge';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

type SkillCardProps = {
  group: SkillGroup;
};

export default function SkillCard({ group }: SkillCardProps) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      whileHover={{ y: -2, scale: 1.01, boxShadow: '0 18px 40px rgba(5, 8, 12, 0.28)' }}
      className="section-surface p-6 transition-[transform,box-shadow,border-color,background-color] duration-300 hover:border-[rgba(201,162,39,0.24)] hover:bg-[rgba(201,162,39,0.04)]"
    >
      <h3 className="text-lg font-semibold text-text">{group.title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{group.description}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        {group.badges.map((badge) => (
          <TechBadge key={badge.name} name={badge.name} icon={badge.icon} />
        ))}
      </div>
    </motion.article>
  );
}
