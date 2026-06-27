"use client";
import SectionHeading from '@components/SectionHeading';
import ProjectCard from '@components/ProjectCard';
import { motion } from 'framer-motion';
import { projects } from '@lib/sections';

export default function ProjectsSection() {
  return (
    <section id="projects" className="mt-24">
      <SectionHeading
        title="Projects"
        description="Selected case studies and polished work designed for engineering-led audiences."
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="grid gap-6 md:grid-cols-2"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </section>
  );
}
