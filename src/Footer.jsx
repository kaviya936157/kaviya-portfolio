
import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950 text-white pt-16 pb-6">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center">
                    <h2 className="text-4xl font-bold tracking-wider">  KAVIYA K </h2>
                    <p className="text-lg text-purple-200 mt-3"> Aspiring Developer  </p>
                    <p className="text-purple-300 mt-4"> Creating meaningful digital experiences with passion. </p>

                </div>
                <div className="flex justify-center items-center gap-10 mt-12 mb-12">
                    <a href="https://www.linkedin.com/in/kaviya-k-243840300/" className="p-3 rounded-full bg-purple-800 hover:bg-purple-600 hover:-translate-y-2 transition duration-300" title="Home"><IoLogoLinkedin className="text-2xl" /> </a>
                    <a href="https://github.com/kaviya936157" className="p-3 rounded-full bg-purple-800 hover:bg-purple-600 hover:-translate-y-2 transition duration-300" title="Projects"><IoLogoGithub className="text-2xl" /> </a>
                    <a href="mailto:kaviya93615707@gmail.com" className="p-3 rounded-full bg-purple-800 hover:bg-purple-600 hover:-translate-y-2 transition duration-300" title="Contact"> <MdOutlineEmail className="text-2xl" /> </a>
                </div>
                <div className="border-t border-purple-700 pt-6 text-center">
                    <p className="text-purple-200 text-sm"> © 2026 Kaviya K. All Rights Reserved. </p>
                    <p className="text-purple-300 text-sm mt-2">  Designed & Developed with ❤️ by Kaviya </p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
