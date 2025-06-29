import React from "react";
import "./ACTOnePage.css";

const plans = [
  {
    title: "Basic",
    price: "$99",
    features: ["Website setup", "1-month support", "Email integration"],
  },
  {
    title: "Standard",
    price: "$299",
    features: ["Custom design", "eCommerce setup", "3-month support"],
  },
  {
    title: "Elite",
    price: "$599",
    features: ["Full-stack solution", "Advanced integrations", "Priority support"],
  },
];

export default function ACTOnePage() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="home">
        <h1 className="animated-heading">Welcome to <span className="highlight">ACT</span></h1>
        <p className="fade-in">
          Avyukt Core Technology — your trusted partner for scalable, custom software, digital commerce, and enterprise-grade solutions.
        </p>
      </section>

      {/* Solutions Section */}
      <section className="solutions">
        <h2 className="section-title">What We Offer</h2>
        <ul className="solutions-list">
          <li>🔧 Custom software development tailored to unique business goals</li>
          <li>🛒 Flexible eCommerce platforms — from starter kits to enterprise stores</li>
          <li>🚀 Complete online store setup — Basic to Elite execution</li>
        </ul>
      </section>

      {/* Pricing Section */}
      <section className="pricing">
        <h2 className="section-title">Choose a Plan</h2>
        <div className="plan-cards">
          {plans.map((plan) => (
            <div key={plan.title} className="card zoom">
              <h3>{plan.title}</h3>
              <p className="price">{plan.price}</p>
              <ul>
                {plan.features.map((f, idx) => (
                  <li key={idx}>✔️ {f}</li>
                ))}
              </ul>
              <button className="btn">Get Started</button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section className="faqs">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-container">
          <div className="faq-item slide-in">
            <h4>Which industries do you specialize in?</h4>
            <p>We support a broad range — from retail and education to healthcare and tech startups.</p>
          </div>
          <div className="faq-item slide-in">
            <h4>What’s the typical project duration?</h4>
            <p>Our timelines range from 2 weeks to 2 months, depending on project scope and complexity.</p>
          </div>
          <div className="faq-item slide-in">
            <h4>Is post-launch support included?</h4>
            <p>Absolutely. All plans include tiered support to ensure long-term success and stability.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2 className="section-title">Contact Our Team</h2>
        <form className="contact-form fade-in">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Tell us about your project..." rows="4" required></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Avyukt Core Technology. All rights reserved.</p>
        <p className="creator">✨ Built with passion by <strong>Rishab Tripathi</strong>.</p>
      </footer>
    </div>
  );
}
