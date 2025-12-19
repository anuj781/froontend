export default function ServiceCard({ title, description }) {
  return (
    <div className="card glass">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
