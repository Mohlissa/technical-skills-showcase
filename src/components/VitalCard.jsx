import { motion } from "framer-motion";

export default function VitalCard({ label, value, unit, danger }) {
  const currentTime = new Date().toLocaleTimeString(); // For "last updated"

  return (
    <motion.div
      className={`p-4 rounded-2xl shadow-md text-center border-2 transition-all
        ${danger 
          ? "bg-red-100 dark:bg-red-900 border-red-500 text-red-800 dark:text-red-200" 
          : "bg-white dark:bg-gray-800 border-green-500 text-gray-800 dark:text-gray-100"}`}
      whileHover={{ scale: 1.03 }}
    >
      <div className="flex justify-center items-center gap-2 mb-1">
        <h3 className="text-lg font-semibold">{label}</h3>
        <span
          className={`h-3 w-3 rounded-full ${danger ? "bg-red-500" : "bg-green-500"}`}
        ></span>
      </div>

      <p className="text-2xl font-bold">
        {value} {unit}
      </p>

      {danger && (
        <p className="text-sm text-red-600 dark:text-red-300 mt-1">
          ⚠️ Out of normal range
        </p>
      )}

      <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
        Last updated: {currentTime}
      </p>
    </motion.div>
  );
}
