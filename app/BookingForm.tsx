'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxeNgAJL78PQMaNtdAPjKDramEZ_85q9i0MZilG98YCKGQ-uK4o70RVkxdD9hPtWkS87Q/exec';

interface BookingFormProps {
  onSuccess?: () => void;
}

export default function BookingForm({ onSuccess }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    tickets: '1',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(formData),
        mode: 'no-cors',
      });

      if (response.ok || response.status === 0) {
        setSubmitted(true);
        setFormData({ name: '', email: '', mobile: '', tickets: '1' });
        setTimeout(() => {
          setSubmitted(false);
          onSuccess?.();
        }, 3000);
      } else {
        setError('Failed to submit. Please try again.');
      }
    } catch (err) {
      setError('Failed to submit. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-900/30 border border-green-500 rounded-2xl p-8 text-center"
      >
        <h3 className="text-2xl font-bold text-green-400 mb-4">✅ Thank You!</h3>
        <p className="text-gray-300 mb-2">
          Thank you for showing your interest!
        </p>
        <p className="text-gray-400">
          Our team will contact you within 2 business working days.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 border border-yellow-500/30 rounded-2xl p-8 max-w-2xl mx-auto"
    >
      <h3 className="text-2xl font-bold text-yellow-500 mb-6">Book a Show</h3>

      {error && (
        <div className="bg-red-900/30 border border-red-500 text-red-300 p-4 rounded-lg mb-6">
          {error}
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="block text-gray-300 mb-2 font-semibold">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-yellow-500 focus:outline-none"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2 font-semibold">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-yellow-500 focus:outline-none"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2 font-semibold">
            Mobile Number *
          </label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-yellow-500 focus:outline-none"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>

      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full mt-8 px-8 py-3 bg-yellow-500 text-black rounded-full font-semibold hover:bg-yellow-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Submitting...' : 'Submit Booking'}
      </button>
    </motion.form>
  );
}
