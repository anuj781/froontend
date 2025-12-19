import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Route Protection */
import ProtectedAdmin from "./admin/ProtectedAdmin";
import AdminLogin from "./admin/AdminLogin";

/* Public Components */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* Public Pages */
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

/* Admin Panel */
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/Dashboard";
import ServicesAdmin from "./admin/ServicesAdmin";
import Messages from "./admin/Messages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= PUBLIC WEBSITE ================= */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />

        <Route
          path="/services"
          element={
            <>
              <Navbar />
              <Services />
              <Footer />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* ================= ADMIN LOGIN ================= */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* ================= PROTECTED ADMIN PANEL ================= */}
        <Route
          path="/admin"
          element={
            <ProtectedAdmin>
              <AdminLayout />
            </ProtectedAdmin>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="services" element={<ServicesAdmin />} />
          <Route path="messages" element={<Messages />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
