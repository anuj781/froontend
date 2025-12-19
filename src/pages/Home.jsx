import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero">
      <h1>We Build Scalable Web Solutions</h1>
      <p>Frontend & Backend Development for Startups</p>
      <Link to="/contact" className="btn">Get Started</Link>
    </section>
  );
}
