import testimonial1 from "../assets/images/testimonial1.webp";

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Members Say</h2>

      <div className="testimonial-card">
        <img src={testimonial1} alt="client testimonial" />

        <p>
          "Amazing gym with excellent trainers. I achieved my fitness goals in just 4 months with consistent coaching and supportive programming."
        </p>

        <h4>Michael Smith</h4>
        <span>Verified Member</span>
      </div>
    </section>
  );
}

export default Testimonials;