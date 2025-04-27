import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Header */}
      <header className="px-4 py-6 flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center md:text-left mb-4 md:mb-0">
          Harish Ragav S
        </h1>
        <a
          href={`${process.env.PUBLIC_URL}/Harish_Ragav_S_Resume.pdf`}
          download="Harish_Ragav_S_Resume.pdf"
        >
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 text-sm">
            Download Resume
          </button>
        </a>
      </header>

      {/* Intro */}
      <section className="flex flex-col items-center text-center px-4 py-10 max-w-3xl mx-auto">
        <p className="text-xl md:text-2xl font-semibold">Welcome to my portfolio!</p>
        <p className="mt-2 text-gray-400 text-base md:text-lg">Aspiring Software Engineer</p>
        <div className="flex flex-wrap justify-center gap-6 mt-4 text-2xl">
          <a href="https://github.com/harishragav-s" target="_blank" className="hover:text-blue-400" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/harishragav-s/" target="_blank" className="hover:text-blue-400" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:ragavharish15@gmail.com" className="hover:text-blue-400">
            <FaEnvelope />
          </a>
          <a href="tel:+918825976955" className="hover:text-blue-400">
            <FaPhone />
          </a>
        </div>
        <p className="mt-2 text-base md:text-lg">📍 Chennai, Tamil Nadu</p>
      </section>

      {/* Education */}
      <section className="px-4 py-10 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold">Education</h2>
        <div className="mt-4 space-y-2 text-base md:text-lg">
          <p>B.E. Computer Science & Engineering (IoT), Saveetha Engineering College, Chennai | CGPA: 7.6</p>
          <p>Class XII – CBSE, Green Park International Senior Secondary School, Namakkal | 85.4%</p>
          <p>Class X – CBSE, Trinity International School, Namakkal | 89.0%</p>
        </div>
      </section>

      {/* Projects */}
      <section className="px-4 py-10 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold">Projects</h2>
        <div className="mt-6 p-6 bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-xl md:text-2xl font-bold">E-commerce MERN Application (Nov 2024)</h3>
          <p className="text-sm md:text-lg mt-2">
            Developed a full stack e-commerce platform using the MERN stack (MongoDB, Express.js, React, Node.js).
            Features include product browsing, user authentication, shopping cart, and an admin dashboard.
          </p>
          <a href="https://github.com/harishragav-s/ecommerce-mern" target="_blank" className="text-blue-400 block mt-2" rel="noreferrer">
            View on GitHub
          </a>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="px-4 py-10 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold">Technical Skills</h2>
        <div className="mt-4 space-y-2 text-sm md:text-lg">
          <p><strong>Programming Languages:</strong> Java, C, Python</p>
          <p><strong>Data Structures & Algorithms</strong></p>
          <p><strong>Web Dev:</strong> HTML, CSS, JavaScript, React, Node.js, Express.js</p>
          <p><strong>Databases & Cloud:</strong> MySQL, MongoDB, AWS</p>
          <p><strong>Version Control:</strong> Git, GitHub</p>
        </div>
      </section>

      {/* Certifications */}
      <section className="px-4 py-10 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Certifications</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Udemy */}
          <a
            href="https://www.udemy.com/certificate/UC-f9a67571-5042-4485-bd60-b10c0a650685/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-lg p-5 hover:bg-gray-700 transition shadow-md block"
          >
            <p className="font-semibold text-lg">Java Data Structures & Algorithms</p>
            <p className="text-sm text-gray-400 mt-1">Certifying Authority: Udemy</p>
          </a>

          {/* Coursera */}
          <a
            href="https://www.coursera.org/account/accomplishments/verify/W7S2Y3TX9AM3"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-lg p-5 hover:bg-gray-700 transition shadow-md block"
          >
            <p className="font-semibold text-lg">AWS Cloud Practitioner Essentials</p>
            <p className="text-sm text-gray-400 mt-1">Certifying Authority: Coursera</p>
          </a>

          {/* Forage */}
          <a
            href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_ubmj4PoYCZbwSFrMe_1725183281132_completion_certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-lg p-5 hover:bg-gray-700 transition shadow-md block"
          >
            <p className="font-semibold text-lg">JPMC SWE Job Simulation</p>
            <p className="text-sm text-gray-400 mt-1">Certifying Authority: Forage</p>
          </a>

          {/* HP Life */}
          <a
            href="https://www.life-global.org/certificate/bdabf788-0947-40c5-9299-206c2a910d72"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-lg p-5 hover:bg-gray-700 transition shadow-md block"
          >
            <p className="font-semibold text-lg">AI for Beginners</p>
            <p className="text-sm text-gray-400 mt-1">Certifying Authority: HP Life</p>
          </a>

          {/* Microsoft */}
          <a
            href="https://www.coursera.org/account/accomplishments/verify/4TQTNCYKVTCH"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-lg p-5 hover:bg-gray-700 transition shadow-md block"
          >
            <p className="font-semibold text-lg">Introduction to Web Development</p>
            <p className="text-sm text-gray-400 mt-1">Certifying Authority: Microsoft</p>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center text-gray-500 text-sm md:text-lg border-t border-gray-700 mt-10">
        © {new Date().getFullYear()} Harish Ragav S | Built with React & Tailwind CSS
      </footer>
    </div>
  );
}
