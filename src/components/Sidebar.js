import { FiHome, FiBook, FiUser, FiSettings } from "react-icons/fi";

export default function Sidebar({ activePage, setActivePage }) {
  return (
    <div className="w-64 h-screen bg-white dark:bg-gray-800 shadow-xl p-6 space-y-8">
      <h2 className="text-2xl font-bold dark:text-white">Dashboard</h2>

      <nav className="space-y-4">

        <SidebarItem
          icon={<FiHome />}
          label="Home"
          active={activePage === "home"}
          onClick={() => setActivePage("home")}
        />

        <SidebarItem
          icon={<FiBook />}
          label="Courses"
          active={activePage === "courses"}
          onClick={() => setActivePage("courses")}
        />

        <SidebarItem
          icon={<FiUser />}
          label="Profile"
          active={activePage === "profile"}
          onClick={() => setActivePage("profile")}
        />

        <SidebarItem
          icon={<FiSettings />}
          label="Settings"
          active={activePage === "settings"}
          onClick={() => setActivePage("settings")}
        />

      </nav>
    </div>
  );
}

// ---------- Sidebar Item Component ----------
function SidebarItem({ icon, label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center space-x-3 cursor-pointer text-lg p-2 rounded-lg transition 
        ${active ? "bg-indigo-600 text-white" : "text-gray-700 dark:text-gray-300 hover:bg-gray-700 hover:text-white"}
      `}
    >
      <div className="text-xl">{icon}</div>
      <p>{label}</p>
    </div>
  );
}
