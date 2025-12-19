import { NavLink, useNavigate } from "react-router-dom";

export default function AdminSidebar({ open, setOpen }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  const closeOnMobile = () => {
    if (window.innerWidth <= 768) {
      setOpen(false);
    }
  };

  return (
    <aside className={`admin-sidebar ${open ? "show" : ""}`}>
      <h3>Admin</h3>

      <NavLink to="/admin" onClick={closeOnMobile}>
        Dashboard
      </NavLink>

      <NavLink to="/admin/messages" onClick={closeOnMobile}>
        Messages
      </NavLink>

      <NavLink to="/admin/services" onClick={closeOnMobile}>
        Services
      </NavLink>

      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </aside>
  );
}
