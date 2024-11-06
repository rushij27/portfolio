import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon } from 'lucide-react';
import MobileMenu from './mobileMenu';

const Header = ({ refs, scrollTo, activeSection }: any) => {

  return (
    <motion.header 
      className="fixed top-0 w-full bg-indigo-950/80 backdrop-blur-sm z-40"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <nav className="container mx-auto py-4 px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full 
              flex items-center justify-center text-white font-bold text-xl sm:text-2xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            RJ
          </motion.div>

          {/* Mobile Menu - Pass refs only if they exist */}
          {refs && Object.keys(refs).length > 0 && (
            <MobileMenu 
              refs={refs} 
              scrollTo={scrollTo} 
              activeSection={activeSection} 
            />
          )}

          {/* Desktop Navigation */}
          {refs && Object.keys(refs).length > 0 && (
            <motion.ul 
              className="hidden lg:flex space-x-8"
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
                  className={`cursor-pointer capitalize transition-all duration-300
                    ${activeSection === key ? 'text-violet-400 scale-110' : 'hover:text-violet-400'}`}
                >
                  {key}
                </motion.li>
              ))}
            </motion.ul>
          )}

          {/* Social Icons */}
          <div className="hidden sm:flex gap-4">
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
  );
};

export default Header;


export const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

export const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };