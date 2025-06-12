// src/components/Dashboard.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default function Dashboard() {
  const [data, setData] = useState({
    heartRate: 72,
    spo2: 98,
    temperature: 36.6,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData({
        heartRate: getRandom(65, 110),
        spo2: getRandom(94, 100),
        temperature: (getRandom(360, 380) / 10).toFixed(1),
      });
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-yellow-100 py-12 px-4 md:px-20 text-gray-900">
       <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-blue-700"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Live Health Data Dashboard
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <VitalCard label="Heart Rate" value={`${data.heartRate} bpm`} danger={data.heartRate > 100 || data.heartRate < 60} />
          <VitalCard label="SpO₂ Level" value={`${data.spo2}%`} danger={data.spo2 < 95} />
          <VitalCard label="Body Temp" value={`${data.temperature}°C`} danger={data.temperature > 37.5} />
        </div>
      </div>
    </section>
  );
}

function VitalCard({ label, value, danger }) {
  return (
    <motion.div
      className={`rounded-xl p-6 shadow-md border-l-4 ${
        danger ? "border-red-500 bg-red-100" : "border-green-500 bg-white"
      }`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-semibold mb-2">{label}</h3>
      <p className="text-3xl font-bold">{value}</p>
      {danger && (
        <p className="text-sm text-red-600 mt-1">⚠️ Out of normal range</p>
      )}
    </motion.div>
  );
}
