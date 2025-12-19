const API_BASE = import.meta.env.VITE_API_URL;

/* ✅ SEND MESSAGE (CONTACT FORM) */
export const saveMessage = async (message) => {
  const res = await fetch(`${API_BASE}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(message)
  });

  if (!res.ok) {
    throw new Error("Failed to send message");
  }

  return res.json();
};

/* ✅ GET MESSAGES (ADMIN PANEL) */
export const getMessages = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_BASE}/messages`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (!res.ok) {
    throw new Error("Unauthorized");
  }

  return res.json();
};

/* ✅ DELETE MESSAGE (ADMIN PANEL) */
export const deleteMessage = async (id) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_BASE}/messages/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (!res.ok) {
    throw new Error("Delete failed");
  }

  return res.json();
};
