import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch(
        import.meta.env.VITE_API_URL + "/messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
        }
      );

      if (!res.ok) throw new Error();

      setSuccess("Message sent successfully 🚀");
      setForm({ name: "", email: "", message: "" });

    } catch {
      setError("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="page">
      <h2>Contact Us</h2>

      <form className="form glass" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && <p style={{ color: "#7cffc4" }}>{success}</p>}
        {error && <p style={{ color: "tomato" }}>{error}</p>}
      </form>
    </section>
  );
}
