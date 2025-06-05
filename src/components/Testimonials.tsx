export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header fade-in">
          <h2>What Our Clients Say</h2>
          <p>
            Hear from businesses who have experienced the NovaEdge difference
            and achieved remarkable results with our AI-powered solutions.
          </p>
        </div>
        <div className="testimonial-grid">
          {[
            {
              text: "NovaEdge transformed our online presence with their AI-driven approach. Our engagement rates have skyrocketed, and the process was seamless! Their team is knowledgeable and truly innovative.",
              name: "Jane Doe",
              role: "CEO, Tech Solutions Inc.",
              avatar: "JD",
            },
            {
              text: "The mobile app developed by NovaEdge exceeded our expectations. The AI features are incredibly intuitive and have significantly improved user satisfaction. Highly recommend their services!",
              name: "Mark Smith",
              role: "Founder, Innovate App Co.",
              avatar: "MS",
            },
            {
              text: "Working with NovaEdge on our digital marketing was a game-changer. Their AI-powered strategies delivered measurable results and a great ROI. We've seen significant growth.",
              name: "Alice Brown",
              role: "Marketing Director, Growth Hub",
              avatar: "AL",
            },
          ].map(({ text, name, role, avatar }) => (
            <div className="testimonial-card fade-in" key={name}>
              <p className="testimonial-text">"{text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{avatar}</div>
                <div className="author-info">
                  <h4>{name}</h4>
                  <span>{role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
