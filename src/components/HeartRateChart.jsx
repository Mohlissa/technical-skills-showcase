import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const sampleData = [
  { time: "10:00", bpm: 70 },
  { time: "10:05", bpm: 75 },
  { time: "10:10", bpm: 80 },
  { time: "10:15", bpm: 120 }, // Outlier
];

export default function HeartRateChart() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-xl p-4 shadow-md mt-6">
      <h3 className="text-lg font-bold mb-2">Heart Rate Over Time</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={sampleData}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="bpm" stroke="#eab308" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
