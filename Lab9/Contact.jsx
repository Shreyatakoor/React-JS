import React from 'react';

function Contact() {
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>Contact Page</h2>

      <img
  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
  alt="Contact"
  style={{ width: '400px', borderRadius: '10px', marginTop: '20px' }}
/>

      <div style={{ marginTop: '20px', fontSize: '18px' }}>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> johndoe@example.com</p>
        <p><strong>Phone:</strong> +1 234 567 890</p>
        <p><strong>Address:</strong> 123 Main Street, City</p>
      </div>
    </div>
  );
}

export default Contact;
