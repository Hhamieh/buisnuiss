import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden luxury-gradient">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,0 L100,0 L100,100 Z" fill="currentColor" className="text-industrial-400" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8">
              Engineered for <span className="text-gradient">Authority</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-industrial-400 max-w-2xl mb-12 font-light leading-relaxed"
          >
            High-performance, luxury-standard web development for industrial B2B companies. 
            We transform legacy sites into authoritative digital platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <button className="px-10 py-5 bg-industrial-100 text-industrial-950 font-bold uppercase tracking-widest flex items-center justify-center group hover:bg-white transition-all">
              View Our Portfolio
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 border border-industrial-700 text-industrial-100 font-bold uppercase tracking-widest hover:bg-industrial-800/50 transition-all">
              Our Process
            </button>
          </motion.div>
        </div>
      </div>

      {/* Industrial Accent */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-industrial-950 to-transparent"></div>
    </section>
  );
};

export default Hero;
