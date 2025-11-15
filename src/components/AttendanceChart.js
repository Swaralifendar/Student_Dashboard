import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Filler } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Filler);

export default function AttendanceChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Attendance %",
        data: [90, 92, 93, 89, 95],
        borderColor: "#6366F1",
        backgroundColor: "rgba(99, 102, 241, 0.2)",
        fill: true,
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 5,
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow max-w-5xl mx-auto">
  <h3 className="text-xl font-semibold dark:text-white mb-4">Attendance Trend</h3>
  <div className="h-72">
    <Line data={data} />
  </div>
</div>
  );
}





