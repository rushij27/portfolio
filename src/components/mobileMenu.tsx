import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const MobileMenu = ({ refs = {}, scrollTo, activeSection }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const menuItems = Object.entries(refs || {});

  const handleClick = (ref: any) => {
    setIsOpen(false);
    if (scrollTo && ref) {
      scrollTo(ref);
    }
  };

  return (
    <div className="lg:hidden">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-violet-400 hover:text-violet-300 transition-colors"
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-indigo-950/98 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex justify-end p-4">
              <motion.button
                onClick={() => setIsOpen(false)}
                className="p-2 text-violet-400 hover:text-violet-300 transition-colors"
                whileTap={{ scale: 0.95 }}
                aria-label="Close menu"
              >
                <X size={24} />
              </motion.button>
            </div>

            {/* Menu Items */}
            <motion.div 
              className="flex flex-col items-center justify-center flex-grow"
              variants={staggerChildren}
              initial="hidden"
              animate="visible"
            >
              {menuItems.length > 0 ? (
                <motion.ul 
                  className="flex flex-col items-center space-y-8"
                  variants={staggerChildren}
                >
                  {menuItems.map(([key, ref]) => (
                    <motion.li
                      key={key}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.1 }}
                      onClick={() => handleClick(ref)}
                      className={`text-2xl cursor-pointer capitalize transition-all duration-300
                        ${activeSection === key ? 'text-violet-400 scale-110' : 'text-white hover:text-violet-300'}`}
                    >
                      {key}
                    </motion.li>
                  ))}
                </motion.ul>
              ) : (
                <p className="text-violet-400">No menu items available</p>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default MobileMenu;