"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { techCloud } from '@lib/sections';

const heroText = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen scroll-mt-24 pt-20">
      <div className="container grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroText}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-muted">AI Engineer & Backend Developer</p>
          <h1 className="text-4xl font-semibold leading-tight text-text sm:text-5xl">
            Hi, I'm U.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
            I design premium backend systems and intelligent tooling with polished web experiences for engineering teams.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-sm"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
            className="relative overflow-hidden rounded-[2.5rem] border border-[rgba(201,162,39,0.18)] bg-[#111820] p-5 shadow-soft"
          >
            <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,_rgba(201,162,39,0.1),transparent_35%)]" />
            <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(255,255,255,0.08)] bg-[#0f1724] p-6">
              <Image
                src="/profile.svg"
                alt="Profile portrait"
                width={360}
                height={360}
                className="rounded-[1.75rem]"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-20 rounded-[2.5rem] border border-[rgba(255,255,255,0.06)] bg-[rgba(16,23,34,0.8)] p-6 shadow-soft backdrop-blur-md sm:p-8">
        <div className="overflow-hidden rounded-[2rem] border border-[rgba(255,255,255,0.06)] bg-[#111821] px-4 py-5 sm:px-6 sm:py-6">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {techCloud.map((item) => (
              <motion.span
                key={item.label}
                initial={{ opacity: 0.72, boxShadow: '0 0 0 rgba(201,162,39,0)' }}
                animate={{
                  opacity: [0.72, 1, 0.72],
                  boxShadow: ['0 0 0 rgba(201,162,39,0)', '0 0 0 1px rgba(201,162,39,0.16)', '0 0 0 rgba(201,162,39,0)']
                }}
                transition={{ duration: item.glowDuration, delay: item.glowDelay, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
                className="rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-3 py-2 text-[0.7rem] uppercase tracking-[0.2em] text-muted shadow-soft"
              >
                {item.label}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
