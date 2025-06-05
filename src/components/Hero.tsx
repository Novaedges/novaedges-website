export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text slide-in-left">
            <h1>
              Transforming Digital Experiences with
              <span className="highlight">AI-Powered Innovation</span>
            </h1>
            <p>
              Cutting-edge website development, mobile app creation, and digital
              marketing solutions powered by artificial intelligence to
              accelerate your business growth.
            </p>
            <div className="hero-buttons">
              <a href="#services" className="cta-button">
                Explore Services
              </a>
              <a href="#about" className="btn-secondary">
                Learn More
              </a>
            </div>
            <div className="partners">
              <span>Trusted AI & Tech Partners</span>
              <div className="partner-logos">
                <div className="partner-logo">AWS</div>
                <div className="partner-logo">GCP</div>
                <div className="partner-logo">AZ</div>
                <div className="partner-logo">OAI</div>
              </div>
            </div>
          </div>
          <div className="hero-visual slide-in-right">
            <div className="hero-card">
              <h3 style={{ color: "#667eea", marginBottom: 15 }}>
                AI-Powered Solutions
              </h3>
              <p style={{ color: "#666", marginBottom: 20 }}>
                Next-generation digital products built with intelligence
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  marginBottom: 15,
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    background: "linear-gradient(135deg, #667eea, #764ba2)",
                    color: "white",
                    padding: "8px 16px",
                    borderRadius: 20,
                    fontSize: "0.9rem",
                  }}
                >
                  Web Development
                </div>
                <div
                  style={{
                    background: "linear-gradient(135deg, #667eea, #764ba2)",
                    color: "white",
                    padding: "8px 16px",
                    borderRadius: 20,
                    fontSize: "0.9rem",
                  }}
                >
                  App Development
                </div>
              </div>
              <div
                style={{
                  background: "#f8faff",
                  padding: 15,
                  borderRadius: 10,
                  marginTop: 20,
                }}
              >
                <div
                  style={{ color: "#667eea", fontWeight: 600, marginBottom: 5 }}
                >
                  ⚡ Performance Optimized
                </div>
                <div style={{ color: "#666", fontSize: "0.9rem" }}>
                  AI-enhanced speed and efficiency
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
