import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import "@fontsource/poppins"; // Assuming you installed this font via npm/yarn

export default function Portfolio() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen font-poppins">
      
      {/* Sticky Header */}
      <header className="sticky top-0 bg-gray-900 bg-opacity-90 backdrop-blur-md z-30 py-6 px-4 flex flex-col items-center shadow-lg">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-3 tracking-wide"
        >
          Harish Ragav S
        </motion.h1>
        <motion.a
          href={`${process.env.PUBLIC_URL}/Harish_Ragav_S_Resume.pdf`}
          download="Harish_Ragav_S_Resume.pdf"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-cyan-500 hover:bg-cyan-400 px-8 py-3 rounded-full font-semibold text-white shadow-md transition"
        >
          Download Resume
        </motion.a>
      </header>

      {/* Introduction */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center px-6 py-12 max-w-3xl mx-auto"
      >
        <p className="text-2xl font-semibold">Welcome to my portfolio!</p>
        <p className="mt-2 text-gray-300 text-lg">Aspiring Software Engineer</p>
        <div className="flex justify-center gap-8 mt-6 text-3xl text-gray-400 hover:text-cyan-400 transition">
          <a href="https://github.com/harishragav-s" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/harishragav-s/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="mailto:ragavharish15@gmail.com"><FaEnvelope /></a>
          <a href="tel:+918825976955"><FaPhone /></a>
        </div>
        <p className="mt-4 text-gray-400 text-lg">📍 Chennai, Tamil Nadu</p>
      </motion.section>

      {/* Technical Skills */}
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 py-12"
      >
        <h2 className="text-3xl font-semibold mb-8 border-b border-cyan-500 pb-2 max-w-max">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 text-gray-300 text-lg">
          <p><strong>Languages:</strong> Java, Python, JavaScript, C</p>
          <p><strong>Frontend:</strong> React.js, Vite, HTML, CSS, Axios</p>
          <p><strong>Backend:</strong> Node.js, Express.js, REST APIs</p>
          <p><strong>Database & Security:</strong> MongoDB, MySQL, JWT Auth, Bcrypt</p>
          <p><strong>Version Control:</strong> Git, GitHub</p>
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 py-12"
      >
        <h2 className="text-3xl font-semibold mb-8 border-b border-cyan-500 pb-2 max-w-max">
          Projects
        </h2>
        <div className="bg-gray-800 rounded-xl p-8 shadow-xl hover:shadow-cyan-600 transition-shadow">
          <h3 className="text-2xl font-bold mb-4">E-commerce Application (Nov 2024)</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-300 text-lg">
            <li>Full-stack e-commerce site with product browsing, secure JWT login/register, persistent shopping cart.</li>
            <li>Frontend: React (Vite) with Axios for API communication.</li>
            <li>Backend: RESTful APIs with Node.js and Express, MongoDB database.</li>
            <li>Security: Password hashing with Bcrypt, JWT authentication and route protection.</li>
          </ul>
          <a href="https://github.com/harishragav-s/ecommerce-mern" target="_blank" rel="noreferrer" className="inline-block mt-6 text-cyan-400 hover:underline">
            View on GitHub
          </a>
        </div>
      </motion.section>

      {/* Certifications */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 py-12"
      >
        <h2 className="text-3xl font-semibold mb-8 border-b border-cyan-500 pb-2 max-w-max">
          Certifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Java Data Structures & Algorithms",
              authority: "Udemy",
              link: "https://www.udemy.com/certificate/UC-f9a67571-5042-4485-bd60-b10c0a650685/",
            },
            {
              title: "Intro to Web Development",
              authority: "Microsoft (Coursera)",
              link: "https://www.coursera.org/account/accomplishments/verify/4TQTNCYKVTCH",
            },
            {
              title: "AWS Cloud Practitioner Essentials",
              authority: "AWS (Coursera)",
              link: "https://www.coursera.org/account/accomplishments/verify/W7S2Y3TX9AM3",
            },
            {
              title: "AI for Beginners",
              authority: "HP Life",
              link: "https://www.life-global.org/certificate/bdabf788-0947-40c5-9299-206c2a910d72",
            },
          ].map(({ title, authority, link }) => (
            <a
              key={title}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 shadow-md transition flex flex-col"
            >
              <p className="font-semibold text-lg">{title}</p>
              <p className="text-gray-400 mt-2">{authority}</p>
            </a>
          ))}
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 py-12"
      >
        <h2 className="text-3xl font-semibold mb-6 border-b border-cyan-500 pb-2 max-w-max">
          Education
        </h2>
        <div className="space-y-4 text-lg text-gray-300">
          <p>B.E. Computer Science & Engineering (IoT), Saveetha Engineering College, Chennai</p>
          <p>Class XII – CBSE, Green Park International Senior Secondary School, Namakkal</p>
          <p>Class X – CBSE, Trinity International School, Namakkal</p>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="p-6 text-center text-gray-400 text-sm md:text-lg border-t border-gray-700 mt-12 select-none">
        © {new Date().getFullYear()} Harish Ragav S | Built with React & Tailwind CSS
      </footer>
    </div>
  );
}
