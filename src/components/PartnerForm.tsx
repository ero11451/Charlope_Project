import React, { useState } from 'react';

const PartnerForm = () => {
  const [form, setForm] = useState({
    organization_name: '',
    contact_person: '',
    email: '',
    phone_number: '',
    partnership_type: '',
    message: '',
  });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Partner form submitted:', form);
    // TODO: send to backend
  };

  return (
    <div className='volunteer__form-content'>
      {/* <h4 className='title-animation_inner'>Become a Partner</h4> */}
      <p>We welcome collaborations! Fill in the form below to get started.</p>

      <form className='cta' onSubmit={handleSubmit}>
        <div className='input-single'>
          <input
            type='text'
            placeholder='Organization Name'
            value={form.organization_name}
            onChange={(e) => setForm({ ...form, organization_name: e.target.value })}
            required
          />
        </div>

        <div className='input-single'>
          <input
            type='text'
            placeholder='Contact Person'
            value={form.contact_person}
            onChange={(e) => setForm({ ...form, contact_person: e.target.value })}
            required
          />
        </div>

        <div className='input-single'>
          <input
            type='email'
            placeholder='Email Address'
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
          />
        </div>

        {/* <div className='input-single'>
          <input
            type='text'
            placeholder='Type of Partnership (e.g. Sponsorship, Event, Resource Sharing)'
            value={form.partnership_type}
            onChange={(e) => setForm({ ...form, partnership_type: e.target.value })}
          />
        </div> */}

        <div className='input-single alter-input'>
          <textarea
            placeholder='Tell us more about your partnership idea...'
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </div>

        <div className='form-cta'>
          <button type='submit' className='btn--primary'>
            Send Request <i className='fa-solid fa-arrow-right' />
          </button>
        </div>
      </form>
    </div>
  );
};

export default PartnerForm;
