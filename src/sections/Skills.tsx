import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  level: number;
  category: 'design' | 'development' | 'tools';
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const designSkills: Skill[] = [
    { name: 'UI/UX Design', level: 95, category: 'design' },
    { name: 'Wireframing', level: 90, category: 'design' },
    { name: 'Prototyping', level: 85, category: 'design' },
    { name: 'Visual Design', level: 88, category: 'design' },
  ];

  const developmentSkills: Skill[] = [
    { name: 'HTML/CSS', level: 92, category: 'development' },
    { name: 'JavaScript/TypeScript', level: 88, category: 'development' },
    { name: 'React', level: 85, category: 'development' },
    { name: 'Node.js', level: 80, category: 'development' },
  ];

  const toolsSkills: Skill[] = [
    { name: 'Figma', level: 90, category: 'tools' },
    { name: 'Adobe XD', level: 85, category: 'tools' },
    { name: 'Git/GitHub', level: 82, category: 'tools' },
    { name: 'VS Code', level: 88, category: 'tools' },
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
            I've spent years honing my skills in both design and development. Here's a breakdown
            of my technical expertise and what I bring to the table.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCategory title="Design" skills={designSkills} delay={0} inView={inView} />
          <SkillCategory title="Development" skills={developmentSkills} delay={0.2} inView={inView} />
          <SkillCategory title="Tools" skills={toolsSkills} delay={0.4} inView={inView} />
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
    >
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">{title}</h3>
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
    design: 'bg-primary-500',
    development: 'bg-secondary-500',
    tools: 'bg-accent-500',
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
        <span className="text-gray-600 dark:text-gray-400 text-sm">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          className={`h-full rounded-full ${barColors[skill.category]}`}
        ></motion.div>
      </div>
    </div>
  );
};

export default Skills;