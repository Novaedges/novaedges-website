export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header fade-in">
          <h2>AI-Enhanced Digital Solutions</h2>
          <p>
            Comprehensive suite of intelligent digital services designed to
            elevate your business presence and drive exceptional results
          </p>
        </div>
        <div className="services-grid">
          {[
            {
              icon: "🌐",
              title: "AI-Powered Website Development",
              desc: "Revolutionary web development leveraging AI for enhanced user experiences, optimized performance, and intelligent automation.",
              features: [
                "Intelligent UI/UX Design",
                "AI-Optimized Performance",
                "Smart Content Management",
                "Automated Testing & Deployment",
              ],
            },
            {
              icon: "📱",
              title: "Smart Mobile App Development",
              desc: "Next-generation mobile applications with AI-driven features for iOS and Android platforms that adapt to user behavior.",
              features: [
                "Cross-Platform Development",
                "AI-Enhanced User Experience",
                "Intelligent Push Notifications",
                "Predictive Analytics Integration",
              ],
            },
            {
              icon: "🚀",
              title: "Intelligent Digital Marketing",
              desc: "Data-driven marketing strategies powered by AI algorithms to maximize ROI and drive targeted customer engagement.",
              features: [
                "AI-Driven Campaign Optimization",
                "Predictive Customer Analytics",
                "Automated Content Generation",
                "Real-time Performance Insights",
              ],
            },
          ].map(({ icon, title, desc, features }) => (
            <div className="service-card fade-in" key={title}>
              <div className="service-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <ul className="service-features">
                {features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href="#contact" className="cta-button">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
