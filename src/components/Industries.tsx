export default function Industries() {
  return (
    <section className="industries" id="industries">
      <div className="container">
        <div className="section-header fade-in">
          <h2>NovaEdge AI Solutions for Every Industry</h2>
          <p>
            Tailored digital solutions across diverse sectors, powered by
            industry-specific AI intelligence
          </p>
        </div>
        <div className="industries-grid">
          {[
            "Manufacturing",
            "E-commerce",
            "Finance",
            "Healthcare",
            "Education",
            "Real Estate",
          ].map((industry, i) => (
            <div className="industry-item fade-in" key={industry}>
              <div className="industry-icon">
                {["🏭", "🛒", "🏦", "🏥", "🎓", "🏢"][i]}
              </div>
              <h3>{industry}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
