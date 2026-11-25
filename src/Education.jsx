
import React from "react";

function Education() {
    return (
        <section id="education" className="bg-purple-50 py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10">
                    <p className="text-purple-700 font-semibold text-sm uppercase mb-4">
                        My Academic Background
                    </p>
                    <h2 className="text-4xl font-bold text-slate-900">
                        Education
                    </h2>
                    <p className="text-gray-600 mt-4 text-lg">My academic journey and technical foundation.  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-7 rounded-xl border border-purple-100 shadow-sm hover:shadow-lg hover:border-purple-300 transition duration-300">
                        <span className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-5"> SSLC </span>
                        <h3 className="text-xl font-bold text-slate-900 mb-3"> Secondary School  </h3>
                        <p className="text-purple-700 font-medium"> Sankar Ponnar Higher Secondary School, Palani </p>
                        <p className="text-gray-500 text-sm mt-2"> 2019 - 2020  </p>
                        <p className="text-gray-600 mt-6"> Percentage : 90% </p>
                    </div>
                    <div className="bg-white p-7 rounded-xl border border-purple-100 shadow-sm hover:shadow-lg hover:border-purple-300 transition duration-300">
                        <span className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-5"> HSC </span>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Higher Secondary School </h3>
                        <p className="text-purple-700 font-medium"> Sankar Ponnar Higher Secondary School, Palani </p>
                        <p className="text-gray-500 text-sm mt-2"> 2021 - 2022  </p>
                        <p className="text-gray-600 mt-6"> Percentage : 88% </p>
                    </div>
                    <div className="bg-white p-7 rounded-xl border border-purple-100 shadow-sm hover:shadow-lg hover:border-purple-300 transition duration-300">
                        <span className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-5"> College </span>
                        <h3 className="text-xl font-bold text-slate-900 mb-3"> B.E. Computer Science and Engineering</h3>
                        <p className="text-purple-700 font-medium"> Christ the King Engineering College, Karamadai</p>
                        <p className="text-gray-500 text-sm mt-2"> 2022 - 2026</p>
                        <p className="text-gray-600 mt-6">CGPA : 8.5</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
