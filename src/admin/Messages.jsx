import { useEffect, useState } from "react";

export default function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        import.meta.env.VITE_API_URL + "/messages",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (!res.ok) throw new Error("Unauthorized");

      const data = await res.json();
      setMessages(data);
    } catch (err) {
      console.error("❌ Fetch messages error:", err.message);
    }
  };

  const deleteMessage = async (id) => {
    const token = localStorage.getItem("token");

    await fetch(
      import.meta.env.VITE_API_URL + "/messages/" + id,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    fetchMessages();
  };

  return (
    <section className="admin-page">
      <h2 className="admin-title">📩 Contact Messages</h2>

      {messages.length === 0 ? (
        <p className="empty-text">No messages found</p>
      ) : (
        <div className="messages-grid">
          {messages.map(msg => (
            <div key={msg._id} className="message-card glass">
              <div className="message-header">
                <h4>{msg.name}</h4>
                <button
                  className="delete-btn"
                  onClick={() => deleteMessage(msg._id)}
                >
                  ✖
                </button>
              </div>

              <p className="email">{msg.email}</p>
              <p className="message-text">{msg.message}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
