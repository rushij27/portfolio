import { motion } from 'framer-motion';
import { ChevronRight, Download, GithubIcon, LinkedinIcon, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import data from "./assets/data/data.json";
import ProfilePhoto from "./assets/images/1677389255776_1__1_-removebg-preview(1)(1).png";
import Angular from "./assets/images/angular.png";
import CSS from "./assets/images/css.png";
import Git from "./assets/images/git.png";
import HTML from "./assets/images/html.png";
import Javascript from "./assets/images/javascript.png";
import MongoDB from "./assets/images/mongo.png";
import React from "./assets/images/react.png";
import Redux from "./assets/images/redux.png";
import Tailwind from "./assets/images/tailwind.png";
import Typescript from "./assets/images/typescript.png";
import { fadeInUp, staggerChildren } from "./components/header";
import ProjectsSection from "./components/projects";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);
  const [isVisible, setIsVisible] = useState<any>({});

  const refs = {
    home: useRef(null),
    about: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    contact: useRef(null)
  };



  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling) {
        const current = window.scrollY;
        Object.entries(refs).forEach(([key, ref]) => {
          const element = ref.current;
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (current >= offsetTop - 200 && current < offsetTop + offsetHeight - 200) {
              setActiveSection(key);
            }
          }
        });
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible((prev: any) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    Object.entries(refs).forEach(([key, ref]) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [isScrolling]);

  const scrollTo = (ref: any) => {
    setIsScrolling(true);
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => setIsScrolling(false), 1000);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 text-white min-h-screen">
      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden sm:flex flex-col gap-4">
        {Object.entries(refs).map(([key, ref]) => (
          <div key={key} className="group relative">
            <div
              onClick={() => scrollTo(ref)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 
                ${activeSection === key ? 'bg-violet-500 scale-125' : 'bg-gray-400 hover:bg-violet-400'}`}
            />
            <span className="absolute right-8 top-1/2 -translate-y-1/2 px-2 py-1 bg-violet-500 text-white text-sm 
              rounded opacity-0 group-hover:opacity-100 transition-opacity capitalize whitespace-nowrap">
              {key}
            </span>
          </div>
        ))}
      </div>

      {/* Header Section*/}
      <motion.header 
        className="fixed top-0 w-full bg-indigo-950/80 backdrop-blur-sm z-40"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <nav className="container mx-auto py-4 px-6">
          <div className="flex justify-between items-center">
            <motion.div 
              className="w-16 h-16 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center text-white font-bold text-2xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              RJ
            </motion.div>
            <motion.ul 
              className="flex space-x-8"
              variants={staggerChildren}
              initial="hidden"
              animate="visible"
            >
              {Object.entries(refs).map(([key, ref]) => (
                <motion.li
                  key={key}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => scrollTo(ref)}
                  className={`cursor-pointer capitalize transition-all duration-300 ${
                    activeSection === key 
                      ? 'text-violet-500 scale-110' 
                      : 'hover:text-violet-400'
                  }`}
                >
                  {key}
                </motion.li>
              ))}
            </motion.ul>
            <div className="flex gap-4">
              {[GithubIcon, LinkedinIcon].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon 
                    className="hover:text-violet-400 transition-colors duration-300 cursor-pointer" 
                    size={20} 
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section 
        ref={refs.home}
        id="home"
        className="min-h-screen flex items-center justify-center pt-20"
      >
        <div className={`container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 
          transition-all duration-700 transform ${isVisible.home ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex-1 text-center lg:text-left">
            <span className="text-violet-400 inline-block animate-fadeRight">Hello, I'm</span>
            <h1 className="text-7xl font-bold mt-2 mb-4 bg-gradient-to-r from-violet-400 to-fuchsia-400 
              text-transparent bg-clip-text animate-fadeUp">
              Rushikesh Jagtap
            </h1>
            <div className="text-xl text-gray-300 animate-fadeUp delay-200">Frontend Developer</div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
              <button 
                onClick={() => scrollTo(refs.contact)}
                className="px-8 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-full 
                  font-medium hover:from-violet-600 hover:to-fuchsia-600 transition-all duration-300 transform hover:scale-105"
              >
                Contact Me
              </button>
              <a 
                href="/Rushikesh_Jagtap_Resume.pdf" 
                download
                className="px-8 py-3 border-2 border-violet-500 text-violet-400 rounded-full font-medium 
                  hover:bg-violet-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2
                  transform hover:scale-105"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-violet-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="relative rounded-full overflow-hidden w-80 h-80 mx-auto transform hover:scale-105 
                transition-transform duration-300">
                <img 
                  src={ProfilePhoto} 
                  alt="Rushikesh Jagtap" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

{/* About/Summary Section */}
      <section 
        ref={refs.about}
        id="about"
        className="min-h-screen py-20"
      >
        <div className={`container mx-auto px-6 transition-all duration-700 transform 
          ${isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold mb-12 text-center">
            About <span className="text-violet-400">Me</span>
          </h2>
          
          <div className="space-y-16"> {/* Changed to vertical layout */}
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto">
                {data.aboutMe}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <span className="px-4 py-2 bg-violet-500/20 rounded-full text-violet-400">
                  3+ Years Experience
                </span>
                <span className="px-4 py-2 bg-violet-500/20 rounded-full text-violet-400">
                  20+ Projects Completed
                </span>
                <span className="px-4 py-2 bg-violet-500/20 rounded-full text-violet-400">
                  Frontend Specialist
                </span>
              </div>

              {/* Experience Timeline */}
              <div className="mt-16 max-w-4xl mx-auto">
                <h3 className="text-2xl font-semibold mb-8 text-center">Professional Experience</h3>
                {[
                  {
                    year: data.yearTwo,
                    title: data.designation,
                    company: data.company,
                    description: data.experienceDescription[2023]
                  },
                  {
                    year: data.yearOne,
                    title: data.title,
                    company: data.company,
                    description: data.experienceDescription[2021]
                  }
                ].map((exp, index) => (
                  <div 
                    key={index}
                    className="relative pl-8 pb-12 last:pb-0"
                  >
                    <div className="absolute left-0 top-0 h-full w-px bg-violet-500/30">
                      <div className="absolute -left-1 top-2 w-2 h-2 rounded-full bg-violet-500"></div>
                    </div>
                    <div className="bg-indigo-950/50 p-6 rounded-xl hover:bg-violet-500/10 transition-all duration-300">
                      <div className="text-violet-400 font-medium mb-2">{exp.year}</div>
                      <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                      <div className="text-gray-400 mb-4">{exp.company}</div>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <ChevronRight className="text-violet-500 mt-1 flex-shrink-0" size={16} />
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Section with Sequential Animation */}
            <div className="pt-8">
              <h3 className="text-2xl font-semibold mb-12 text-center">Technical Expertise</h3>
              
              {/* Main Technical Skills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
                {[
                  { name: "Angular", icon: <img src={Angular} alt="Angular" />, delay: 0 },
                  { name: "React", icon: <img src={React} alt="React" />, delay: 100 },
                  { name: "Javascript", icon: <img src={Javascript} alt="Javascript" />, delay: 200 },
                  { name: "Typescript", icon: <img src={Typescript} alt="Typescript" />, delay: 300 },
                  { name: "Redux", icon: <img src={Redux} alt="Redux" />, delay: 400 },
                  { name: "Git", icon: <img src={Git} alt="Git" />, delay: 500 },
                  { name: "HTML5", icon: <img src={HTML} alt="HTML" />, delay: 600 },
                  { name: "CSS3", icon: <img src={CSS} alt="CSS" />, delay: 700 },
                  { name: "Tailwind", icon: <img src={Tailwind} alt="Tailwind" />, delay: 800 },
                  { name: "MongoDB", icon: <img src={MongoDB} alt="MongoDB" />, delay: 900 }
                ].map((skill) => (
                  <div 
                    key={skill.name}
                    className={`bg-indigo-950/50 p-6 rounded-xl hover:bg-violet-500/10 transition-all duration-500 
                      group transform hover:-translate-y-2 opacity-0 translate-y-10
                      ${isVisible.about ? 'animate-fadeInSlideUp' : ''}`}
                    style={{ 
                      animationDelay: `${skill.delay}ms`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    <div className="w-16 h-16 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                      {skill.icon}
                    </div>
                    <div className="text-center text-sm font-medium text-gray-300 group-hover:text-violet-400">
                      {skill.name}
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Skills */}
              <div className="mt-12 max-w-4xl mx-auto">
                <h4 className="text-xl font-semibold mb-6 text-center">Additional Skills</h4>
                <div className="flex flex-wrap gap-3 justify-center">
                  {[
                    "RESTful APIs",
                    "Responsive Design",
                    "UI/UX Design",
                    "Agile/Scrum",
                    "Team Leadership",
                    "Problem Solving",
                    "Code Review",
                    "Performance Optimization"
                  ].map((skill, index) => (
                    <span 
                      key={skill}
                      className={`px-4 py-2 bg-violet-500/10 rounded-full text-violet-400 text-sm
                        hover:bg-violet-500/20 transition-all duration-300 opacity-0 translate-y-4
                        ${isVisible.about ? 'animate-fadeInSlideUp' : ''}`}
                      style={{ 
                        animationDelay: `${1000 + index * 100}ms`,
                        animationFillMode: 'forwards'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection isVisible={isVisible.projects} ref={refs.projects}  />

      {/* Contact Section */}
      <section 
        ref={refs.contact}
        id="contact"
        className="min-h-screen py-20"
      >
        <div className={`container mx-auto px-6 transition-all duration-700 transform 
          ${isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold mb-12 text-center">
            Contact <span className="text-violet-400">Me</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { 
                icon: Mail, 
                title: "Email",
                value: data.email,
                action: () => window.open(data.mailto)
              },
              { 
                icon: Phone, 
                title: "Phone",
                value: data.phone,
                action: () => window.open(data.tel)
              },
              { 
                icon: MapPin, 
                title: "Location",
                value: data.location,
                action: () => window.open(data.address)
              }
            ].map((contact) => (
              <div
                key={contact.title}
                onClick={contact.action}
                className="bg-indigo-950/50 p-6 rounded-xl text-center cursor-pointer hover:bg-violet-500/10 
                  transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <contact.icon 
                  className="mx-auto mb-4 text-violet-400 transition-transform duration-300 group-hover:scale-125" 
                  size={24} 
                />
                <h3 className="font-medium mb-2">{contact.title}</h3>
                <p className="text-gray-400">{contact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-950/80 backdrop-blur-sm py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            {data.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
