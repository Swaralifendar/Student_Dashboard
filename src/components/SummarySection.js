import SummaryCard from "./SummaryCard";
import { FiBookOpen, FiAward, FiBarChart2, FiCheckCircle } from "react-icons/fi";

export default function SummarySection() {
  return (
    <div className="grid md:grid-cols-4 gap-6">
      <SummaryCard title="Attendance" value="92%" icon={<FiBarChart2 />} color="from-green-400 to-emerald-500" />
      <SummaryCard title="CGPA" value="9.3" icon={<FiAward />} color="from-blue-400 to-indigo-500" />
      <SummaryCard title="Credits" value="85" icon={<FiBookOpen />} color="from-purple-400 to-fuchsia-500" />
      <SummaryCard title="Exams Cleared" value="22" icon={<FiCheckCircle />} color="from-orange-400 to-yellow-500" />
    </div>
  );
}


