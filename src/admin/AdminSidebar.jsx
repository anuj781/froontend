import { NavLink, useNavigate } from "react-router-dom";

export default function AdminSidebar({ open, setOpen }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  return (
    <aside className={`admin-sidebar ${open ? "show" : ""}`}>

      <h3>Admin</h3>

      <NavLink to="/admin" onClick={() => setOpen(false)}>
        Dashboard
      </NavLink>

      <NavLink to="/admin/messages" onClick={() => setOpen(false)}>
        Messages
      </NavLink>

      <NavLink to="/admin/services" onClick={() => setOpen(false)}>
        Services
      </NavLink>

      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </aside>
  );
}
