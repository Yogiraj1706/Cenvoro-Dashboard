import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Compoents/Sidebar";
import Students from "./Pages/Students";
import Corporates from "./Pages/Corporates";
import Colleges from "./Pages/Colleges";
import Jobs from "./Pages/Jobs";
import Accounts from "./Pages/Accounts";
import "./Styles/dashboard.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="dashboard">
        {/* Overlay */}
        {sidebarOpen && (
          <div
            className="overlay"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <Sidebar
          isOpen={sidebarOpen}
          closeSidebar={() => setSidebarOpen(false)}
        />

        {/* Main */}
        <div className="main-content">
          <div
            className="hamburger"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </div>

          <Routes>
            <Route path="/" element={<Students />} />
            <Route path="/students" element={<Students />} />
            <Route path="/corporates" element={<Corporates />} />
            <Route path="/colleges" element={<Colleges />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/accounts" element={<Accounts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
