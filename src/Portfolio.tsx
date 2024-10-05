import { motion, Variants } from 'framer-motion';
import { Briefcase, ChevronDown, Code, Linkedin, Mail, User } from 'lucide-react';
import { useState } from 'react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 }
  };

  const transition = { duration: 0.6 };

  const staggerChildren: Variants = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
      {/* Header */}
      <motion.header 
        className="bg-indigo-600 text-white p-4 sticky top-0 z-10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <motion.h1 
            className="text-2xl font-bold"
            whileHover={{ scale: 1.1 }}
          >
            Rushiikesh Jagtap
          </motion.h1>
          <nav>
            <ul className="flex space-x-4">
              {['about', 'experience', 'skills', 'contact'].map((section) => (
                <motion.li key={section} whileHover={{ scale: 1.1 }}>
                  <a 
                    href={`#${section}`} 
                    className={`hover:underline ${activeSection === section ? 'text-yellow-300' : ''}`}
                    onClick={() => setActiveSection(section)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        {/* About Section */}
        <motion.section 
          id="about" 
          className="mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.h2 className="text-3xl font-bold mb-4 flex items-center" variants={fadeInUp}>
            <User className="mr-2" /> About Me
          </motion.h2>
          <motion.div className="bg-white shadow-md rounded-lg p-6" variants={fadeInUp} transition={transition}>
            <p className="text-gray-700">
              Senior Software Engineer with 3 years of experience in Frontend. Developing and maintaining web applications using React, Angular, Redux, JavaScript, TypeScript, HTML, and CSS. Proficient in managing multiple projects simultaneously, mentoring junior developers, and ensuring high-quality code through agile methodologies.
            </p>
          </motion.div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          id="experience" 
          className="mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.h2 className="text-3xl font-bold mb-4 flex items-center" variants={fadeInUp}>
            <Briefcase className="mr-2" /> Work Experience
          </motion.h2>
          <motion.div className="space-y-6" variants={staggerChildren}  transition={transition}>
            {[
              {
                title: "Senior Software Engineer",
                company: "Invimatic Technology, Pune",
                period: "April 2023 - Present",
                duties: [
                  "Managing and developing two distinct web applications",
                  "Led the implementation of key features in the Angular application",
                  "Mentored newly hired software engineers"
                ]
              },
              {
                title: "Software Engineer",
                company: "Invimatic Technology, Pune",
                period: "August 2021 - April 2023",
                duties: [
                  "Maintained legacy codebase while refactoring to newer technologies",
                  "Implemented Redux & Redux-Saga as the management tool",
                  "Achieved 90% test coverage using Jest"
                ]
              }
            ].map((job, index) => (
              <motion.div key={index} className="bg-white shadow-md rounded-lg p-6" variants={fadeInUp} transition={transition}>
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-gray-600">{job.company} | {job.period}</p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  {job.duties.map((duty, i) => (
                    <li key={i}>{duty}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          id="skills" 
          className="mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.h2 className="text-3xl font-bold mb-4 flex items-center" variants={fadeInUp}>
            <Code className="mr-2" /> Skills
          </motion.h2>
          <motion.div className="bg-white shadow-md rounded-lg p-6" variants={fadeInUp} transition={transition}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Front-end Development",
                  skills: ["React.js", "Angular", "TypeScript", "JavaScript/ES6+"]
                },
                {
                  title: "State Management",
                  skills: ["Redux", "Redux-Saga", "Context Hook"]
                },
                {
                  title: "Testing",
                  skills: ["Jest", "Cypress", "React Testing Library"]
                }
              ].map((category, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="font-semibold">{category.title}</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    {category.skills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          id="contact"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.h2 className="text-3xl font-bold mb-4 flex items-center" variants={fadeInUp}>
            <Mail className="mr-2" /> Contact Me
          </motion.h2>
          <motion.div className="bg-white shadow-md rounded-lg p-6" variants={fadeInUp}>
            <p className="text-gray-700 mb-4">Feel free to reach out to me for any opportunities or collaborations.</p>
            <div className="flex items-center justify-center space-x-4">
              <motion.a 
                href="mailto:imrushij@gmail.com" 
                className="text-indigo-600 hover:underline flex items-center"
                whileHover={{ scale: 1.1 }}
              >
                <Mail className="mr-1" size={18} /> imrushij@gmail.com
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/rushiikeshjagtap/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-indigo-600 hover:underline flex items-center"
                whileHover={{ scale: 1.1 }}
              >
                <Linkedin className="mr-1" size={18} /> LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Rushikesh Jagtap. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-4 right-4 bg-indigo-600 text-white p-2 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ChevronDown className="transform rotate-180" />
      </motion.button>
    </div>
  );
};

export default Portfolio;