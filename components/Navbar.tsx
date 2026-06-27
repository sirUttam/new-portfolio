'use client';

import { motion } from 'framer-motion';
import { Code2, Home, Layers, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Home', href: '#hero', Icon: Home },
  { label: 'Skills', href: '#skills', Icon: Layers },
  { label: 'Projects', href: '#projects', Icon: Code2 }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 backdrop-blur-sm">
      <div className="container relative flex items-center justify-between">
        <motion.a
          href="#hero"
          aria-label="Brand home"
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-2xl font-semibold tracking-[0.35em] text-text"
        >
          U
        </motion.a>

        <nav className="relative flex items-center justify-center">
          <div className={`rounded-full border bg-[rgba(255,255,255,0.02)] px-4 py-2 shadow-soft backdrop-blur-md transition-colors duration-300 ${scrolled ? 'border-[rgba(201,162,39,0.24)]' : 'border-[rgba(255,255,255,0.08)]'}`}>
            <div className="flex items-center gap-4">
              {navItems.map(({ href, Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.08, y: -2 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="rounded-full p-3 text-muted transition-colors hover:text-accent focus-visible:text-accent"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </nav>

        <motion.a
          href="#contact"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="rounded-full p-3 text-muted transition-colors hover:text-accent focus-visible:text-accent"
          aria-label="Contact"
        >
          <Mail size={18} />
        </motion.a>

      </div>
    </header>
  );
}
