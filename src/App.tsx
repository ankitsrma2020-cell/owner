import { useState, type FormEvent } from 'react'
import './App.css'

type IconName = 'bolt' | 'check' | 'chart' | 'layers' | 'sliders' | 'sparkles' | 'code'

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, string> = {
    bolt: 'M13 2 3 14h8l-1 8 10-12h-8l1-8Z', check: 'm5 12 4 4L19 6', chart: 'M5 20V10m7 10V4m7 16v-7', layers: 'm12 2 9 5-9 5-9-5 9-5Zm-9 10 9 5 9-5M3 17l9 5 9-5', sliders: 'M4 6h16M4 12h16M4 18h16M8 4v4m8 2v4m-5 4v4', sparkles: 'm12 3 1.4 5.6L19 10l-5.6 1.4L12 17l-1.4-5.6L5 10l5.6-1.4L12 3ZM19 17l.6 2.4L22 20l-2.4.6L19 23l-.6-2.4L16 20l2.4-.6L19 17Z', code: 'm8 9-3 3 3 3m8-6 3 3-3 3m-3-9-2 12',
  }
  return <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]} /></svg>
}

const features = [
  ['bolt', 'Fast Performance', 'Built with Vite for a fast and smooth development experience.'], ['check', 'Responsive Design', 'Beautiful layouts that feel right on every screen size.'], ['layers', 'Reusable Components', 'A clean structure that makes building and scaling simple.'], ['sliders', 'Easy Customization', 'Adapt colors, content and components to your vision.'], ['sparkles', 'Modern UI', 'Thoughtful details and polished interactions built in.'], ['code', 'Developer Friendly', 'A productive setup with familiar tools and clear code.'],
] as const

function App() {
  const [formSent, setFormSent] = useState(false)
  function handleSubmit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); if (event.currentTarget.checkValidity()) setFormSent(true) }
  return <div className="app-shell">
    <header className="site-header"><a className="brand" href="#home" aria-label="My React App home"><span className="brand-mark">◆</span><span>My App</span></a><nav aria-label="Main navigation"><a className="active" href="#home">Home</a><a href="#about">About</a><a href="#features">Features</a><a href="#contact">Contact</a><a className="nav-button" href="#contact">Get Started</a></nav></header>
    <main>
      <section id="home" className="hero-section section-wrap"><div className="hero-copy"><p className="eyebrow">BUILD SOMETHING GREAT</p><h1>Welcome to<br /><span>My React App</span></h1><p className="hero-text">This is a simple and modern React application built with Vite. You can start building your amazing project from here.</p><div className="hero-actions"><a className="button primary" href="#features">Get Started</a><a className="button secondary" href="#about">Learn More <span>→</span></a></div></div><div className="hero-art" aria-label="React and Vite illustration"><span className="dot dot-blue" /><span className="dot dot-green" /><span className="dot dot-purple" /><div className="glow" /><div className="tech-card"><div className="react-symbol">⚛</div><b>+</b><div className="vite-symbol">ϟ</div></div></div></section>
      <section id="about" className="about-section section-wrap"><div className="section-heading"><span className="pill">ABOUT US</span><h2>Built for modern ideas</h2><p>My React App is a welcoming foundation for creating fast, focused web experiences.</p></div><div className="about-grid"><div><h3>What is My React App?</h3><p>My React App is a modern React + Vite application designed to help you move from an idea to a polished interface quickly. It gives you a clean starting point, sensible structure and room to make it your own.</p></div><div className="goal-card"><span className="feature-icon blue"><Icon name="sparkles" /></span><h3>Why We Built It</h3><p>To make the first step of every project feel simple, inspiring and ready for what comes next.</p></div></div></section>
      <section id="features" className="features-section section-wrap"><div className="section-heading"><span className="pill">FEATURES</span><h2>Why Choose This Template?</h2><p>Everything you need to build fast and modern web applications.</p></div><div className="feature-grid">{features.map(([icon, title, description], index) => <article className="feature-card" key={title}><span className={`feature-icon icon-${index}`}><Icon name={icon} /></span><h3>{title}</h3><p>{description}</p></article>)}</div></section>
      <section id="contact" className="contact-section section-wrap"><div className="section-heading"><span className="pill">CONTACT</span><h2>Let’s build something together</h2><p>Have a question or an idea? We’d love to hear from you.</p></div><div className="contact-grid"><form className="contact-form" onSubmit={handleSubmit}><label>Name<input name="name" type="text" placeholder="Your name" required /></label><label>Email<input name="email" type="email" placeholder="you@example.com" required /></label><label>Message<textarea name="message" placeholder="Tell us about your project..." rows={4} required /></label><button className="button primary" type="submit">Send Message <span>→</span></button>{formSent && <p className="success" role="status">Thanks! Your message has been sent.</p>}</form><div className="contact-details"><h3>Get in touch</h3><p>We’re here to help bring your next idea to life.</p><div><strong>Email</strong><span>hello@myreactapp.com</span></div><div><strong>Phone</strong><span>+1 (555) 123-4567</span></div><div><strong>Location</strong><span>San Francisco, CA</span></div></div></div></section>
    </main><footer>© 2024 My App. Built with <span>React</span> + <span>Vite</span>.</footer>
  </div>
}





export default App
