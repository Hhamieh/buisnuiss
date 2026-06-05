import React from 'react';
import { RefreshCw, Layout, Search, Settings } from 'lucide-react';

const services = [
  {
    icon: <RefreshCw className="w-8 h-8" />,
    title: "Complete Web Transformation",
    description: "Full redesign and rebuild from the ground up. Strategy, design, development, content, launch, and optimization."
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: "Design System & Brand Portal",
    description: "A comprehensive design system — component library, brand guidelines, and code framework — that your internal team can use."
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "Conversion Optimization Audit",
    description: "A deep analysis of your existing site's performance, user behavior, and conversion funnel."
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Launch Support & Maintenance",
    description: "Post-launch monitoring, A/B testing, content updates, and ongoing optimization."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-industrial-900/30">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Deliver</h2>
        <div className="w-20 h-1 bg-industrial-100 mx-auto"></div>
      </div>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 card-luxury group">
              <div className="text-industrial-100 mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-industrial-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
