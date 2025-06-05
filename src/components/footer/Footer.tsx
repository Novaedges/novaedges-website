export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="logo" style={{ marginBottom: 20, fontSize: 28 }}>
              NovaEdge
            </div>
            <p>
              AI-Powered Digital Solutions to accelerate your business growth.
              We build intelligent websites, mobile apps, and marketing
              strategies tailored to your unique needs.
            </p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#industries">Industries</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#">Blog (Coming Soon)</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Our Services</h3>
            <ul>
              <li>
                <a href="#services">AI Website Development</a>
              </li>
              <li>
                <a href="#services">Smart Mobile Apps</a>
              </li>
              <li>
                <a href="#services">Intelligent Marketing</a>
              </li>
              <li>
                <a href="#">AI Chatbot Solutions</a>
              </li>
              <li>
                <a href="#">Data Analytics & AI</a>
              </li>
              <li>
                <a href="#">AI Consulting</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>
              Email:
              <a
                href="mailto:info@novaedge.com"
                style={{ color: "#ccc", textDecoration: "none" }}
              >
                {" "}
                info@novaedge.com
              </a>
            </p>
            <p>
              Phone:
              <a
                href="tel:+12345678900"
                style={{ color: "#ccc", textDecoration: "none" }}
              >
                {" "}
                +1 234 567 8900
              </a>
            </p>
            <p>123 Innovation Drive, Tech City, TX 75001</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2025 NovaEdge. All Rights Reserved. Innovating the Future
            with AI.
          </p>
        </div>
      </div>
    </footer>
  );
}
