"use client";
import React, { useState } from 'react';

const MemberForm = () => {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    message: '',
  });

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert("Message sent!");
    setForm({ full_name: "", email: "", phone_number: "", message: "" });
  };

  return (
    <div className='volunteer__form-content'>
      {/* <h4 className='title-animation_inner'>Fill Up The Form</h4> */}
      <p>Your email address will not be published. Required fields are marked *</p>

      <form className='cta' onSubmit={handleSubmit}>
        <div className='input-single'>
          <input
            type='text'
            placeholder='Enter Name'
            value={form.full_name}
            onChange={(e) => setForm({ ...form, full_name: e.target.value })}
            required
          />
        </div>

        <div className='input-single'>
          <input
            type='email'
            placeholder='Enter Email'
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>

        <div className='input-single'>
          <input
            type='text'
            placeholder='Phone Number'
            value={form.phone_number}
            onChange={(e) => setForm({ ...form, phone_number: e.target.value })}
            required
          />
        </div>

        <div className='input-single alter-input'>
          <textarea
            placeholder='Your Message...'
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </div>

        <div className='form-cta'>
          <button
            type='submit'
            aria-label='submit message'
            title='submit message'
            className='btn--primary'
          >
            Get A Quote <i className='fa-solid fa-arrow-right' />
          </button>
        </div>
      </form>
    </div>
  );
};

export default MemberForm;
