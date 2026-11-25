import DecentralizedAI from './assets/DecentralizedAI.png'
import PodcastApp from './assets/PodcastApp.png'
import MedicalAppointment from './assets/MedicalAppointment.png'
import StudentManagement from './assets/StudentManagement.png'
function Projects() {
  return (
    <section
      id="projects"
      className="bg-gray-50 py-20 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <p className="text-purple-700 text-lg font-medium mb-4">
          VIEW MY WORK
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Projects
        </h2>

        <p className="text-gray-600 text-lg mb-10">
          Explore some of my projects and the technologies used to build them.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <div className="bg-white flex flex-col justify-center items-center  border border-gray-300 rounded-xl p-4 shadow-sm hover:shadow-xl transition duration-300">
            <img
              src={DecentralizedAI}
              alt="AI Document Verification"
              className=" h-56 object-contain rounded-lg"
            />
            <h3 className="text-xl font-bold text-purple-800 text-center mt-5 mb-4">
              Decentralized AI Document Verification System
            </h3>
            <p className="text-gray-600 text-center leading-7 mb-5">
              A secure document verification system that combines
              Artificial Intelligence and Blockchain technology
              to detect document forgery and prevent identity theft.
            </p>
              <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-purple-100 px-4 py-2 rounded-full text-sm">Python</span>
              <span className="bg-purple-100 px-4 py-2 rounded-full text-sm">Flask</span>
              <span className="bg-purple-100 px-4 py-2 rounded-full text-sm">Ethereum</span>
              <span className="bg-purple-100 px-4 py-2 rounded-full text-sm">Solidity</span>
              <span className="bg-purple-100 px-4 py-2 rounded-full text-sm">AI</span>
            </div>
          </div>          
          <div className="bg-white border border-gray-300 flex flex-col justify-center items-center rounded-xl p-4 shadow-sm hover:shadow-xl transition duration-300">
            <img
              src={PodcastApp}
              alt="Redux Podcast App"
              className=" h-56 object-cover rounded-lg"
            />
            <h3 className="text-xl font-bold text-purple-800 text-center mt-5 mb-4">
              Redux Podcast App
            </h3>
            <p className="text-gray-600 text-center leading-7 mb-5">
              A modern podcast application built with React and Redux,
              featuring dynamic themes and an interactive user interface.
              Users can explore podcasts and enjoy a personalized
              listening experience.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-purple-100 px-4 py-2 rounded-full text-sm">Kotlin</span>
              <span className="bg-purple-100 px-4 py-2 rounded-full text-sm">Android Studio </span>
              <span className="bg-purple-100 px-4 py-2 rounded-full text-sm">Jetpack Compose</span>
              <span className="bg-purple-100 px-4 py-2 rounded-full text-sm">Android Media3</span>
            </div>

          </div>
          <div className="bg-white border border-gray-300 flex flex-col justify-center items-center  rounded-xl p-4 shadow-sm hover:shadow-xl transition duration-300">

            <img
              src={MedicalAppointment}
              alt="Medical Appointment Tracking System"
              className=" h-56 object-cover rounded-lg"
            />

            <h3 className="text-xl font-bold text-purple-800 text-center mt-5 mb-4">
              Medical Appointment Tracking System
            </h3>

            <p className="text-gray-600 text-center leading-7 mb-5">
              A web-based application that helps patients schedule
              and manage medical appointments, track appointment
              details, and receive timely reminders.
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-purple-100 px-4 py-2 rounded-full text-sm">React.js</span>
              <span className="bg-purple-100 px-4 py-2 rounded-full text-sm">Tailwind CSS</span>
              <span className="bg-purple-100 px-4 py-2 rounded-full text-sm">JavaScript</span>
              <span className="bg-purple-100 px-4 py-2 rounded-full text-sm">HTML5</span>
              <span className="bg-purple-100 px-4 py-2 rounded-full text-sm">Vite</span>
            </div>

          </div>
          <div className="bg-white border border-gray-300 flex flex-col gap-3 justify-center items-center rounded-xl p-4 shadow-sm hover:shadow-xl transition duration-300">

            <img
              src={StudentManagement}
              alt="Student Management System"
              className=" h-56 object-cover rounded-lg"
            />

            <h3 className="text-xl font-bold text-purple-800 text-center mt-5 mb-4">
              Student Management System
            </h3>

            <p className="text-gray-600 text-center leading-7 mb-5">
              A web-based application designed to manage student
              information efficiently. It provides functionality
              to add, view, update, and delete student records
              through an organized interface.
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-purple-100 px-4 py-2 rounded-full text-sm">React.js</span>
              <span className="bg-purple-100 px-4 py-2 rounded-full text-sm">JavaScript</span>
              <span className="bg-purple-100 px-4 py-2 rounded-full text-sm">Tailwind CSS</span>
              <span className="bg-purple-100 px-4 py-2 rounded-full text-sm">Firebase</span>


            </div>
            <div>
              <span className="block bg-purple-700 hover:bg-purple-700 transition text-white font-semibold p-3 rounded-xl"> <a href='https://kaviyareact.vercel.app/' target="_blank" rel="noopener noreferrer" className="text-center mt-auto pt-6"> Live Demo </a> </span>
            </div>
            

          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;