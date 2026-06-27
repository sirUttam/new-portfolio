"use client";
import { motion } from 'framer-motion';
import SectionHeading from '@components/SectionHeading';
import SkillCard from '@components/SkillCard';
import { skillGroups } from '@lib/sections';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function SkillsSection() {
  return (
    <section id="skills" className="mt-24">
      <SectionHeading
        title="Skills"
        description="A curated set of tools and systems for backend, data, tooling, and web delivery."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2"
      >
        {skillGroups.map((group) => (
          <SkillCard key={group.title} group={group} />
        ))}
      </motion.div>
    </section>
  );
}
