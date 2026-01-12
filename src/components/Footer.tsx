import React from 'react';
import { Github as GitHub, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 sm:py-12">
      <div className="container mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-8 md:gap-0">
          <div className="mb-4 md:mb-0 w-full md:w-auto">
            <h2 className="text-lg sm:text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">manidhar.dev</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-md text-sm sm:text-base mx-auto md:mx-0">
              Creating remarkable digital experiences with clean, efficient, and intuitive designs.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end w-full md:w-auto">
            <div className="flex space-x-4 mb-4 justify-center md:justify-end">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <GitHub size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
              © {year} manidhar.dev. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;