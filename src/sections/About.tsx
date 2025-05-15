import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Database, Shield, Brain, Code, BarChart3 } from 'lucide-react';

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
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-primary-600 dark:text-primary-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A passionate student and aspiring professional in the fields of Data Science, Big Data Analytics, and Cybersecurity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I am currently pursuing my education at KL University, where I'm specializing in Data Science and Big Data Analytics. 
              My academic journey is focused on developing expertise in handling large-scale data and extracting meaningful insights 
              from complex datasets.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Alongside my data science specialization, I'm deeply interested in Cybersecurity and Cyber Threat Intelligence. 
              This combination allows me to understand both the analytical and security aspects of modern technology, preparing me 
              for the challenges of tomorrow's digital landscape.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <GraduationCap className="text-primary-600 dark:text-primary-400 mr-3 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">KL University</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Specializing in Data Science and Big Data Analytics
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Database className="text-secondary-600 dark:text-secondary-400 mr-3 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Data Science</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Big Data Analytics and Machine Learning
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="text-accent-600 dark:text-accent-400 mr-3 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Cybersecurity</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Cyber Threat Intelligence and Security Analysis
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <Brain className="text-primary-600 dark:text-primary-400 mb-4" size={32} />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Data Science</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Machine Learning, Statistical Analysis, and Predictive Modeling
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <BarChart3 className="text-secondary-600 dark:text-secondary-400 mb-4" size={32} />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Big Data</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Data Processing, Analytics, and Visualization
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <Shield className="text-accent-600 dark:text-accent-400 mb-4" size={32} />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Cybersecurity</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Threat Intelligence and Security Analysis
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <Code className="text-primary-600 dark:text-primary-400 mb-4" size={32} />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technical Skills</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Programming, Data Analysis, and Security Tools
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;