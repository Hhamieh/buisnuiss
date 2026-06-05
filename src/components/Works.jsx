import React from 'react';
import { motion } from 'framer-motion';

const Works = () => {
  return (
    <section id="works" className="py-24 bg-industrial-950">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h2>
          <div className="w-20 h-1 bg-industrial-100"></div>
          <p className="mt-6 text-industrial-400 max-w-2xl font-light">
            We don't just redesign websites — we redefine digital authority. 
            Explore how we've transformed legacy industrial presences into commanding sales assets.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-32">
          {/* Textron Case Study */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <span className="text-sm uppercase tracking-widest text-industrial-500 font-bold">Aerospace & Defense Transformation</span>
                <h3 className="text-4xl md:text-5xl font-bold">Textron Inc.</h3>
              </div>
              
              <p className="text-lg text-industrial-400 leading-relaxed font-light">
                We took a legacy conglomerate presence and engineered a unified, high-performance digital ecosystem. 
                Focusing on the <strong className="text-industrial-100 font-medium">"Titanium"</strong> concept — dark, metallic, and aerospace-inspired — we elevated the brand to match its market dominance.
              </p>

              <div className="grid grid-cols-2 gap-12 py-8 border-y border-industrial-800">
                <div>
                  <h4 className="text-3xl font-bold text-industrial-100">340%</h4>
                  <p className="text-xs text-industrial-500 uppercase tracking-widest mt-1">Qualified Lead Increase</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-industrial-100">33.5x</h4>
                  <p className="text-xs text-industrial-500 uppercase tracking-widest mt-1">First-Year ROI</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-industrial-100">45%</h4>
                  <p className="text-xs text-industrial-500 uppercase tracking-widest mt-1">Faster Sales Cycle</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-industrial-100">99.9%</h4>
                  <p className="text-xs text-industrial-500 uppercase tracking-widest mt-1">Lighthouse Score</p>
                </div>
              </div>

              <blockquote className="border-l-2 border-industrial-700 pl-6 italic text-industrial-400">
                "Our new site is our strongest sales asset. The 'Industrial Luxury' approach was exactly what we needed."
                <footer className="mt-2 text-sm font-bold text-industrial-500">— Michael Torres, VP of Digital Strategy</footer>
              </blockquote>

              <button className="text-industrial-100 font-bold uppercase tracking-widest flex items-center group">
                Deep Dive into Transformation
                <div className="ml-4 w-12 h-px bg-industrial-700 group-hover:w-20 transition-all"></div>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video card-luxury overflow-hidden group shadow-2xl"
            >
              <div className="absolute inset-0 bg-industrial-900 flex items-center justify-center">
                <span className="text-industrial-800 font-display text-8xl font-black opacity-30 select-none">TITANIUM</span>
              </div>
              
              {/* Overlay content representing the new site interface */}
              <div className="absolute inset-8 border border-white/5 p-10 flex flex-col justify-end bg-gradient-to-t from-industrial-950/90 via-industrial-950/40 to-transparent">
                <div className="flex items-center space-x-4 mb-6">
                   <div className="h-10 w-10 bg-white/10 rounded flex items-center justify-center">
                      <div className="h-4 w-4 bg-white/40 rotate-45"></div>
                   </div>
                   <div className="space-y-1">
                      <div className="h-2 w-24 bg-white/40"></div>
                      <div className="h-1 w-16 bg-white/20"></div>
                   </div>
                </div>
                <div className="h-12 w-full bg-white/5 mb-4 border border-white/10"></div>
                <div className="grid grid-cols-3 gap-4">
                   <div className="h-20 bg-white/5 border border-white/5"></div>
                   <div className="h-20 bg-white/5 border border-white/5"></div>
                   <div className="h-20 bg-white/5 border border-white/5"></div>
                </div>
              </div>

              {/* After Badge */}
              <div className="absolute top-6 right-6 px-4 py-2 bg-industrial-100 text-industrial-950 text-[10px] uppercase font-bold tracking-[0.2em]">
                Engineered Transformation
              </div>
            </motion.div>
          </div>

          {/* Vision Section */}
          <div className="py-16 border-t border-industrial-900">
            <div className="max-w-4xl mx-auto text-center">
               <h3 className="text-3xl font-bold mb-6">"Elite Web Presence was the only one who presented a vision that respected our industrial heritage while elevating it to something truly premium."</h3>
               <div className="w-12 h-1 bg-industrial-100 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
