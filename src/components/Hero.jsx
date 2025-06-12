// src/components/Hero.jsx
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-white to-blue-50">
      <motion.h1 
        className="text-xl md:text-2xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Oluwaferanmi Akintilerewa
      </motion.h1>

      <motion.h2 
        className="text-xl md:text-2xl font-medium text-blue-700 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Lead Software Engineer at Molissa Health Assurance
      </motion.h2>

      <motion.p 
        className="max-w-xl text-lg text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <span className="font-semibold">The Future of Wearable Health Monitoring Devices</span><br />
        Our wearable health system reformulates patient care by providing real-time biometric insights, smart alerts, and predictive intelligence—all in a compact, user-friendly ecosystem.
      </motion.p>
    </section>
  );
}

