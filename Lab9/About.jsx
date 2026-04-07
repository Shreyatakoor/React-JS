import React from 'react';

function About() {
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>About Page</h2>

      <img
  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  alt="About"
  style={{ width: '400px', borderRadius: '10px', marginTop: '20px' }}
/>

      <p style={{ marginTop: '20px', maxWidth: '600px', marginInline: 'auto' }}>
        We are a team dedicated to building modern web applications using React.
        Our goal is to create fast, responsive, and user-friendly interfaces.
      </p>
    </div>
  );
}

export default About;
