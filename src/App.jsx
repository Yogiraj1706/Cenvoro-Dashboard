import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Header from "./Compoents/header";
import Sidebar from "./Compoents/Sidebar";
import Login from "./Compoents/Login";
import Students from "./Pages/Students";
import Corporates from "./Pages/Corporates";
import Colleges from "./Pages/Colleges";
import Jobs from "./Pages/Jobs";
import Accounts from "./Pages/Accounts";

import "./Styles/dashboard.css";

/* Protected Route Component */
function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn ? children : <Navigate to="/login" />;
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (

    <Router>
      <Routes>
        {/* ===== LOGIN PAGE ===== */}
        <Route path="/login" element={<Login />} />

        {/* ===== DASHBOARD (Protected) ===== */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
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

                {/* Main Content */}
                <div className="main-content">
                  {/* Dashboard Header */}
                  <Header />

                  {/* Hamburger */}
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
            </ProtectedRoute>
          }
        />

      {/* ===== FALLBACK ===== */}
      <Route
        path="*"
        element={<Navigate to={isLoggedIn ? "/" : "/login"} />}
      />
    </Routes>
    </Router >
  );
}

export default App;
