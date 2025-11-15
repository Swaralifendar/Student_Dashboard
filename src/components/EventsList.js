import { events } from "../data/events";
import { FiCalendar } from "react-icons/fi";

export default function EventsList() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
      <h3 className="text-xl font-semibold dark:text-white mb-4">Upcoming Events</h3>

      <div className="space-y-4">
        {events.map((event, i) => (
          <div key={i} className="flex items-center space-x-3 border-l-4 border-indigo-500 pl-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
            <FiCalendar className="text-indigo-600 dark:text-indigo-400 text-xl" />
            <p className="text-gray-700 dark:text-gray-300">{event}</p>
          </div>
        ))}
      </div>
    </div>
  );
}











