/*
import { Link } from "react-router-dom";
function LandingPage() {
  return (
    <div className="landing-container">

      <nav className="navbar">
        <h2>LDMS</h2>

        <Link to="/login">
          <button className="login-btn">
            Login
          </button>
        </Link>
      </nav>

      <section className="hero">

        <h1>
          Logistics & Dispatch
          Management System
        </h1>

        <p>
          Manage Orders, Drivers,
          Vehicles and Dispatches from
          one centralized platform.
        </p>

        <Link to="/login">
          <button className="hero-btn">
            Get Started
          </button>
        </Link>
      </section>

      <section className="features">

        <div className="card">
          <h3>Order Management</h3>
          <p>
            Track and manage shipment
            orders efficiently.
          </p>
        </div>

        <div className="card">
          <h3>Driver Management</h3>
          <p>
            Manage all delivery personnel
            and assignments.
          </p>
        </div>

        <div className="card">
          <h3>Vehicle Tracking</h3>
          <p>
            Monitor vehicle allocation
            and dispatch activities.
          </p>
        </div>

      </section>

    </div>
  );
}

export default LandingPage;
*/

import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing-page">

      {/* Navbar */}

      <nav className="navbar">

        <div className="logo">
          <a href="/">LDMS</a>
        </div>

        <div className="nav-links">

          <a href="#features">
            Features
          </a>

          <a href="#workflow">
            Workflow
          </a>

          {/* <a href="#contact">
            Contact
          </a> */}

          <Link to="/login">
            <button className="login-btn">
              Login
            </button>
          </Link>

        </div>

      </nav>

      {/* Hero */}

      <section className="hero">

        <h1>
          Smart Logistics.
          <br />
          Real-Time Dispatch.
          <br />
          Complete Visibility.
        </h1>

        <p>
          Manage Customers, Orders,
          Drivers, Vehicles,
          Dispatches and Deliveries
          from a single centralized
          logistics platform.
        </p>

        <div className="hero-buttons">

          <Link to="/login">
            <button className="primary-btn">
              Get Started
            </button>
          </Link>

          <a href="#features">
            <button className="secondary-btn">
              Explore Features
            </button>
          </a>

        </div>

      </section>

      {/* Statistics */}

      <section className="stats-section">

        <div className="stat-card">
          <h2>10+</h2>
          <p>Orders Processed</p>
        </div>

        <div className="stat-card">
          <h2>5+</h2>
          <p>Drivers Managed</p>
        </div>

        <div className="stat-card">
          <h2>99%</h2>
          <p>Delivery Accuracy</p>
        </div>

        <div className="stat-card">
          <h2>24/7</h2>
          <p>Live Tracking</p>
        </div>

      </section>

      {/* Features */}

      <section
        id="features"
        className="features-section"
      >

        <h2>Core Features</h2>

        <div className="features-grid">

          <div className="feature-card">
            <h3>
              Customer Management
            </h3>
            <p>
              Maintain and manage all
              customer records.
            </p>
          </div>

          <div className="feature-card">
            <h3>
              Driver Management
            </h3>
            <p>
              Manage driver resources
              and availability.
            </p>
          </div>

          <div className="feature-card">
            <h3>
              Vehicle Management
            </h3>
            <p>
              Track and allocate
              vehicles efficiently.
            </p>
          </div>

          <div className="feature-card">
            <h3>
              Order Management
            </h3>
            <p>
              Handle shipment requests
              from customers.
            </p>
          </div>

          <div className="feature-card">
            <h3>
              Dispatch Engine
            </h3>
            <p>
              Assign drivers and
              vehicles intelligently.
            </p>
          </div>

          <div className="feature-card">
            <h3>
              Real-Time Tracking
            </h3>
            <p>
              Monitor deliveries from
              pickup to destination.
            </p>
          </div>

        </div>

      </section>

      {/* Workflow */}

      <section
        id="workflow"
        className="workflow-section"
      >

        <h2>
          Logistics Workflow
        </h2>

        <div className="workflow">

          <div>Customer</div>
          <span>→</span>

          <div>Order</div>
          <span>→</span>

          <div>Dispatch</div>
          <span>→</span>

          <div>Tracking</div>
          <span>→</span>

          <div>Delivery</div>

        </div>

      </section>

      {/* Why Choose */}

      <section className="why-section">

        <h2>
          Why Choose LDMS?
        </h2>

        <div className="why-grid">

          <div className="why-card">
            Reduce manual work
          </div>

          <div className="why-card">
            Centralized logistics
          </div>

          <div className="why-card">
            Real-time visibility
          </div>

          <div className="why-card">
            Better resource utilization
          </div>

          <div className="why-card">
            Faster deliveries
          </div>

          <div className="why-card">
            Improved customer service
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="cta">

        <h2>
          Ready to Manage Logistics Smarter?
        </h2>

        <Link to="/login">
          <button className="primary-btn">
            Launch Dashboard
          </button>
        </Link>

      </section>

      {/* Footer */}

      <footer
        id="contact"
        className="footer"
      >

        <h3>LDMS</h3>

        <p>
          Logistics & Dispatch
          Management System
        </p>

        <p>
          © 2026 LDMS
        </p>

      </footer>

    </div>
  );
}

export default LandingPage;