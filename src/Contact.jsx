
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_l31l2lm",
            "template_4l0sc5g",
            form.current,
            {
                publicKey: "ROD5aA0DTMLE9qb4B",
            }
        )
        .then(() => {
            alert("Message sent successfully!");
            form.current.reset();
        })
        .catch((error) => {
            console.log("Email Error:", error);
            alert("Message sending failed!");
        });
    };

    return (
        <section id="contact" className="bg-purple-50 min-h-screen py-16 px-5">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-slate-900">
                        Let's Connect
                    </h2>
                    <p className="text-gray-600 mt-5 text-lg">
                        Drop me a message or connect with me on social media.
                    </p>
                </div>

                <div className="max-w-xl mx-auto bg-white border border-purple-200 rounded-xl shadow-lg p-7 md:p-10">

                    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">

                        <input
                            type="text"
                            name="from_name"
                            placeholder="Name"
                            required
                            className="w-full border-2 border-purple-200 rounded-lg px-4 py-4 outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-300 transition"
                        />

                        <input
                            type="email"
                            name="from_email"
                            placeholder="E-mail"
                            required
                            className="w-full border-2 border-purple-200 rounded-lg px-4 py-4 outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-300 transition"
                        />

                        <input
                            type="tel"
                            name="contact_number"
                            placeholder="Contact Number"
                            className="w-full border-2 border-purple-200 rounded-lg px-4 py-4 outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-300 transition"
                        />

                       

                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="6"
                            required
                            className="w-full border-2 border-purple-200 rounded-lg px-4 py-4 outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-300 transition resize-y"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full border-2 border-purple-700 text-purple-800 font-semibold rounded-full py-4 mt-2 hover:bg-purple-700 hover:text-white transition duration-300"
                        >
                            Send Message
                        </button>

                    </form>
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-600 text-xl mb-8">
                        Or connect directly
                    </p>

                    <div className="flex flex-wrap justify-center gap-5">

                        <a href="https://www.linkedin.com/in/kaviya-k-243840300/"
                            className="bg-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-purple-900 hover:-translate-y-1 transition duration-300">
                            LinkedIn
                        </a>

                        <a href="https://wa.me/919361570735"
                            className="bg-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-purple-900 hover:-translate-y-1 transition duration-300">
                            WhatsApp
                        </a>

                        <a href="https://www.instagram.com/_kavi._05?knvt=emlzbnRwcjFpYnQw"
                            className="bg-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-purple-900 hover:-translate-y-1 transition duration-300">
                            Instagram
                        </a>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default Contact;
