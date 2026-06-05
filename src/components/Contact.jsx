import React from 'react';
import { Mail, Phone, CheckCircle, ShieldCheck } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-industrial-950 border-t border-industrial-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's Build Something <br /><span className="text-gradient">Commanding</span></h2>
              <p className="text-industrial-400 text-lg mb-12 font-light">
                Ready to elevate your digital presence? Tell us about your company and your goals. 
                We'll respond within 48 hours with a preliminary assessment and next steps.
              </p>

              <div className="space-y-10">
                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 rounded-full bg-industrial-900 flex items-center justify-center text-industrial-100 border border-industrial-800">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-industrial-500 uppercase tracking-widest font-bold mb-1">Secure Channel</p>
                    <a href="mailto:hussien.a.hamieh@gmail.com" className="text-xl text-industrial-100 hover:text-white transition-colors font-medium">hussien.a.hamieh@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 rounded-full bg-industrial-900 flex items-center justify-center text-industrial-100 border border-industrial-800">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-industrial-500 uppercase tracking-widest font-bold mb-1">Direct Command</p>
                    <a href="tel:+14807919751" className="text-xl text-industrial-100 hover:text-white transition-colors font-medium">480-791-9751</a>
                  </div>
                </div>

                <div className="p-8 bg-industrial-900/50 border border-industrial-800 rounded-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <ShieldCheck className="w-12 h-12" />
                  </div>
                  <div className="flex items-center space-x-3 mb-4 text-industrial-100">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-bold uppercase tracking-widest text-xs">Payment Protocol</span>
                  </div>
                  <p className="text-industrial-300 text-sm leading-relaxed italic">
                    Elite Web Presence accepts payment exclusively via **corporate or certified check**. 
                    This ensures every engagement is a deliberate, committed partnership.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-industrial-900 p-10 rounded-2xl border border-industrial-800 shadow-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-industrial-500 font-bold">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-industrial-950 border border-industrial-800 p-4 text-industrial-100 focus:outline-none focus:border-industrial-100 transition-colors placeholder:text-industrial-800" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-industrial-500 font-bold">Company Name</label>
                    <input type="text" placeholder="Industrial Corp" className="w-full bg-industrial-950 border border-industrial-800 p-4 text-industrial-100 focus:outline-none focus:border-industrial-100 transition-colors placeholder:text-industrial-800" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-industrial-500 font-bold">Job Title</label>
                    <input type="text" className="w-full bg-industrial-950 border border-industrial-800 p-4 text-industrial-100 focus:outline-none focus:border-industrial-100 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-industrial-500 font-bold">Industry</label>
                    <input type="text" className="w-full bg-industrial-950 border border-industrial-800 p-4 text-industrial-100 focus:outline-none focus:border-industrial-100 transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-industrial-500 font-bold">Project Budget Range</label>
                  <select className="w-full bg-industrial-950 border border-industrial-800 p-4 text-industrial-400 focus:outline-none focus:border-industrial-100 transition-colors appearance-none">
                    <option>$75k–$100k</option>
                    <option>$100k–$150k</option>
                    <option>$150k–$250k</option>
                    <option>$250k+</option>
                    <option>Not Sure</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-industrial-500 font-bold">Current Website Pain Points</label>
                  <textarea rows="4" className="w-full bg-industrial-950 border border-industrial-800 p-4 text-industrial-100 focus:outline-none focus:border-industrial-100 transition-colors"></textarea>
                </div>

                <button className="w-full py-6 bg-industrial-100 text-industrial-950 font-bold uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-1 shadow-xl">
                  Request Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
