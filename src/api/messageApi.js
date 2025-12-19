const API_URL = import.meta.env.VITE_API_URL + "/messages";

export async function sendMessage(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    throw new Error("Failed to send message");
  }

  return res.json();
}

export async function getMessages() {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch messages");
  }

  return res.json();
}
