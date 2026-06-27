"use client";
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import ContactForm from '@components/ContactForm';
import SectionHeading from '@components/SectionHeading';
import { contactLinks } from '@lib/sections';

const iconMap = {
  Github,
  Linkedin,
  Mail
};

export default function ContactSection() {
  return (
    <section id="contact" className="mt-24 pb-12">
      <SectionHeading
        title="Let's Connect"
        description="Reach out with a project inquiry, collaboration idea, or engineering conversation."
      />

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <ContactForm />

        <div className="section-surface flex flex-col justify-between p-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted">Contact</p>
            <h3 className="mt-4 text-2xl font-semibold text-text">Available for new collaborations</h3>
            <p className="mt-4 text-sm leading-7 text-muted">
              I am focused on backend systems, AI infrastructure, and developer tools with strong performance and elegant execution.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {contactLinks.map((contact) => {
              const Icon = iconMap[contact.icon as keyof typeof iconMap];
              return (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                    boxShadow: '0 20px 45px rgba(5, 8, 12, 0.32)',
                    borderColor: 'rgba(201,162,39,0.32)',
                    backgroundColor: 'rgba(201,162,39,0.08)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 24, mass: 0.9 }}
                  className="group inline-flex items-center gap-3 rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-5 py-4 text-text shadow-soft transition-colors duration-300 hover:border-accent hover:text-accent focus-visible:text-accent"
                >
                  <motion.span
                    className="relative"
                    whileHover={{ y: -3, scale: 1.15, rotate: 4 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                  >
                    <Icon className="h-5 w-5 transition-colors duration-300 group-hover:text-accent" />
                  </motion.span>
                  <motion.span
                    className="relative"
                    whileHover={{ y: -2, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                  >
                    {contact.label}
                  </motion.span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
