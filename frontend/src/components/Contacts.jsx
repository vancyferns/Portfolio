import React from "react";

function Contact() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 px-4">
      {/* Updated the background to a darker gray and added text-white */}
      <div className="w-full max-w-lg bg-gray-800 text-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Feel Free to get in touch</h2>
        <form className="space-y-5">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              // Updated input background and placeholder color
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-700 text-white placeholder-gray-400"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              // Updated input background and placeholder color
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-700 text-white placeholder-gray-400"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Your Message..."
              // Updated textarea background and placeholder color
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-700 text-white placeholder-gray-400"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
