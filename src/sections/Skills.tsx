import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Rocket, Brain, Terminal } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: 'fullstack' | 'datascience' | 'programming';
  description?: string;
}

const categoryIcons = {
  fullstack: <Rocket className="inline-block mr-2 text-primary-500" size={24} />,
  datascience: <Brain className="inline-block mr-2 text-secondary-500" size={24} />,
  programming: <Terminal className="inline-block mr-2 text-accent-500" size={24} />,
};

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fullStackSkills: Skill[] = [
    { 
      name: 'Frontend Development', 
      level: 90, 
      category: 'fullstack',
      description: 'React, HTML, CSS, JavaScript/TypeScript'
    },
    { 
      name: 'Backend Development', 
      level: 85, 
      category: 'fullstack',
      description: 'Node.js, Express, RESTful APIs'
    },
    { 
      name: 'Database Management', 
      level: 80, 
      category: 'fullstack',
      description: 'MongoDB, SQL, Data Modeling'
    },
    { 
      name: 'API Integration', 
      level: 80, 
      category: 'fullstack',
      description: 'REST APIs, GraphQL, Authentication'
    },
  ];

  const dataScienceSkills: Skill[] = [
    { 
      name: 'Data Analysis', 
      level: 85, 
      category: 'datascience',
      description: 'Statistical Analysis, Data Mining'
    },
    { 
      name: 'Machine Learning', 
      level: 80, 
      category: 'datascience',
      description: 'Supervised Learning, Neural Networks'
    },
    { 
      name: 'Big Data Tools', 
      level: 75, 
      category: 'datascience',
      description: 'Hadoop, Spark, Data Processing'
    },
    { 
      name: 'Data Visualization', 
      level: 80, 
      category: 'datascience',
      description: 'Tableau, D3.js, Matplotlib'
    },
  ];

  const programmingSkills: Skill[] = [
    { 
      name: 'Python', 
      level: 90, 
      category: 'programming',
      description: 'Data Science, Web Development'
    },
    { 
      name: 'Java', 
      level: 85, 
      category: 'programming',
      description: 'Enterprise Applications, Android'
    },
    { 
      name: 'C Programming', 
      level: 80, 
      category: 'programming',
      description: 'System Programming, Algorithms'
    },
  ];

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="relative py-20 overflow-hidden">
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
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg px-2 xs:px-4">
            A comprehensive overview of my technical expertise across Full Stack Development, 
            Data Science, and Programming Languages.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <SkillCategory title="Full Stack" skills={fullStackSkills} delay={0} inView={inView} />
          <SkillCategory title="Data Science" skills={dataScienceSkills} delay={0.2} inView={inView} />
          <SkillCategory title="Programming" skills={programmingSkills} delay={0.4} inView={inView} />
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
        .skill-tooltip {
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease;
        }
        .skill-bar:hover .skill-tooltip {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  delay: number;
  inView: boolean;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, delay, inView }) => {
  const icon = categoryIcons[skills[0]?.category as keyof typeof categoryIcons];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700/50"
    >
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
        {icon}
        <span className="bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 bg-clip-text text-transparent">
          {title}
        </span>
      </h3>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <SkillBar 
            key={skill.name} 
            skill={skill} 
            delay={delay + (index * 0.1)} 
            inView={inView} 
          />
        ))}
      </div>
    </motion.div>
  );
};

interface SkillBarProps {
  skill: Skill;
  delay: number;
  inView: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, delay, inView }) => {
  const barColors = {
    fullstack: 'bg-gradient-to-r from-primary-500 to-primary-600',
    datascience: 'bg-gradient-to-r from-secondary-500 to-secondary-600',
    programming: 'bg-gradient-to-r from-accent-500 to-accent-600',
  };

  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <div>
          <span className="text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base block">
            {skill.name}
          </span>
          {skill.description && (
            <span className="text-gray-500 dark:text-gray-400 text-xs block mt-0.5">
              {skill.description}
            </span>
          )}
        </div>
        <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-medium">
          {skill.level}%
        </span>
      </div>
      <div className="h-2 sm:h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden relative skill-bar">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          className={`h-full rounded-full ${barColors[skill.category]} shadow-lg`}
        ></motion.div>
        <div className="skill-tooltip absolute right-0 -top-8 bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg pointer-events-none whitespace-nowrap">
          {skill.level}% Proficiency
        </div>
      </div>
    </div>
  );
};

export default Skills;