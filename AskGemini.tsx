import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

interface CardProps {
  title: string;
  description: string;
  index?: number;
  className?: string;
  color?: string;
}

export function Card({ title, description, index, className, color }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "group relative p-8 bg-black/40 border border-white/5 transition-all ring-1 ring-white/5 hover:ring-[#00F0FF]/50",
        className
      )}
    >
      {index !== undefined && (
        <span className="text-4xl font-black text-[#00F0FF]/25 group-hover:text-[#00F0FF]/50 mb-6 block transition-colors font-mono">
          {String(index + 1).padStart(2, '0')}
        </span>
      )}
      
      <h3 className="text-xl font-black uppercase tracking-tight text-white mb-4 group-hover:text-[#00F0FF] transition-colors leading-none">
        {title}
      </h3>
      <p className="text-sm text-white/40 leading-relaxed font-medium">
        {description}
      </p>

      {color && (
        <div 
          className="mt-6 flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase opacity-40"
          style={{ color }}
        >
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
          {color}
        </div>
      )}
    </motion.div>
  );
}
