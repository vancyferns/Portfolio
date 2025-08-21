import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Footer component
export default function Footer() {
  return (
    <footer className="py-8 text-center text-gray-400 bg-gray-900 border-t border-gray-700">
      <p>&copy; {new Date().getFullYear()} Jane Doe. All rights reserved.</p>
      <p className="mt-2">
        Made with <span className="text-red-500">&hearts;</span> and React
      </p>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-4 text-2xl">
        <a
          href="https://github.com/vancyferns"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/vancy-agnes-fernandes-3b6215278/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}
