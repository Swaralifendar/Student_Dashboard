export default function SummaryCard({ title, value, icon, color }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transform transition cursor-pointer">
      <div className={`bg-gradient-to-r ${color} text-white w-12 h-12 flex items-center justify-center rounded-full text-xl mb-3`}>
        {icon}
      </div>
      <h3 className="text-gray-600 dark:text-gray-300 text-sm">{title}</h3>
      <h2 className="text-3xl font-bold dark:text-white">{value}</h2>
    </div>
  );
}










// export default function SummaryCard({ title, value }) {
//   return (
//     <div className="card">
//       <h3>{title}</h3>
//       <h2>{value}</h2>
//     </div>
//   );
// }
