import { useNavigate } from "react-router-dom";
import "./header.css"

export default function Header() {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="dashboard-header">
  <span className="welcome-text">
    Welcome, <strong>{userName}</strong>
  </span>

  <button className="logout-btn" onClick={handleLogout}>
    Logout
  </button>
</div>

  );
}
