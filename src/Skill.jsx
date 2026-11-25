function Skills() {
  return (
    <section
      id="skills"
      className="bg-white py-20 px-6 md:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-purple-700 text-lg font-medium mb-5">
          WHAT I KNOW
        </p>

        <h2 className="text-4xl font-extrabold text-gray-900 mb-5">
          My Skills
        </h2>

        <p className="text-gray-600 text-lg md:text-xl mb-10">
          Technologies I use to build responsive and user-friendly websites.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-purple-500  text-white border border-purple-500 rounded-2xl py-8 text-center font-semibold text-lg hover:bg-purple-200   hover:text-black transition">
            HTML
          </div>

          <div className="bg-purple-500  text-white border border-purple-500 rounded-2xl py-8 text-center font-semibold text-lg hover:bg-purple-200  hover:text-black  transition">
            CSS
          </div>

          <div className="bg-purple-500  text-white border border-purple-500 rounded-2xl py-8 text-center font-semibold text-lg hover:bg-purple-200  hover:text-black  transition">
            JavaScript
          </div>

          <div className="bg-purple-500  text-white border border-purple-500 rounded-2xl py-8 text-center font-semibold text-lg hover:bg-purple-200  hover:text-black  transition">
            React.js
          </div>

          <div className="bg-purple-500 text-white border border-purple-500 rounded-2xl py-8 text-center font-semibold text-lg hover:bg-purple-200 hover:text-black transition">
            Tailwind CSS
          </div>


        </div>

      </div>
    </section>
  );
}

export default Skills;