import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState} from "react";


import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Login from "./Components/Login";

import Students from "./Pages/Students";
import Corporates from "./Pages/Corporates";
import Colleges from "./Pages/Colleges";
import Jobs from "./Pages/Jobs";
import Accounts from "./Pages/Accounts";

import "./Styles/dashboard.css";

/* ===== Protected Route ===== */
function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <Router>
      <Routes>
        {/* ===== LOGIN ===== */}
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" replace /> : <Login />}
        />

        {/* ===== DASHBOARD (PROTECTED) ===== */}
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
                  <Header />

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
          element={<Navigate to={isLoggedIn ? "/" : "/login"} replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
