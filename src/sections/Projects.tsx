import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Sparkles, Code, Database, Globe } from 'lucide-react';

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
    {
      id: 4,
      title: 'Research Journal Management',
      description: 'A comprehensive system for managing research journals, submissions, reviews, and publications. Streamlines the academic publishing workflow.',
      image: '/news-aggregator.jpg',
      category: 'web',
      tags: ['React', 'Node.js', 'Database', 'Management'],
      liveUrl: '',
      repoUrl: 'https://github.com/manidharc7/Research_jornal_management_fullstack',
    },
  ];

  const categories = [
    { id: 'all', icon: <Sparkles size={18} />, label: 'All Projects' },
    { id: 'web', icon: <Globe size={18} />, label: 'Web Apps' },
    { id: 'mobile', icon: <Code size={18} />, label: 'Mobile Apps' },
    { id: 'design', icon: <Database size={18} />, label: 'Design' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
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
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg px-2 xs:px-4">
            Here's a selection of my recent work, showcasing my skills in design and development
            across various platforms and industries.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25'
                    : 'bg-white dark:bg-gray-800/50 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 border border-gray-200 dark:border-gray-700'
                }`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.icon}
                <span>{category.label}</span>
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
        .project-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-5px);
        }
        .project-image {
          transition: transform 0.5s ease;
        }
        .project-card:hover .project-image {
          transform: scale(1.05);
        }
      `}</style>
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
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="project-card bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700/50"
    >
      <div className="h-48 relative overflow-hidden group">
        <img 
          src={project.image} 
          alt={project.title} 
          className="project-image w-full h-full object-cover"
          style={{ display: 'block' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
          <div className="flex gap-4">
            {project.repoUrl && (
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
            )}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, color: '#6366f1' }}
                className="p-2 bg-white rounded-full text-gray-900 hover:text-primary-600 transition-colors"
                aria-label="View live project"
              >
                <ExternalLink size={20} />
              </motion.a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white break-words">
            {project.title}
          </h3>
          <span className="px-3 py-1 text-xs font-medium bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full capitalize">
            {project.category}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4 break-words text-sm sm:text-base">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span 
              key={tag} 
              className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded-full"
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