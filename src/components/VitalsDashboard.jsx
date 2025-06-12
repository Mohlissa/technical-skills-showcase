import Header from "./Header";
import Hero from "./Hero";
import Bio from "./Bio";
import VitalCard from "./VitalCard";
import useVitals from "../hooks/useVitals";
import HeartRateChart from "./HeartRateChart";
import HealthTips from "./HealthTips";
import DarkModeToggle from "./DarkModeToggle";

export default function VitalsDashboard() {
  const { heartRate, bloodOxygen, temperature } = useVitals();
  const isDanger =
    heartRate < 60 || heartRate > 100 ||
    bloodOxygen < 95 ||
    temperature < 36.1 || temperature > 37.2;

  return (
    <div className="p-6">
      {isDanger && (
        <div className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 p-4 rounded-xl shadow mb-4 text-center font-semibold">

          ⚠️ Warning: One or more vitals are out of normal range.
        </div>
      )}
      <Header />
      <Hero />
      <Bio />
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        <VitalCard
          label="Heart Rate"
          value={heartRate}
          unit="bpm"
          danger={heartRate < 60 || heartRate > 100}
        />
        <VitalCard
          label="Blood Oxygen"
          value={bloodOxygen.toFixed(1)}
          unit="%"
          danger={bloodOxygen < 95}
        />
        <VitalCard
          label="Temperature"
          value={temperature.toFixed(1)}
          unit="°C"
          danger={temperature < 36.1 || temperature > 37.2}
        />
      </div>

      <HeartRateChart />
      <HealthTips />
      <DarkModeToggle />
    </div>
  );
}
