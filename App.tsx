import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Section } from './components/Section';
import { SERVICES, ADVANTAGES, PROCESS, PROJECTS, TESTIMONIALS } from './constants';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Mail, MapPin, Phone } from 'lucide-react';

const App: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-gray">
          {/* Background Decorative Elements */}
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-brand-primary font-bold tracking-wider uppercase mb-4 text-sm md:text-base">
                Creative Media · Digital Marketing · Branding
              </h2>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-brand-black tracking-tight mb-8 leading-tight">
                We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">Digital</span> <br />
                Experiences.
              </h1>
              <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
                XooX Media helps forward-thinking companies grow through strategic branding, modern web design, and data-driven marketing.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a 
                  href="#contact"
                  onClick={(e) => handleScroll(e, 'contact')}
                  className="px-8 py-4 rounded-full bg-brand-black text-white font-semibold text-lg hover:bg-brand-primary transition-all duration-300 shadow-xl hover:shadow-brand-primary/25"
                >
                  Get in Touch
                </a>
                <a 
                  href="#portfolio"
                  onClick={(e) => handleScroll(e, 'portfolio')}
                  className="px-8 py-4 rounded-full bg-white text-brand-black border border-slate-200 font-semibold text-lg hover:border-brand-black transition-all duration-300 flex items-center group"
                >
                  View Work
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <Section 
          id="services" 
          title="Our Services" 
          subtitle="Comprehensive digital solutions tailored to your business needs."
          className="bg-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-brand-gray hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* ABOUT & MISSION SECTION */}
        <Section id="about" className="bg-brand-gray">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-brand-black mb-6">
                We are XooX Media.
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  We are a full-service media and marketing agency dedicated to delivering creative and strategic solutions. We don't just build websites or run ads; we build brands.
                </p>
                <p>
                  <strong className="text-brand-black">Our Mission:</strong> To empower businesses with innovative digital tools, ensuring client satisfaction through collaboration, transparency, and high-quality outputs.
                </p>
              </div>

              {/* WHY CHOOSE US GRID */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {ADVANTAGES.map((adv) => (
                  <div key={adv.id} className="flex items-start space-x-3">
                    <CheckCircle className="flex-shrink-0 text-brand-accent mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-brand-black">{adv.title}</h4>
                      <p className="text-sm text-slate-500 mt-1">{adv.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                 <img 
                   src="https://picsum.photos/800/800?random=10" 
                   alt="Team working" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block">
                 <p className="text-4xl font-bold text-brand-primary">5+</p>
                 <p className="text-sm font-medium text-slate-600">Years Experience</p>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* PROCESS SECTION */}
        <Section 
          id="process" 
          title="How We Work" 
          subtitle="Our proven process to take your project from concept to launch."
          className="bg-white"
        >
          <div className="relative">
             {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              {PROCESS.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-white pt-4"
                >
                  <div className="w-24 h-24 mx-auto bg-white rounded-full border-4 border-slate-50 flex items-center justify-center mb-6 relative z-10">
                     <div className="w-20 h-20 bg-brand-black rounded-full flex items-center justify-center text-white">
                        <step.icon size={32} />
                     </div>
                     <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-accent rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                       {step.stepNumber}
                     </div>
                  </div>
                  <h3 className="text-xl font-bold text-center text-brand-black mb-2">{step.title}</h3>
                  <p className="text-center text-slate-600 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* PORTFOLIO SECTION */}
        <Section 
          id="portfolio" 
          title="Recent Work" 
          subtitle="A showcase of our best projects across branding, design, and marketing."
          className="bg-brand-gray"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer bg-white"
              >
                <div className="aspect-w-3 aspect-h-2 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="object-cover w-full h-64 transform group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-brand-accent text-xs font-bold uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.category}
                  </span>
                  <h3 className="text-white text-2xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button className="px-8 py-3 border-2 border-brand-black rounded-full font-medium hover:bg-brand-black hover:text-white transition-colors duration-300">
              View All Projects
            </button>
          </div>
        </Section>

        {/* TESTIMONIALS SECTION */}
        <Section 
          id="testimonials" 
          title="Client Feedback" 
          subtitle="Don't just take our word for it."
          className="bg-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, index) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-brand-gray p-8 rounded-2xl relative"
              >
                <div className="text-brand-primary/20 absolute top-4 right-6 text-6xl font-serif leading-none">"</div>
                <p className="text-slate-700 mb-6 italic relative z-10 leading-relaxed">
                  {t.quote}
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-slate-300 mr-3 flex-shrink-0 overflow-hidden">
                      <img src={`https://picsum.photos/100/100?random=${index + 20}`} alt={t.author} className="w-full h-full object-cover"/>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-brand-black">{t.author}</h4>
                    <p className="text-xs text-slate-500">{t.role}, {t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* CONTACT SECTION */}
        <Section 
          id="contact" 
          title="Get in Touch" 
          subtitle="Ready to start your next project? We'd love to hear from you."
          className="bg-brand-gray"
        >
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-10 bg-brand-black text-white flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <p className="text-slate-400 mb-8 leading-relaxed">
                    Fill out the form and our team will get back to you within 24 hours.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="text-brand-primary mt-1" size={20} />
                      <div>
                        <p className="text-sm text-slate-400">Phone</p>
                        <p className="font-medium">+92 300 123 4567</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="text-brand-primary mt-1" size={20} />
                      <div>
                        <p className="text-sm text-slate-400">Email</p>
                        <p className="font-medium">hello@xooxmedia.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <MapPin className="text-brand-primary mt-1" size={20} />
                      <div>
                        <p className="text-sm text-slate-400">Office</p>
                        <p className="font-medium">123 Creative Block, Tech Town<br/>Lahore, Pakistan</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <div className="flex space-x-4">
                     {/* Social icons are in footer, but nice to have here too visually */}
                  </div>
                </div>
              </div>

              <div className="p-10">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        className="w-full px-4 py-3 rounded-lg bg-brand-gray border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        className="w-full px-4 py-3 rounded-lg bg-brand-gray border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-lg bg-brand-gray border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="w-full px-4 py-3 rounded-lg bg-brand-gray border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-4 px-6 rounded-lg bg-brand-primary text-white font-bold text-lg hover:bg-blue-600 transition-colors shadow-lg hover:shadow-brand-primary/30"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default App;