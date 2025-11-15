import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SummarySection from "./components/SummarySection";
import AttendanceChart from "./components/AttendanceChart";
import EventsList from "./components/EventsList";
import Sidebar from "./components/Sidebar";


function App() {
  const [activePage, setActivePage] = useState("home");
  const [darkMode, setDarkMode] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={darkMode ? "dark bg-gray-900 min-h-screen" : "bg-gray-100 min-h-screen"}>
      <div className="flex">

        {/* Sidebar */}
        <Sidebar activePage={activePage} setActivePage={setActivePage} />


        {/* Main Content */}
        <div className="flex-1 p-6 space-y-6">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} time={time} />
          {activePage === "home" && (
  <>
    <SummarySection />
    <AttendanceChart />
    <EventsList />
  </>
)}

{activePage === "courses" && (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow text-white text-xl">
    Courses Page (Future Implementation)
  </div>
)}

{activePage === "profile" && (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow text-white text-xl">
    Profile Page (Future Implementation)
  </div>
)}

{activePage === "settings" && (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow text-white text-xl">
    Settings Page (Customize dashboard settings)
  </div>
)}

        </div>

      </div>
    </div>
  );
}

export default App;














// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
