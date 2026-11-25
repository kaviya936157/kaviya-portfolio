
import React from "react";

function Internship() {
  return (
    <section id="internship" className="bg-white py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="mb-14">
          <p className="text-purple-600 font-semibold tracking-widest uppercase text-sm mb-3">
            Career Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Internship Experience
          </h2>

          <p className="text-gray-500 mt-4 text-lg">
            Building skills through practical experience and continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          <div className="group border border-gray-200 rounded-xl p-8 hover:border-purple-500 hover:shadow-xl transition-all duration-300">

            <div className="flex justify-between items-center mb-8">
              <span className="text-sm font-semibold text-purple-700 bg-purple-50 px-4 py-2 rounded-md">
                IN PROGRESS
              </span>
              <span className="text-sm text-gray-400">01</span>
            </div>

            <p className="text-gray-500 text-sm mb-2">2026 · 6 Months</p>

            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Full Stack Developer Intern
            </h3>

            <p className="text-purple-700 font-medium mb-5">
              Creaviq Technologies Pvt Ltd
            </p>

            <div className="w-10 h-1 bg-purple-600 mb-5 group-hover:w-20 transition-all duration-300"></div>

            <p className="text-gray-600 leading-7">
              Learning to develop responsive web applications using HTML,
              CSS, JavaScript, React.js, Tailwind CSS and Backend technologies.
            </p>

          </div>
          <div className="group border border-gray-200 rounded-xl p-8 hover:border-purple-500 hover:shadow-xl transition-all duration-300">
            <div className="flex justify-between items-center mb-8">
              <span className="text-sm font-semibold text-green-700 bg-green-50 px-4 py-2 rounded-md">
                COMPLETED
              </span>
              <span className="text-sm text-gray-400">02</span>
            </div>

            <p className="text-gray-500 text-sm mb-2">2023 · 1 Month</p>

            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Front End Development
            </h3>

            <p className="text-purple-700 font-medium mb-5">
              Binary Spot Technology
            </p>

            <div className="w-10 h-1 bg-purple-600 mb-5 group-hover:w-20 transition-all duration-300"></div>
            <p className="text-gray-600 leading-7">
              Practiced HTML, CSS, responsive layouts and interactive
              user interface development.
            </p>
          </div>
          <div className="group border border-gray-200 rounded-xl p-8 hover:border-purple-500 hover:shadow-xl transition-all duration-300">
            <div className="flex justify-between items-center mb-8">
              <span className="text-sm font-semibold text-green-700 bg-green-50 px-4 py-2 rounded-md">
                COMPLETED
              </span>
              <span className="text-sm text-gray-400">03</span>
            </div>
            <p className="text-gray-500 text-sm mb-2">2024 · 1 Month</p>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              UI/UX Design
            </h3>
            <p className="text-purple-700 font-medium mb-5">
              Internpe
            </p>
            <div className="w-10 h-1 bg-purple-600 mb-5 group-hover:w-20 transition-all duration-300"></div>
            <p className="text-gray-600 leading-7">
              Explored Figma, Canva, responsive layouts and
              interactive UI design for websites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Internship;
