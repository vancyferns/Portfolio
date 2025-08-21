import React from 'react';

// Experience section component
export default function Experience() {
  const experienceList = [
    {
      title: 'Software Engineering Intern',
      company: 'Persistent Systems Ltd.',
      duration: 'Jul 2025 - Present',
      description: 'Built an emotion based song recommendations system called Moodify with a group of 5 members Used tools like GitHub codespaces, Replit, Mongo DB, Cloudinary & framework and libraries like React js, Flask, Bootstrap, Tailwind CSS, DNN, Distil Roberta Model for Sentiment Analysis.',
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-4 bg-gray-800 flex items-center justify-center">
      <div className="container mx-auto space-y-12 text-center">
        <h2 className="text-4xl font-bold text-white">Experience</h2>
        <div className="grid md:grid-cols-1 gap-8">
          {experienceList.map((job, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-2xl shadow-xl space-y-4">
              <h3 className="text-2xl font-semibold text-white">{job.title}</h3>
              <p className="text-lg text-blue-400">{job.company} &bull; {job.duration}</p>
              <p className="text-gray-300 leading-relaxed">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
