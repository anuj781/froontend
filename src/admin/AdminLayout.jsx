import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import { useState } from "react";

export default function AdminLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="admin-container">
      {/* Mobile Top Bar */}
      <header className="admin-topbar glass">
        <button className="menu-btn" onClick={() => setOpen(!open)}>
          ☰
        </button>
        <h3>Admin Panel</h3>
      </header>

      {/* Sidebar */}
      <AdminSidebar open={open} setOpen={setOpen} />

      {/* Content */}
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
}
