import React from 'react';
import { ArrowUpRight } from 'lucide-react';

// Projects section component
export default function Projects() {
  const projectList = [
    {
      title: 'SeriesSpot - Your Web Series Guide',
      description: 'A Responsive Series Platform Landing Page built with React & Tailwind CSS',
      tech: ['React', 'Tailwind CSS'],
      link: 'https://series-stop.vercel.app/',
    },
    {
      title: 'Find My Space - Find your spot Fast',
      description: 'Real-Time Parking Finder & Booking System',
      tech: ['React Js', 'Tailwind CSS', 'Firebase'],
      link: 'https://find-my-space-3b5cgczlj-taras-projects-ecb4c2de.vercel.app/',
    },
    {
      title: 'Weekly NewsLetter',
      description: 'A weekly newsletter blog created using Flask,html css and js. used Replit for overall development. Git for version control. and Avien for mysql cloud server and render for deployment',
      tech: ['Html', 'Css', 'Flask','Mysql'],
      link: 'https://the-becoming-league-cznv.onrender.com/',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-900 flex items-center justify-center">
      <div className="container mx-auto space-y-12 text-center">
        <h2 className="text-4xl font-bold text-white">My Projects</h2>
        {/*
          Modified the grid to handle the layout for 1, 2, or 3 cards.
          On medium screens (md), it's a 2-column grid. The last card will be
          on its own row. We use `md:col-span-1` and `md:mx-auto` to keep its size
          and center it.
          On large screens (lg), it's a 3-column grid, so all cards fit on one row.
        */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {projectList.map((project, index) => (
            <div
              key={index}
              className={`bg-gray-800 p-8 rounded-2xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 space-y-4 ${
                index === projectList.length - 1 && projectList.length % 2 !== 0
                  ? 'md:col-span-2 md:w-1/2 md:mx-auto lg:col-span-1 lg:w-auto'
                  : ''
              }`}
            >
              <h3 className="text-2xl font-semibold text-blue-400">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-gray-700 text-sm px-3 py-1 rounded-full text-gray-200">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} className="inline-block mt-4 text-purple-400 hover:text-white transition-colors duration-300">
                View Project <ArrowUpRight className="inline-block w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
