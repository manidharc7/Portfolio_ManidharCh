import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Code, Palette, Server } from 'lucide-react';

// Add keyframes for the gradient animation
const gradientAnimation = {
  '0%': { backgroundPosition: '0% 50%' },
  '50%': { backgroundPosition: '100% 50%' },
  '100%': { backgroundPosition: '0% 50%' }
};

const Hero: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [currentLine, setCurrentLine] = useState<'first' | 'last'>('first');

  const fullFirstName = "Manidhar Reddy";
  const fullLastName = "Chalemcherla";
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const waitingTime = 2000;
  const lineDelay = 500; // Delay between starting each line

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, waitingTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting) {
      if (lastName === '' && firstName === '') {
        setIsDeleting(false);
        setCurrentLine('first');
      } else if (lastName === '' && firstName !== '') {
        timeout = setTimeout(() => {
          setFirstName(prev => prev.slice(0, -1));
        }, deletingSpeed);
      } else {
        timeout = setTimeout(() => {
          setLastName(prev => prev.slice(0, -1));
        }, deletingSpeed);
      }
    } else {
      if (firstName === fullFirstName && lastName === fullLastName) {
        setIsWaiting(true);
      } else if (firstName === fullFirstName && lastName !== fullLastName) {
        if (currentLine === 'first') {
          setCurrentLine('last');
          timeout = setTimeout(() => {
            setLastName(prev => fullLastName.slice(0, prev.length + 1));
          }, lineDelay);
        } else {
          timeout = setTimeout(() => {
            setLastName(prev => fullLastName.slice(0, prev.length + 1));
          }, typingSpeed);
        }
      } else {
        timeout = setTimeout(() => {
          setFirstName(prev => fullFirstName.slice(0, prev.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [firstName, lastName, isDeleting, isWaiting, currentLine]);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Add style for gradient animation */}
      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 8s ease infinite;
          }
          .name-char {
            display: inline-block;
            transition: transform 0.3s ease;
          }
          .name-char:hover {
            transform: translateY(-5px);
            color: var(--primary-500);
          }
          .typing-cursor {
            display: inline-block;
            width: 2px;
            height: 1em;
            background-color: currentColor;
            margin-left: 2px;
            animation: blink 1s step-end infinite;
            vertical-align: middle;
          }
          @keyframes blink {
            from, to { opacity: 1; }
            50% { opacity: 0; }
          }
        `}
      </style>

      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary-200/30 dark:bg-primary-900/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-secondary-200/30 dark:bg-secondary-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-200/20 dark:bg-accent-900/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Animated Floating Shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -100 }}
          animate={{ opacity: 0.5, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full blur-2xl mix-blend-multiply animate-pulse"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 0.4, scale: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-accent-400 to-primary-300 rounded-full blur-2xl mix-blend-multiply animate-pulse"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-4xl text-center"
          >
            {/* Decorative elements */}
            <div className="flex justify-center gap-4 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg"
              >
                <Code className="text-primary-600 dark:text-primary-400" size={24} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="p-3 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg"
              >
                <Palette className="text-secondary-600 dark:text-secondary-400" size={24} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-lg"
              >
                <Server className="text-accent-600 dark:text-accent-400" size={24} />
              </motion.div>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              <span className="block text-2xl sm:text-3xl mb-4 text-primary-600 dark:text-primary-400">
                Hello, I'm
              </span>
              <div className="relative min-h-[2.4em]">
                {/* First Name Line */}
                <div className="relative mb-2">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 animate-gradient">
                    {firstName}
                    {currentLine === 'first' && !isWaiting && !isDeleting && <span className="typing-cursor"></span>}
                  </span>
                </div>
                {/* Last Name Line */}
                <div className="relative">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-500 via-primary-500 to-secondary-500 animate-gradient">
                    {lastName}
                    {currentLine === 'last' && !isWaiting && !isDeleting && <span className="typing-cursor"></span>}
                  </span>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 blur-xl opacity-30 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 animate-gradient"></div>
              </div>
            </motion.h1>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 mb-8"
            >
              <span className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                Full Stack Developer | Data Science Student
              </span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              I create exceptional digital experiences with a focus on clean design, 
              accessibility, and performance. Let's build something amazing together.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-6 justify-center"
            >
              <motion.a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
              >
                Let's Talk
              </motion.a>
              <motion.a 
                href="https://drive.google.com/file/d/1MLmTofMLzi0R-AJKcLPCWqwY-lpBQVP3/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 text-gray-700 dark:text-gray-300 rounded-lg font-medium flex items-center gap-2 transition-all shadow-lg hover:shadow-xl"
              >
                <Download size={20} />
                Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToAbout}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-600 dark:text-gray-400 mb-2">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
            >
              <ChevronDown className="animate-none text-gray-600 dark:text-gray-400" size={24} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;