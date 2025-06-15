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
        <br /> <br />
        Oluwaferanmi Akintilerewa
      </motion.h1>

      <motion.h2 
        className="text-xl md:text-2xl font-medium text-blue-700 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Lead Software Engineer & Founder at Molissa Health Assurance
      </motion.h2>

      <motion.p 
        className="max-w-xl text-lg text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <span className="font-bold">The Future of Wearable Health Monitoring Devices</span><br /> 
        Our wearable health system reformulates patient care by providing real-time biometric insights, smart alerts, and predictive intelligence, all in a compact, user-friendly ecosystem.
      <br />
      <br />
        <span className="font-bold">Our Vision</span><br />
        We envision a future where health monitoring is seamless, proactive, and accessible where wearable devices not only track data but also deliver timely insights, detect abnormalities early, and support decision-making for individuals and healthcare providers alike.
        In this future, wearable health monitoring devices will move beyond passive step counters or heart rate trackers. They will become real-time health companions—miniaturized, AI-driven systems capable of analyzing vital signs, detecting patterns, and predicting potential health risks before symptoms emerge.
      </motion.p>

      <motion.p className="max-w-xl text-lg text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
       <br /> <span className="font-bold">What This Future Looks Like:</span><br /> <br />
⚫<span className="font-semibold">Always-On, Real-Time Monitoring </span> <br />
Devices will track a wide range of vital signs like heart rate variability, blood oxygen levels, hydration, glucose, body temperature, ECG, sleep patterns, and respiratory rate—all in real-time and with clinical-grade accuracy.
<br />
⚫<span className="font-semibold">Personalized Health Insights via AI</span>  <br />
Using advanced machine learning models, data from wearables will be analyzed to generate personalized insights. Over time, the device learns the user’s baseline health, identifying trends or deviations to offer tailored suggestions and alerts.
<br />
⚫<span className="font-semibold">Preventive, Not Reactive Care</span>  <br />
Instead of waiting for health issues to escalate, these wearables will help users and doctors predict and prevent conditions like heart attacks, strokes, or diabetic complications by identifying warning signs early.
<br />
⚫<span className="font-semibold">Data Privacy and Ethical AI</span>  <br />
We’re committed to ensuring that health data is secure, transparent, and used ethically—giving users full control over who can access their information.
      </motion.p>
      
    </section>
  );
}

