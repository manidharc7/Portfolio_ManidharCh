import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Feedback Management',
      description: 'A student feedback system built using SQL, PHP, and simple HTML/CSS. Allows students to submit feedback and admins to manage responses.',
      image: '/feedback-management.jpg',
      category: 'web',
      tags: ['PHP', 'SQL', 'HTML', 'CSS'],
      liveUrl: '',
      repoUrl: 'https://github.com/manidharc7/dbms_studentfeedback',
    },
    {
      id: 2,
      title: 'News Aggregator',
      description: 'A platform that aggregates news from multiple sources, providing users with real-time updates and personalized feeds.',
      image: '/news-aggregator.jpg',
      category: 'web',
      tags: ['React', 'API', 'Tailwind CSS', 'Python'],
      liveUrl: '',
      repoUrl: 'https://github.com/manidharc7/SDP2-news-aggregator-FASD',
    },
    {
      id: 3,
      title: 'Stock Trader',
      description: 'A stock trading simulation platform for learning and practicing trading strategies in a risk-free environment.',
      image: '/stock-trader.jpg',
      category: 'web',
      tags: ['React', 'Node.js', 'Finance', 'Simulation'],
      liveUrl: '',
      repoUrl: 'https://github.com/manidharc7/Stock-trade',
    },
  ];

  const categories = ['all', 'web', 'mobile', 'design'];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/30">
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
            My <span className="text-primary-600 dark:text-primary-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here's a selection of my recent work, showcasing my skills in design and development
            across various platforms and industries.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className={`px-4 py-2 rounded-full capitalize ${
                  activeFilter === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
                inView={inView} 
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
  inView: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, inView }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}
      transition={{ type: 'spring', stiffness: 300 }}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
    >
      <div className="h-48 relative overflow-hidden group bg-gray-200 dark:bg-gray-700">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          style={{ display: 'block' }}
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <motion.a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, color: '#6366f1' }}
            className="p-2 bg-white rounded-full text-gray-900 hover:text-primary-600 transition-colors"
            aria-label="View GitHub repository"
          >
            <Github size={20} />
          </motion.a>
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white break-words">
            {project.title}
          </h3>
          <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full capitalize">
            {project.category}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4 break-words">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span 
              key={tag} 
              className="px-2 py-1 text-xs font-medium bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;