
'use client';

import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg('');

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await res.json();
      if (res.ok) {
        setResponseMsg(result.message || 'Submitted successfully!');
        setFormData({ fullName: '', email: '', phone: '', message: '' });
      } else {
        setResponseMsg(result.error || 'Failed to submit!');
      }
    } catch (err) {
      console.error(err);
      setResponseMsg('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };



  return (
    <MainLayout>
      {/* Header Background */}
      <div
        className="h-screen bg-100 bg-center"
        style={{ backgroundImage: "url('/home1.jpg')" }}
      />

      {/* Page Title */}
      <section className="m-10 text-center">
        <div className="flex items-center justify-center h-full text-black text-5xl font">
          Contact Us
        </div>
      </section>

      {/* Contact Form + Map */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '40px' }}>
        {/* Contact Form */}
        <form style={{ width: '50%' }} onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <input
              name="phone"
              type="text"
              placeholder="Contact Number"
              value={formData.phone}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              style={{ ...inputStyle, height: '120px' }}
            />
          </div>

          {/* Optional: reCAPTCHA placeholder */}
          <div style={{ marginBottom: '20px' }}>
            <div className="g-recaptcha" data-sitekey="your_site_key_here"></div>
          </div>

          <button type="submit" style={buttonStyle} disabled={loading}>
            {loading ? 'Sending...' : 'SEND ENQUIRIES'}
          </button>
          {responseMsg && (
            <p style={{ marginTop: '15px', color: 'green', fontWeight: 'bold' }}>{responseMsg}</p>
          )}
        </form>

        {/* Google Map Embed */}
        <div style={{ width: '45%' }}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.195342666222!2d79.83770990896835!3d7.218545814669601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2efd14f2b02dd%3A0x20dc61edf9cb672f!2sARCADIA%20Negombo%20-%20Cafe%20%26%20Restaurant!5e0!3m2!1sen!2slk!4v1747361447421!5m2!1sen!2slk"
            width="100%"
            height="400"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </MainLayout>
  );
}

// Styles
const inputStyle = {
  width: '100%',
  padding: '12px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontSize: '16px'
};

const buttonStyle = {
  padding: '12px 24px',
  backgroundColor: 'transparent',
  color: '#13866F',
  border: '2px solid #13866F',
  borderRadius: '4px',
  fontWeight: 'bold',
  cursor: 'pointer',
  letterSpacing: '1px'
};
