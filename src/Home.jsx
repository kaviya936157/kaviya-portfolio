import Kaviyaimages from './assets/Kaviyaimages.png'
function Home() {
    return (
        <section
            id="home"
            className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-200 flex items-center pt-24"  >
            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                    <p className="text-purple-700 text-lg font-semibold mb-3">  Hello, I'm</p>
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">  Kaviya <span className="text-purple-700">K</span> </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-purple-700 mb-5"> Full Stack Developer  </h2>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                        I'm a Computer Science Engineering graduate passionate
                        about creating responsive and user-friendly web
                        applications using modern technologies. </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <a href="#projects" className="bg-purple-700 text-white px-7 py-3 rounded-full hover:bg-purple-800 transition duration-300" > View Projects  </a>
                        <a href="#contact" className="border-2 border-purple-700 text-purple-700 px-7 py-3 rounded-full hover:bg-purple-700 hover:text-white transition duration-300" >
                            Contact Me </a>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-purple-300 border-8 border-white shadow-2xl overflow-hidden">
                        <img
                            src={Kaviyaimages}
                            alt="Kaviya Profile"
                            className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;