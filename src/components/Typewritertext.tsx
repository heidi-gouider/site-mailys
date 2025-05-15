'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const fullText = `Le montage, c’est l’écriture finale du film.” — Agnès Varda`;

export default function TypewriterText() {
  const [displayedText, setDisplayedText] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
        setIsDone(true);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="absolute bottom-6  text-[#202020] text-sm md:text-base font-mono whitespace-nowrap z-30 bg-[#E4E2DD]/30 px-3 py-1 rounded"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5, duration: 1 }}
    >
      {displayedText}
      {!isDone && <span className="animate-pulse">|</span>}
    </motion.div>
  );
}
