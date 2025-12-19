import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import { useState } from "react";

export default function AdminLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="admin-layout">
      {/* Mobile Top Bar */}
      <header className="admin-topbar">
        <button
          className="menu-btn"
          onClick={() => setOpen(prev => !prev)}
        >
          ☰
        </button>
        <h3>Admin Panel</h3>
      </header>

      {/* Sidebar */}
      <AdminSidebar open={open} setOpen={setOpen} />

      {/* Main Content */}
      <main className="admin-content" onClick={() => setOpen(false)}>
        <Outlet />
      </main>
    </div>
  );
}
