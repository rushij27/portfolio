import { motion } from 'framer-motion';
import {
  Box,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Layout,
  Rocket,
  Terminal,
  Wrench
} from 'lucide-react';
import { useEffect, useState } from 'react';
import SmoothTextAnimation from './smoothanimaterText';

const DeveloperConstruction = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [activeFooterStep, setActiveFooterStep] = useState(0);

  const stepLabels: Array<{ icon: React.ElementType; label: string; color: string }> = [
    {
      icon: GitBranch,
      label: "Initialize Project",
      color: "text-orange-400"
    },
    {
      icon: Code2,
      label: "Component Definition",
      color: "text-green-400"
    },
    {
      icon: Database,
      label: "State Setup",
      color: "text-red-400"
    },
    {
      icon: Wrench,
      label: "Data Fetching",
      color: "text-pink-400"
    },
    {
      icon: Terminal,
      label: "API Integration",
      color: "text-emerald-400"
    },
    {
      icon: Box,
      label: "Component Logic",
      color: "text-indigo-400"
    },
    {
      icon: Layout,
      label: "Setting State",
      color: "text-violet-400"
    },
    {
      icon: Wrench,
      label: "Dependencies",
      color: "text-pink-400"
    },
    {
      icon: Code2,
      label: "Returning JSX",
      color: "text-green-400"
    },
    {
      icon: Wrench,
      label: "Component Structure",
      color: "text-pink-400"
    },
    {
      icon: Rocket,
      label: "Component mapping",
      color: "text-cyan-400"
    },
    {
      icon: Layout,
      label: "Testing",
      color: "text-blue-400"
    },
    {
      icon: GitBranch,
      label: "Export default",
      color: "text-orange-400"
    },

  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const codeSteps: string[] = [
    "import React, { useState, useEffect } from 'react';",
    "const Portfolio: React.FC = () => {",
    "  const [projects, setProjects] = useState<Project[]>([]);",
    "  useEffect(() => {",
    "    const fetchProjects = async () => {",
    "      const data = await api.getProjects();",
    "      setProjects(data);",
    "    };",
    "  }, []);",
    "  return (",
    "        <ProjectList projects={projects} onFilter={filterProjects} />",
    "    )}",
    "export default Portfolio;"
  ];

  const footerSteps = [
    {
      icon: Code2,
      label: "Writing Code",
      color: "text-green-400"
    },
    {
      icon: Layout,
      label: "Building UI",
      color: "text-blue-400"
    },
    {
      icon: Cpu,
      label: "Optimizing",
      color: "text-purple-400"
    },
    {
      icon: CheckCircle2,
      label: "Testing",
      color: "text-yellow-400"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep(prev => (prev + 1) % stepLabels.length);
    }, 1700);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const footertimer = setInterval(() => {
      setActiveFooterStep(prev => (prev + 1) % footerSteps.length);
    }, 1700);
    return () => clearInterval(footertimer);
  }, []);

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      className="relative min-h-[600px] w-full bg-gradient-to-br from-gray-900 to-indigo-950 rounded-2xl p-8 mt-8 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Title Section */}
      <SmoothTextAnimation />
      <motion.div
        className="relative z-20 text-center mb-8 mt-4"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex justify-center items-center gap-4 mb-2">
          <motion.div
            className="h-px w-12 bg-gradient-to-r from-transparent to-violet-500"
            animate={{ width: [0, 48] }}
            transition={{ duration: 1 }}
          />
          <motion.div className="px-4 py-2 bg-violet-500/10 rounded-lg backdrop-blur-sm border border-violet-500/20">
            <span className="text-sm font-mono text-violet-400">npm thanks to-visit-my-portfolio</span>
          </motion.div>
          <motion.div
            className="h-px w-12 bg-gradient-to-l from-transparent to-violet-500"
            animate={{ width: [0, 48] }}
            transition={{ duration: 1 }}
          />
        </div>
      </motion.div>
      <div className="flex items-center gap-4 mb-8">
        {stepLabels.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.label}
              className={`flex items-center gap-2 ${index === activeStep ? step.color : 'text-gray-500'
                }`}
            >
              <Icon size={20} />
              <span className={`text-sm ${index === activeStep ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-200`}>
                {step.label}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Floating Binary Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-violet-500 text-opacity-20 font-mono text-sm"
            initial={{
              x: Math.random() * window.innerWidth,
              y: -20,
              opacity: 0
            }}
            animate={{
              y: window.innerHeight + 20,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          >
            {Math.random().toString(2).substr(2, 8)}
          </motion.div>
        ))}
      </div>

      <div className="relative h-full flex flex-col items-center justify-center gap-8">
        {/* Terminal Window */}
        <motion.div
          className="w-full max-w-2xl bg-gray-900 rounded-lg overflow-hidden shadow-2xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-800">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-sm text-gray-400">developer-portfolio-construction.tsx</span>
            </div>
          </div>

          {/* Code Area */}
          <div className="w-full max-w-2xl mx-auto p-2 sm:p-4 md:p-6">
            <div className="font-mono text-xs sm:text-sm bg-black/30 rounded-lg sm:rounded-xl overflow-hidden">
              <div className="p-3 sm:p-4 md:p-6 overflow-x-auto">
                <div className="relative min-w-[280px]">
                  {codeSteps.map((line, index) => (
                    <motion.div
                      key={`${line}-${index}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{
                        opacity: index <= activeStep ? 1 : 0,
                        x: index <= activeStep ? 0 : -20
                      }}
                      className="flex items-center gap-2 sm:gap-4 h-6 whitespace-nowrap"
                    >
                      <span className="text-gray-500 w-4 sm:w-6 text-right flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-violet-400">{line}</span>
                    </motion.div>
                  ))}

                  {activeStep < codeSteps.length && (
                    <motion.div
                      key="cursor"
                      className="absolute left-6 sm:left-10"
                      style={{ top: `${(activeStep + 1) * 1.5}rem` }}
                    >
                      <motion.div
                        className="w-1.5 sm:w-2 h-4 sm:h-5 bg-violet-400"
                        animate={{ opacity: [1, 0] }}
                        transition={{
                          duration: 0.3,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      />
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Progress Steps */}
        <div className="flex gap-4 mt-8 px-4 py-2 bg-gray-900/50 rounded-full backdrop-blur-sm">
          {footerSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className={`relative ${index <= activeFooterStep ? step.color : 'text-gray-600'}`}
                animate={{
                  scale: index === activeFooterStep ? 1.1 : 1,
                  opacity: index <= activeFooterStep ? 1 : 0.5
                }}
              >
                <div className="flex items-center gap-2 px-4 py-2">
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium whitespace-nowrap">
                    {step.label}
                  </span>
                </div>
                {index < footerSteps.length - 1 && (
                  <div
                    className={`absolute top-1/2 -right-2 w-4 h-px ${index < activeFooterStep ? 'bg-violet-400' : 'bg-gray-600'
                      }`}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Status Message */}
        <motion.div
          className="text-center mt-4"
          animate={{ opacity: [0.5, 1], y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex items-center justify-center gap-2 text-violet-400">
            <Terminal className="w-4 h-4" />
            <span className="font-mono">Building next generation portfolio...</span>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-full max-w-md mt-4">
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
              animate={{
                width: `${((activeFooterStep + 1) / footerSteps.length) * 100}%`,
              }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DeveloperConstruction;