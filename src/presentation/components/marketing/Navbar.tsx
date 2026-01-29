import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Command } from "lucide-react";
import type { NavItem } from "../../core/domain/entities";

interface Props {
  items: NavItem[];
}

export default function Navbar({ items }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-4 bg-surface-950/80 backdrop-blur-xl border-b border-white/5"
          : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 flex items-center justify-center bg-primary text-primary-foreground rounded-full transition-transform duration-500 group-hover:rotate-[360deg]">
            <Command size={20} />
          </div>
          <span className="text-lg font-display font-bold uppercase tracking-widest">
            Studio
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-bold uppercase tracking-widest text-surface-400 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/blog"
            className="px-6 py-2 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-primary transition-all active:scale-95"
          >
            Read
          </a>
        </div>

        <button
          className="md:hidden text-white w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`w-6 h-0.5 bg-white transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transition-all ${isOpen ? "opacity-0" : ""}`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-surface-950 border-b border-white/5 py-12 px-6 flex flex-col gap-8 md:hidden shadow-2xl"
          >
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-4xl font-display font-bold text-surface-400 hover:text-primary transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
