export default function ServicesAdmin() {
  return (
    <div className="admin-page">
      <h2>Manage Services</h2>

      <div className="admin-card glass">
        <p>Frontend Development</p>
        <button>Edit</button>
        <button>Delete</button>
      </div>

      <div className="admin-card glass">
        <p>Backend Development</p>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}
