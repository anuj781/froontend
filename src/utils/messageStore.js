const KEY = "contact_messages";

export const saveMessage = (message) => {
  const messages = JSON.parse(localStorage.getItem(KEY)) || [];
  messages.unshift({ ...message, id: Date.now() });
  localStorage.setItem(KEY, JSON.stringify(messages));
};

export const getMessages = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const deleteMessage = (id) => {
  const messages = getMessages().filter(msg => msg.id !== id);
  localStorage.setItem(KEY, JSON.stringify(messages));
};
