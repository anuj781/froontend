import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      // 🔹 Here is your fetch request
      const res = await fetch(import.meta.env.VITE_API_URL + "/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const text = await res.text();         // safely get raw response
      const data = text ? JSON.parse(text) : {};

      if (!res.ok) {
        alert(data.message || "Invalid credentials");
        return;
      }

      localStorage.setItem("token", data.token);
      navigate("/admin");  // redirect to admin panel
    } catch (err) {
      console.error("Login error:", err);
      alert("Server error");
    }
  };

  return (
    <div className="page">
      <h2>Admin Login</h2>
      <div className="form glass">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}
