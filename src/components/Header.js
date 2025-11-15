import React from "react";
import profilePic from "../assets/Profile_Photo_icon.jpg";

export default function Header({ darkMode, setDarkMode, time }) {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-xl shadow-md flex items-center justify-between">
      
      {/* Profile Section */}
      <div className="flex items-center space-x-4">
        <img
          src={profilePic}
          className="w-16 h-16 rounded-full border-4 border-white shadow-md"
          alt="profile"
        />
        <div>
          <h2 className="text-2xl font-bold">Swarali Fendar</h2>
          <p className="text-sm text-gray-200">B.Tech Student • IT Department</p>
        </div>
      </div>

      {/* Right: Clock + Dark Mode */}
      <div className="flex items-center space-x-6">
        
        {/* Clock */}
        <p className="text-lg font-semibold">{time.toLocaleTimeString()}</p>

        {/* Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 bg-white text-black rounded-lg shadow hover:bg-gray-200"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

      </div>
    </div>
  );
}












// import profilePic from "../assets/Profile_Photo_icon.jpg";
// export default function Header() {
//   return (
//     <div className="header">
//       <img src={profilePic} alt="profile" />
//       <div>
//         <h2>Swarali Fendar</h2>
//         <p>B.Tech Student • IT Department</p>
//       </div>
//     </div>
//   );
// }
