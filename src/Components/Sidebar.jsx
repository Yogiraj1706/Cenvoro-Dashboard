import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Sidebar({ isOpen, closeSidebar }) {

  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="profile">
        <div className="avatar">
          <img src="/LOGO.png" alt="Company Logo" />
        </div>
        <h3>CENVORO</h3>
      </div>

      <hr />

      <ul className="menu">
        {/* Colleges */}
        <li>
          {/* Parent row */}
          <div onClick={() => toggleMenu("colleges")}>
            <i className="fa-solid fa-building-columns menu-icon"></i>

            {/* Prevent toggle when clicking link */}
            <NavLink
              to="/colleges"
              // onClick={(e) => {
              //   e.stopPropagation();   // prevents dropdown toggle
              //   closeSidebar();        // closes off-canvas sidebar
              // }}
            >
              Colleges
            </NavLink>
          </div>

          {/* Dropdown */}
          <ul className={`dropdown ${openMenu === "colleges" ? "show" : ""}`}>
            <li>
              <NavLink to="/colleges/top" onClick={closeSidebar}>
                Top Colleges
              </NavLink>
            </li>
            <li>
              <NavLink to="/colleges/admissions" onClick={closeSidebar}>
                Admissions
              </NavLink>
            </li>
            <li>
              <NavLink to="/colleges/courses" onClick={closeSidebar}>
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink to="/colleges/placements" onClick={closeSidebar}>
                Placements
              </NavLink>
            </li>
          </ul>
        </li>

        {/* Corporates */}
        <li>
          <div onClick={() => toggleMenu("corporates")}>
            <i className="fa-solid fa-briefcase menu-icon"></i>
            <NavLink to="/corporates">Corporates</NavLink>
          </div>
          <ul className={`dropdown ${openMenu === "corporates" ? "show" : ""}`}>
            <li><NavLink to="/corporates/hiring">Hiring</NavLink></li>
            <li><NavLink to="/corporates/internships">Internships</NavLink></li>
            <li><NavLink to="/corporates/partners">Partners</NavLink></li>
            <li><NavLink to="/corporates/careers">Careers</NavLink></li>
          </ul>
        </li>

        {/* Students */}
        <li>
          <div onClick={() => toggleMenu("students")}>
            <i className="fa-solid fa-user-graduate menu-icon"></i>
            <NavLink to="/students">Students</NavLink>
          </div>
          <ul className={`dropdown ${openMenu === "students" ? "show" : ""}`}>
            <li><NavLink to="/students/dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/students/profile">Profile</NavLink></li>
            <li><NavLink to="/students/applied-jobs">Applied Jobs</NavLink></li>
            <li><NavLink to="/students/certificates">Certificates</NavLink></li>
          </ul>
        </li>

        {/* Jobs */}
        <li>
          <div onClick={() => toggleMenu("jobs")}>
            <i className="fa-solid fa-clipboard-list menu-icon"></i>
            <NavLink to="/jobs">Jobs</NavLink>
          </div>
          <ul className={`dropdown ${openMenu === "jobs" ? "show" : ""}`}>
            <li><NavLink to="/jobs/dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/jobs/profile">Profile</NavLink></li>
            <li><NavLink to="/jobs/applied-jobs">Applied Jobs</NavLink></li>
            <li><NavLink to="/jobs/certificates">Certificates</NavLink></li>
          </ul>
        </li>

        {/* Accounts */}
        <li>
          <div onClick={() => toggleMenu("accounts")}>
            <i className="fa-solid fa-user-shield menu-icon"></i>
            <NavLink to="/accounts">Accounts</NavLink>
          </div>
          <ul className={`dropdown ${openMenu === "accounts" ? "show" : ""}`}>
            <li><NavLink to="/accounts/dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/accounts/profile">Profile</NavLink></li>
            <li><NavLink to="/accounts/applied-jobs">Applied Jobs</NavLink></li>
            <li><NavLink to="/accounts/certificates">Certificates</NavLink></li>
          </ul>
        </li>
      </ul>
    </aside>
  );
}
