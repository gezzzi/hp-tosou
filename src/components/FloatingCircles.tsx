'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CircleProps {
  size: number;
  top: string;
  left: string;
  duration: number;
  delay: number;
  color?: string;
}

const Circle = ({ size, top, left, duration, delay, color = 'var(--primary-green)' }: CircleProps) => (
  <motion.div
    className="absolute rounded-full pointer-events-none z-0 opacity-[0.2]"
    style={{
      width: size,
      height: size,
      top,
      left,
      backgroundColor: color,
    }}
    animate={{
      y: [0, -100, 50, 0],
      x: [0, 50, -50, 0],
      scale: [1, 1.3, 0.8, 1],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration: duration * 0.8,
      repeat: Infinity,
      delay,
      ease: "linear",
    }}
  />
);

export default function FloatingCircles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* サイト全体に散りばめられた控えめな丸の装飾 */}
      <Circle size={300} top="10%" left="-5%" duration={15} delay={0} />
      <Circle size={200} top="40%" left="85%" duration={18} delay={2} color="var(--accent-yellow)" />
      <Circle size={400} top="70%" left="10%" duration={20} delay={4} />
      <Circle size={150} top="15%" left="70%" duration={12} delay={1} color="var(--accent-yellow)" />
      <Circle size={250} top="85%" left="80%" duration={16} delay={3} />
      
      {/* 小さなアクセントの丸 */}
      <Circle size={50} top="25%" left="20%" duration={10} delay={0.5} />
      <Circle size={80} top="60%" left="75%" duration={14} delay={2.5} />
      <Circle size={40} top="90%" left="30%" duration={11} delay={1.5} color="var(--accent-yellow)" />
    </div>
  );
}
