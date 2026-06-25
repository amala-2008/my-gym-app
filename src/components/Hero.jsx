import heroImg from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p>Premium Fitness Club</p>
        <h1>Build strength, burn fat, and feel unstoppable.</h1>
        <p>
          Experience elite coaching, performance-driven training,
          and a high-energy environment designed to elevate every workout.
        </p>
      </div>

      <div className="hero-image">
        <img src={heroImg} alt="gym workout scene" />
      </div>
    </section>
  );
}

export default Hero;