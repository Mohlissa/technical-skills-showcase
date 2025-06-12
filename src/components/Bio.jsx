// src/components/Bio.jsx
import { motion } from "framer-motion";

export default function Bio() {
  return (
    <section className="bg-white py-16 px-4 md:px-20 text-gray-800">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-700">Professional Bio</h2>

        <p className="text-lg mb-4 leading-relaxed">
          I'm <span className="font-semibold">Oluwaferanmi Akintilerewa</span>. A Software Engineer with a passion for building intelligent, scalable, and human-centered systems.
        </p>

        <p className="text-lg mb-4 leading-relaxed">
          <span className="font-semibold">Skills:</span> JavaScript, React, Node.js, Python, Bash, Firebase, REST APIs, Git, Tailwind CSS, Docker, and cloud platforms.
        </p>

        <p className="text-lg mb-4 leading-relaxed">
          <span className="font-semibold">Education:</span> B.Sc. in Computer Science. and currently learning at Altschool of africa in the cloud engineering track to upskill.
        </p>

        <p className="text-lg leading-relaxed">
          <span className="font-semibold">Past Projects:</span> I've built cloud-native dashboards, IoT-powered health trackers, and automated monitoring tools — all focused on practical, real-world impact.
        </p>
      </motion.div>
    </section>
  );
}

