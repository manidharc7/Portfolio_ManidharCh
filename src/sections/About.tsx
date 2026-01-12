import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Database, Shield, Brain, Code, BarChart3, Sparkles, Target, Rocket } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary-200/20 dark:bg-primary-900/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-secondary-200/20 dark:bg-secondary-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-200/20 dark:bg-accent-900/10 rounded-full blur-3xl" />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <Sparkles className="text-primary-500 dark:text-primary-400" size={32} />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg px-2 xs:px-4">
            A passionate student and aspiring professional at the intersection of Data Science, 
            Big Data Analytics, and Cybersecurity, crafting innovative solutions for tomorrow's challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Column - Journey and Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700/50">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Target className="text-primary-500" size={24} />
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-base sm:text-lg leading-relaxed">
                Currently pursuing my education at KL University, I'm deeply immersed in the world of 
                Data Science and Big Data Analytics. My academic journey is focused on mastering the 
                art of extracting meaningful insights from complex datasets and developing innovative 
                solutions to real-world problems.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
                My passion extends beyond data science into the realm of Cybersecurity and Cyber Threat 
                Intelligence. This unique combination allows me to approach problems from both analytical 
                and security perspectives, preparing me for the evolving challenges of the digital landscape.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700/50">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <GraduationCap className="text-secondary-500" size={24} />
                Education & Focus
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg">
                    <Database className="text-secondary-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Data Science & Analytics</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Specializing in Big Data Analytics, Machine Learning, and Statistical Analysis
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <Shield className="text-primary-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Cybersecurity</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Focus on Cyber Threat Intelligence and Security Analysis
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-accent-100 dark:bg-accent-900/30 rounded-lg">
                    <Code className="text-accent-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Technical Expertise</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Full Stack Development and Programming Languages
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills and Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-y-8 h-full"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700/50 h-full flex flex-col items-center justify-center text-center"
            >
              <Brain className="text-primary-500 mb-4" size={40} />
              <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg sm:text-xl">Data Science</h4>
              <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
                Machine Learning, Statistical Analysis, and Predictive Modeling
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700/50 h-full flex flex-col items-center justify-center text-center"
            >
              <BarChart3 className="text-secondary-500 mb-4" size={40} />
              <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg sm:text-xl">Big Data</h4>
              <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
                Data Processing, Analytics, and Visualization
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700/50 h-full flex flex-col items-center justify-center text-center"
            >
              <Shield className="text-accent-500 mb-4" size={40} />
              <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg sm:text-xl">Cybersecurity</h4>
              <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
                Threat Intelligence and Security Analysis
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700/50 h-full flex flex-col items-center justify-center text-center"
            >
              <Rocket className="text-primary-500 mb-4" size={40} />
              <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg sm:text-xl">Development</h4>
              <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
                Full Stack Development and Modern Web Technologies
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default About;