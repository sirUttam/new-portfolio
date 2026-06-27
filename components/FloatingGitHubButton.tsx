'use client';

import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

type FloatingGitHubButtonProps = {
  href?: string;
};

export default function FloatingGitHubButton({ href = 'https://github.com' }: FloatingGitHubButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit my GitHub profile"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut', delay: 0.2 }}
      whileHover={{ y: -3, scale: 1.06, boxShadow: '0 18px 36px rgba(201,162,39,0.2)', borderColor: 'rgba(201,162,39,0.36)' }}
      whileTap={{ scale: 0.98 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(16,23,34,0.92)] text-muted shadow-soft backdrop-blur-md transition-colors duration-300 hover:text-accent sm:bottom-8 sm:right-8"
    >
      <motion.span
        className="absolute inset-0 rounded-full bg-[rgba(201,162,39,0.16)]"
        animate={{ scale: [1, 1.12, 1], opacity: [0.16, 0.32, 0.16] }}
        transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.span
        className="absolute inset-0 rounded-full border border-[rgba(201,162,39,0.24)]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.08, 0.2] }}
        transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
      />
      <motion.span
        className="absolute inset-0 rounded-full"
        animate={{ boxShadow: ['0 0 0 rgba(201,162,39,0)', '0 0 18px rgba(201,162,39,0.18)', '0 0 0 rgba(201,162,39,0)'] }}
        transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        animate={{ color: ['#8C7A34', '#C9A227', '#8C7A34'] }}
        transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10"
      >
        <Github className="h-5 w-5" />
      </motion.div>
    </motion.a>
  );
}
