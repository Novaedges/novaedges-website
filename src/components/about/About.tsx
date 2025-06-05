export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text slide-in-left">
            <h2>Experience AI Solutions Built to Transform</h2>
            <p>
              NovaEdge integrates cutting-edge artificial intelligence into our
              comprehensive digital platform, enabling seamless collaboration
              and innovation across your organization to address challenges and
              deliver exceptional solutions.
            </p>
            <p>
              Our AI-powered approach ensures every project is optimized for
              performance, user engagement, and business growth, setting new
              standards in digital excellence.
            </p>
            <div className="about-features">
              {[
                { icon: "🧠", label: "AI-Driven Intelligence" },
                { icon: "🔒", label: "Enterprise Security" },
                { icon: "⚡", label: "Smart Automation" },
                { icon: "📊", label: "Analytics & Insights" },
              ].map(({ icon, label }) => (
                <div className="feature-item" key={label}>
                  <div className="feature-icon">{icon}</div>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-visual slide-in-right">
            <div className="stats-grid">
              {[
                ["500+", "Projects Delivered"],
                ["98%", "Client Satisfaction"],
                ["150+", "Happy Clients"],
                ["5+", "Years Experience"],
              ].map(([num, label]) => (
                <div className="stat-card" key={label}>
                  <div className="stat-number">{num}</div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
