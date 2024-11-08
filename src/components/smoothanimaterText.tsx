import React from 'react';
import { motion } from 'framer-motion';
import { Code2, GitBranch, Terminal } from 'lucide-react';

const ModernLoadingAnimation = () => {
  const iconVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const dotsVariants = {
    animate: {
      opacity: [0, 1, 0],
      scale: [0.8, 1, 0.8],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {/* Main Content Container */}
        <div className="bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 p-8 relative overflow-hidden">
          {/* Rotating Icons Background */}
          <div className="absolute inset-0 opacity-5">
            <motion.div
              variants={iconVariants}
              animate="animate"
              className="absolute top-4 left-4"
            >
              <Code2 size={24} />
            </motion.div>
            <motion.div
              variants={iconVariants}
              animate="animate"
              className="absolute bottom-4 right-4"
            >
              <GitBranch size={24} />
            </motion.div>
            <motion.div
              variants={iconVariants}
              animate="animate"
              className="absolute top-4 right-4"
            >
              <Terminal size={24} />
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            {/* Created Spacing */}
            <div className="flex items-center gap-2 self-start mb-2"></div>

            {/* Loading Progress Bar */}
            <motion.div 
              className="w-full h-1 bg-gray-800 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
                animate={{
                  width: ["0%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Main Text */}
            <div className="flex flex-col items-center gap-3">
              <h2 
                className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent"
                style={{
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Portfolio under construction
              </h2>
              
              {/* Animated Dots */}
              <div className="flex gap-1.5 items-center">
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    variants={dotsVariants}
                    animate="animate"
                    style={{ animationDelay: `${index * 0.2}s` }}
                    className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400"
                  />
                ))}
              </div>
            </div>

            {/* Status Message */}
            <div className="flex items-center gap-2 text-md text-gray-400">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Terminal size={14} />
              </motion.div>
              <span>meanwhile scroll down to say hi...</span>
            </div>
          </div>
        </div>

        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-violet-500/20 via-fuchsia-500/10 to-violet-500/20 blur-2xl" />
      </motion.div>
    </div>
  );
};

export default ModernLoadingAnimation;