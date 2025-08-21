import React from 'react';
import { ArrowDown } from 'lucide-react'
import profileImage from "./profile.jpg"
// About section component
export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-4 bg-gray-800 flex items-center justify-center">
      <div className="container mx-auto">
        {/*
          Uses a responsive grid layout.
          - On mobile, it's a single column (grid-cols-1).
          - On tablets and larger screens, it becomes a two-column grid (md:grid-cols-2).
          - The `gap-12` class adds spacing between the grid items.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            {/* Replaced the local image import with a publicly available placeholder image. */}
            <img
              src={profileImage}
              alt="Profile"
              className="rounded-full shadow-2xl w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-purple-500"
            />
          </div>
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-4xl font-bold text-white">About Me</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a diligent and hardworking student with a strong focus on skill development . Passionate about Fullstack
              Web Development.Actively engaged in technical events and project based learning . Eager to learn new
              technologies as per needs. Committed to continuous growth through self reflection and introspection.
             
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
               Currently enhancing my skills by undertaking courses , building projects and trying out virtual internships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
