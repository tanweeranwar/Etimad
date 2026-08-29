import ContactForm from "./components/ContactForm";
const services = [
  {
    number: "01",
    title: "Software Engineering",
    description:
      "Scalable web applications, business platforms, APIs and custom software built around your business needs.",
  },
  {
    number: "02",
    title: "AI & Automation",
    description:
      "Transform repetitive processes into intelligent, automated workflows that save time and improve efficiency.",
  },
  {
    number: "03",
    title: "Cloud & DevOps",
    description:
      "Modern cloud infrastructure, deployment pipelines, monitoring and application modernization.",
  },
  {
    number: "04",
    title: "Enterprise Technology",
    description:
      "Integration, modernization and technology solutions designed for growing and established businesses.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <header className="site-header">
        <div className="container nav-container">
          <a href="/" className="brand">
            <span className="brand-name">ETIMAD</span>
            <span className="brand-subtitle">SOLUTION PVT. LTD.</span>
          </a>

          <nav className="desktop-nav">
            <a href="#services">Services</a>
            <a href="#why-etimad">Why Etimad</a>
            <a href="#industries">Industries</a>
            <a href="#global">India + GCC</a>
            <a href="#how-we-work">How We Work</a>
          </nav>

          <a href="#contact" className="nav-cta">
            Let&apos;s Talk <span>↗</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />

        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-location">
              <span className="location-dot" />
              INDIA <span>•</span> GCC <span>•</span> GLOBAL
            </div>

            <h1>
              Build.
              <br />
              <span>Secure.</span>
              <br />
              Scale.
            </h1>

            <p className="hero-description">
              We build intelligent technology solutions that help ambitious
              businesses modernize, automate and grow with confidence.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="primary-button">
                Talk to an Expert
                <span>↗</span>
              </a>

              <a href="#services" className="secondary-button">
                Explore Services
                <span>↓</span>
              </a>
            </div>

            <div className="hero-proof">
              <div>
                <strong>INDIA</strong>
                <span>Engineering & Delivery</span>
              </div>

              <div className="proof-divider" />

              <div>
                <strong>GCC</strong>
                <span>Technology Partnership</span>
              </div>

              <div className="proof-divider" />

              <div>
                <strong>GLOBAL</strong>
                <span>Future Ready</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow" />

            <div className="visual-frame">
              <img
                src="/etimad-brand-visual.png"
                alt="Etimad technology solutions across India, GCC and global markets"
              />
            </div>

            <div className="visual-caption">
              <span className="caption-line" />
              <span>Technology • Trust • Transformation</span>
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-line" />
        </div>
      </section>

      {/* Introduction */}
      <section className="intro-section" id="about">
        <div className="container intro-grid">
          <div>
            <p className="section-label">WHO WE ARE</p>
            <h2>
              Technology built around
              <span> your business.</span>
            </h2>
          </div>

          <div className="intro-copy">
            <p>
              Etimad Solution Pvt. Ltd. is a technology company helping
              businesses turn ideas, operational challenges and growth
              opportunities into reliable digital solutions.
            </p>

            <p>
              From India to the GCC, we combine engineering expertise,
              automation and modern technology to create solutions designed
              for long-term growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services-section" id="services">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-label">WHAT WE DO</p>
              <h2>
                Technology that
                <span> delivers.</span>
              </h2>
            </div>

            <p>
              From custom software to intelligent automation, we help
              organizations modernize and grow.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a href="#contact" className="service-link">
                  Discover <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

            {/* Why Etimad */}
      <section className="why-section" id="why-etimad">
        <div className="container">
          <div className="why-header">
            <div>
              <p className="section-label">WHY ETIMAD</p>

              <h2>
                Technology is only
                <br />
                valuable when it <span>works.</span>
              </h2>
            </div>

            <p>
              We combine engineering discipline, business understanding and
              modern technology to create solutions that deliver practical,
              long-term value.
            </p>
          </div>

          <div className="why-grid">
            <article className="why-card why-card-featured">
              <span className="why-number">01</span>

              <div className="why-card-content">
                <div className="why-icon">⌁</div>

                <h3>Engineering First</h3>

                <p>
                  We approach business challenges through solid engineering,
                  thoughtful architecture and technology that is built to last.
                </p>
              </div>
            </article>

            <article className="why-card">
              <span className="why-number">02</span>

              <div className="why-card-content">
                <div className="why-icon">↗</div>

                <h3>Built to Scale</h3>

                <p>
                  We design solutions with the future in mind, allowing your
                  technology to evolve as your business grows.
                </p>
              </div>
            </article>

            <article className="why-card">
              <span className="why-number">03</span>

              <div className="why-card-content">
                <div className="why-icon">◎</div>

                <h3>India + GCC</h3>

                <p>
                  Engineering capabilities from India combined with a strong
                  focus on businesses across the GCC.
                </p>
              </div>
            </article>

            <article className="why-card">
              <span className="why-number">04</span>

              <div className="why-card-content">
                <div className="why-icon">◇</div>

                <h3>Long-Term Partnership</h3>

                <p>
                  We aim to become an extension of your team — supporting,
                  improving and evolving your technology over time.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

            {/* Industries */}
      <section className="industries-section" id="industries">
        <div className="container">
          <div className="industries-header">
            <div>
              <p className="section-label">INDUSTRIES</p>

              <h2>
                Technology that
                <br />
                understands <span>business.</span>
              </h2>
            </div>

            <p>
              Different industries have different challenges. We build
              technology around the way your business actually operates.
            </p>
          </div>

          <div className="industries-list">
            <a href="#contact" className="industry-item">
              <span className="industry-number">01</span>

              <div className="industry-main">
                <h3>Retail & Commerce</h3>
                <p>
                  Digital commerce, inventory, customer experiences and
                  business automation.
                </p>
              </div>

              <span className="industry-arrow">↗</span>
            </a>

            <a href="#contact" className="industry-item">
              <span className="industry-number">02</span>

              <div className="industry-main">
                <h3>Logistics & Supply Chain</h3>
                <p>
                  Connected workflows, tracking, integrations and operational
                  visibility.
                </p>
              </div>

              <span className="industry-arrow">↗</span>
            </a>

            <a href="#contact" className="industry-item">
              <span className="industry-number">03</span>

              <div className="industry-main">
                <h3>Healthcare</h3>
                <p>
                  Digital platforms and workflows designed around better
                  operational efficiency.
                </p>
              </div>

              <span className="industry-arrow">↗</span>
            </a>

            <a href="#contact" className="industry-item">
              <span className="industry-number">04</span>

              <div className="industry-main">
                <h3>Real Estate</h3>
                <p>
                  Property technology, customer platforms, CRM and process
                  automation.
                </p>
              </div>

              <span className="industry-arrow">↗</span>
            </a>

            <a href="#contact" className="industry-item">
              <span className="industry-number">05</span>

              <div className="industry-main">
                <h3>Education</h3>
                <p>
                  Learning platforms, administration systems and connected
                  digital experiences.
                </p>
              </div>

              <span className="industry-arrow">↗</span>
            </a>

            <a href="#contact" className="industry-item">
              <span className="industry-number">06</span>

              <div className="industry-main">
                <h3>Hospitality</h3>
                <p>
                  Digital experiences, operational systems and automation for
                  hospitality businesses.
                </p>
              </div>

              <span className="industry-arrow">↗</span>
            </a>

            <a href="#contact" className="industry-item">
              <span className="industry-number">07</span>

              <div className="industry-main">
                <h3>Professional Services</h3>
                <p>
                  Workflow automation, reporting, customer management and
                  business applications.
                </p>
              </div>

              <span className="industry-arrow">↗</span>
            </a>

            <a href="#contact" className="industry-item">
              <span className="industry-number">08</span>

              <div className="industry-main">
                <h3>SMEs & Startups</h3>
                <p>
                  Practical technology solutions that help growing businesses
                  move faster.
                </p>
              </div>

              <span className="industry-arrow">↗</span>
            </a>
          </div>
        </div>
      </section>

            {/* India + GCC */}
      <section className="global-section" id="global">
        <div className="container">
          <div className="global-header">
            <div>
              <p className="section-label">WHERE WE OPERATE</p>

              <h2>
                From India.
                <br />
                <span>For the world.</span>
              </h2>
            </div>

            <div className="global-intro">
              <p>
                Etimad is being built with a global outlook — combining
                engineering capabilities from India with a strong focus on
                businesses across the GCC.
              </p>

              <span className="global-tagline">
                INDIA <i>•</i> GCC <i>•</i> GLOBAL
              </span>
            </div>
          </div>

          <div className="region-grid">
            <article className="region-card region-card-primary">
              <div className="region-top">
                <span className="region-index">01</span>
                <span className="region-status">BASE</span>
              </div>

              <div className="region-symbol">🇮🇳</div>

              <h3>India</h3>

              <p>
                Engineering & Delivery
              </p>

              <span className="region-description">
                Building technology capabilities from India for businesses
                across markets.
              </span>
            </article>

            <article className="region-card">
              <div className="region-top">
                <span className="region-index">02</span>
                <span className="region-status">FOCUS MARKET</span>
              </div>

              <div className="region-symbol">🇦🇪</div>

              <h3>UAE</h3>

              <p>
                GCC Technology Partnership
              </p>

              <span className="region-description">
                Supporting businesses with modern software, automation and
                digital transformation.
              </span>
            </article>

            <article className="region-card">
              <div className="region-top">
                <span className="region-index">03</span>
                <span className="region-status">EXPANSION</span>
              </div>

              <div className="region-symbol">🇸🇦</div>

              <h3>Saudi Arabia</h3>

              <p>
                GCC Growth Market
              </p>

              <span className="region-description">
                Building relationships and technology capabilities for the
                rapidly evolving Saudi market.
              </span>
            </article>
          </div>

          <div className="gcc-strip">
            <span>GCC</span>

            <div className="gcc-countries">
              <span>UAE</span>
              <span>Saudi Arabia</span>
              <span>Qatar</span>
              <span>Oman</span>
              <span>Bahrain</span>
              <span>Kuwait</span>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="process-section" id="how-we-work">
        <div className="container">
          <div className="process-header">
            <div>
              <p className="section-label">HOW WE WORK</p>

              <h2>
                From idea
                <br />
                to <span>impact.</span>
              </h2>
            </div>

            <p>
              A clear, collaborative approach that takes your business from
              challenge to solution — and from solution to long-term value.
            </p>
          </div>

          <div className="process-grid">
            <article className="process-card process-card-active">
              <div className="process-card-top">
                <span className="process-number">01</span>
                <span className="process-arrow">↗</span>
              </div>

              <div className="process-content">
                <span className="process-kicker">UNDERSTAND</span>

                <h3>Discover</h3>

                <p>
                  We start by understanding your business, your users and the
                  problem you're trying to solve.
                </p>
              </div>
            </article>

            <article className="process-card">
              <div className="process-card-top">
                <span className="process-number">02</span>
                <span className="process-arrow">↗</span>
              </div>

              <div className="process-content">
                <span className="process-kicker">DEFINE</span>

                <h3>Design</h3>

                <p>
                  We translate requirements into a practical architecture,
                  technology strategy and delivery plan.
                </p>
              </div>
            </article>

            <article className="process-card">
              <div className="process-card-top">
                <span className="process-number">03</span>
                <span className="process-arrow">↗</span>
              </div>

              <div className="process-content">
                <span className="process-kicker">ENGINEER</span>

                <h3>Build</h3>

                <p>
                  We develop, integrate and test the solution with a focus on
                  quality, security and maintainability.
                </p>
              </div>
            </article>

            <article className="process-card">
              <div className="process-card-top">
                <span className="process-number">04</span>
                <span className="process-arrow">↗</span>
              </div>

              <div className="process-content">
                <span className="process-kicker">EVOLVE</span>

                <h3>Scale</h3>

                <p>
                  We continue to improve, optimize and evolve the technology as
                  your business and requirements change.
                </p>
              </div>
            </article>
          </div>

          <div className="process-footer">
            <span>01</span>
            <div className="process-line">
              <span />
            </div>
            <span>04</span>
          </div>
        </div>
      </section>

            {/* Let's Talk */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-header">
            <div>
              <p className="section-label">LET&apos;S TALK</p>

              <h2>
                Have a technology
                <br />
                <span>challenge?</span>
              </h2>
            </div>

            <div className="contact-intro">
              <p>
                Tell us what you&apos;re working on. Whether you need to
                modernize an existing system, automate a process or build
                something new, let&apos;s start with a conversation.
              </p>

              <div className="contact-meta">
                <span>INDIA</span>
                <i>•</i>
                <span>GCC</span>
                <i>•</i>
                <span>GLOBAL</span>
              </div>
            </div>
          </div>

          <div className="contact-layout">
            {/* Left side */}
            <div className="contact-message">
              <span className="contact-line" />

              <h3>
                Let&apos;s build
                <br />
                something <span>useful.</span>
              </h3>

              <p>
                A technology conversation doesn&apos;t need to start with a
                specification. Tell us where you&apos;re trying to go and
                we&apos;ll help you explore the right path.
              </p>

              <div className="contact-points">
                <div>
                  <span>01</span>
                  <p>Business-first thinking</p>
                </div>

                <div>
                  <span>02</span>
                  <p>Engineering-led solutions</p>
                </div>

                <div>
                  <span>03</span>
                  <p>Built for long-term growth</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-content">
          <div>
            <div className="brand-name footer-brand">ETIMAD</div>
            <p>Technology. Trust. Transformation.</p>
          </div>

          <div className="footer-right">
            <p>Etimad Solution Pvt. Ltd.</p>
            <p>India • GCC • Global</p>
          </div>
        </div>
      </footer>
    </main>
  );
}