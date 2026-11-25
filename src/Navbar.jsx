
import React from "react";
import { IoMenu } from "react-icons/io5";

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">

            <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-purple-700">
                    KAVIYA K
                </h1>
                <details className="relative group">
                    <summary className="list-none text-3xl cursor-pointer md:hidden text-purple-700">
                        <IoMenu />
                    </summary>


                    <div className="absolute right-0 top-10 w-56 bg-white shadow-lg rounded-lg p-5 flex flex-col gap-4
                        md:static md:w-auto md:flex-row md:items-center md:gap-6 md:p-0 md:shadow-none">

                        <a href="#home" className="text-gray-700 hover:text-purple-700 font-medium">Home</a>
                        <a href="#about" className="text-gray-700 hover:text-purple-700 font-medium">About</a>
                        <a href="#skills" className="text-gray-700 hover:text-purple-700 font-medium">Skills</a>
                        <a href="#projects" className="text-gray-700 hover:text-purple-700 font-medium">Projects</a>
                        <a href="#internship" className="text-gray-700 hover:text-purple-700 font-medium">Internship</a>
                        <a href="#education" className="text-gray-700 hover:text-purple-700 font-medium">Education</a>
                        <a href="#contact" className="text-gray-700 hover:text-purple-700 font-medium">Contact</a>

                    </div>

                </details>

            </div>
        </nav>
    );
}

export default Navbar;
