import ServiceCard from "../components/ServiceCard";

export default function Services() {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="grid">
        <ServiceCard
          title="Frontend Development"
          description="React, UI/UX, responsive websites"
        />
        <ServiceCard
          title="Backend Development"
          description="Node.js, Express, APIs, Databases"
        />
        <ServiceCard
          title="Full Stack Solutions"
          description="Complete MERN stack applications"
        />
      </div>
    </section>
  );
}
