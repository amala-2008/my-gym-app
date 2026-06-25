import trainer1 from "../assets/images/trainer1.avif";
import trainer2 from "../assets/images/trainer2.webp";

function Trainers() {
  return (
    <section className="trainers">
      <h2>Our Trainers</h2>

      <div className="trainer-container">

        <div className="trainer-card">
          <img src={trainer1} alt="trainer" />
          <h3>John Carter</h3>
          <p>Strength Coach</p>
        </div>

        <div className="trainer-card">
          <img src={trainer2} alt="trainer" />
          <h3>Emma Watson</h3>
          <p>Fitness Expert</p>
        </div>

      </div>
    </section>
  );
}

export default Trainers;