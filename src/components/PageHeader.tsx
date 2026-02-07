'use client';

import Breadcrumbs from "./Breadcrumbs";
import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <>
      <Breadcrumbs lastSegmentLabel={title} />
      <div className="bg-transparent py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center gap-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: [0, -10, 0],
              }}
              transition={{ 
                opacity: { duration: 0.6 },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              style={{ willChange: "transform" }}
              className="text-5xl md:text-7xl font-bold text-[var(--primary-green)] drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)] transform-gpu"
            >
              {title}
            </motion.h1>
            
            {subtitle && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: [0, 8, 0],
                }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 0.2 },
                  y: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }
                }}
                style={{ willChange: "transform" }}
                className="text-xl md:text-2xl italic tracking-[0.2em] font-black text-slate-400 uppercase drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)] ml-1 transform-gpu"
              >
                {subtitle}
              </motion.span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

