import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Sparkles, ExternalLink, Calendar } from 'lucide-react';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialUrl?: string;
  credentialId?: string;
}

const Certifications: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications: Certification[] = [
    {
      id: 1,
      title: 'Essentials Automation Certification',
      issuer: 'Automation Anywhere',
      date: 'Issued May 2025 · Expires May 2027',
      description: 'Certification in robotic process automation (RPA) and automation solutions.',
      credentialId: '143301930',
    },
    {
      id: 2,
      title: 'Salesforce Certified AI Associate',
      issuer: 'Salesforce',
      date: '2024',
      description: 'Certification demonstrating expertise in Salesforce AI capabilities and applications.',
      credentialId: '5137061',
    },
    {
      id: 3,
      title: 'Aviatrix Certified Engineer - Multicloud Network Associate',
      issuer: 'Aviatrix',
      date: '2024',
      description: 'Certification in multicloud networking, demonstrating expertise in cloud network architecture and design.',
    },
    {
      id: 4,
      title: 'Oracle Cloud Infrastructure 2025 Certified Developer Professional',
      issuer: 'Oracle',
      date: '2025',
      description: 'Professional certification demonstrating advanced skills in Oracle Cloud Infrastructure development and deployment.',
    },
    {
      id: 5,
      title: 'Linguaskill Test Report',
      issuer: 'Cambridge English / Koneru Lakshmaiah Education Foundation',
      date: '2024',
      description: 'English language proficiency test - Good Score: 163, CEFR Level: B2 (Upper Intermediate).',
      credentialId: '2300031813',
    },
  ];

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="certifications" className="relative py-20 overflow-hidden">
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
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg px-2 xs:px-4">
            Professional certifications and credentials that validate my expertise and continuous learning journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((certification, index) => (
            <CertificationCard
              key={certification.id}
              certification={certification}
              index={index}
              inView={inView}
            />
          ))}
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

interface CertificationCardProps {
  certification: Certification;
  index: number;
  inView: boolean;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ certification, index, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700/50 flex flex-col"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
          <Award className="text-primary-500" size={28} />
        </div>
        {certification.credentialUrl && (
          <motion.a
            href={certification.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            aria-label="View credential"
          >
            <ExternalLink size={20} />
          </motion.a>
        )}
      </div>
      
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 break-words">
        {certification.title}
      </h3>
      
      <p className="text-primary-600 dark:text-primary-400 font-medium mb-4 text-sm sm:text-base">
        {certification.issuer}
      </p>
      
      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-4 text-sm">
        <Calendar size={16} />
        <span>{certification.date}</span>
      </div>
      
      <p className="text-gray-600 dark:text-gray-400 mb-4 break-words text-sm sm:text-base flex-grow">
        {certification.description}
      </p>
      
      {certification.credentialId && (
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Credential ID: <span className="font-mono">{certification.credentialId}</span>
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default Certifications;
