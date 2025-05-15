import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, BarChart3 } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: 'fullstack' | 'datascience' | 'programming';
}

const categoryIcons = {
  fullstack: <Code className="inline-block mr-2 text-primary-500" size={22} />,
  datascience: <BarChart3 className="inline-block mr-2 text-secondary-500" size={22} />,
  programming: <Database className="inline-block mr-2 text-accent-500" size={22} />,
};

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fullStackSkills: Skill[] = [
    { name: 'Frontend (React, HTML, CSS, JS/TS)', level: 90, category: 'fullstack' },
    { name: 'Backend (Node.js, Express)', level: 85, category: 'fullstack' },
    { name: 'Database (MongoDB, SQL)', level: 80, category: 'fullstack' },
    { name: 'API Integration', level: 80, category: 'fullstack' },
  ];

  const dataScienceSkills: Skill[] = [
    { name: 'Data Analysis', level: 85, category: 'datascience' },
    { name: 'Machine Learning', level: 80, category: 'datascience' },
    { name: 'Big Data Tools', level: 75, category: 'datascience' },
    { name: 'Data Visualization', level: 80, category: 'datascience' },
  ];

  const programmingSkills: Skill[] = [
    { name: 'C', level: 80, category: 'programming' },
    { name: 'Java', level: 85, category: 'programming' },
    { name: 'Python', level: 90, category: 'programming' },
  ];

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20">
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
            My <span className="text-primary-600 dark:text-primary-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are my core skills in Full Stack Development, Data Science, and Programming Languages.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCategory title="Full Stack" skills={fullStackSkills} delay={0} inView={inView} />
          <SkillCategory title="Data Science" skills={dataScienceSkills} delay={0.2} inView={inView} />
          <SkillCategory title="Programming Languages" skills={programmingSkills} delay={0.4} inView={inView} />
        </div>
      </div>
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
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
    >
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">{icon}{title}</h3>
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
    fullstack: 'bg-primary-500',
    datascience: 'bg-secondary-500',
    programming: 'bg-accent-500',
  };

  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
        <span className="text-gray-600 dark:text-gray-400 text-sm">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          className={`h-full rounded-full ${barColors[skill.category]}`}
        ></motion.div>
        <span className="absolute right-0 -top-7 opacity-0 group-hover:opacity-100 transition bg-gray-900 text-white text-xs px-2 py-1 rounded shadow-lg pointer-events-none">
          {skill.level}%
        </span>
      </div>
    </div>
  );
};

export default Skills;