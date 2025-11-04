import Image from "next/image";
import { useState } from "react";

const ContactUsInner = () => {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    message: "",
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
    <section className='contact-main volunteer'>
      <div className='container'>
        <div className='row gutter-40'>
          <div className='col-12 col-xl-6'>
            <div className='contact__content'>
              <div
                className='section__content'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <span className='sub-title'>
                  <i className='icon-donation' /> Get In Touch
                </span>
                <h2 className='title-animation_inner'>Contact Us</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  inventore
                </p>
              </div>
              <div className='contact-main__inner cta'>
                <div className='contact-main__single'>
                  <div className='thumb'>
                    <i className='fa-solid fa-location-dot' />
                  </div>
                  <div className='content'>
                    <h6>Location</h6>
                    <p>
                      <a
                        href='https://maps.app.goo.gl/XkRD56V3yUNsZd5i7'
                        target='_blank'
                        rel='noreferrer'
                      >
                        10 Dr Sydney Usiegbe Street off Ulemon Road Benin city.
                      </a>
                    </p>
                  </div>
                </div>
                <div className='contact-main__single'>
                  <div className='thumb'>
                    <i className='fa-solid fa-phone' />
                  </div>
                  <div className='content'>
                    <h6>Phone</h6>
                    <p>
                      <a href='tel:2305-587-3407'>+1 (368) 567 89 54 </a>
                    </p>
                    {/* <p>
                      <a href='tel:2305-587-3407'>+236 (456) 896 22</a>
                    </p> */}
                  </div>
                </div>
                <div className='contact-main__single'>
                  <div className='thumb'>
                    <i className='fa-solid fa-envelope' />
                  </div>
                  <div className='content'>
                    <h6>Email</h6>
                    <p>
                      <a href='mailto:charlopefoundation@gmail.com'>charlopefoundation@gmail.com</a>
                    </p>
                    <p>
                      <a href='mailto:charlopefoundation@gmail.com'>
                        charlopefoundation@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                {/* [10/22/25, 11:49:13 PM] Charles Rgu: instagram.com/charlopefoundation
[10/22/25, 11:49:13 PM] Charles Rgu: https://www.tiktok.com/@charlopefoundation
[10/22/25, 11:49:14 PM] Charles Rgu: https://facebook.com/charlopeglobalfoundation
[10/22/25, 11:49:14 PM] Charles Rgu: https://www.tiktok.com/@charlopefoundationCharlopecharity */}
                <div className='contact-main__single'>
                  <div className='thumb'>
                    <i className='fa-solid fa-share-nodes' />
                  </div>
                  <div className='content'>
                    <h6>Social</h6>
                    <div className='social'>
                      <a
                        href='https://facebook.com/charlopeglobalfoundation'
                        target='_blank'
                        aria-label='share us on facebook'
                        title='facebook'
                        rel='noreferrer'
                      >
                        <i className='fa-brands fa-facebook-f' />
                      </a>
                      <a
                        href='https://vimeo.com/'
                        target='_blank'
                        aria-label='share us on vimeo'
                        title='vimeo'
                        rel='noreferrer'
                      >
                        <i className='fa-brands fa-vimeo-v' />
                      </a>
                      <a
                        href='https://www.tiktok.com/@charlopefoundation'
                        target='_blank'
                        aria-label='share us on twitter'
                        title='twitter'
                        rel='noreferrer'
                      >
                        <i className='fa-brands fa-twitter' />
                      </a>
                      <a
                        href='https://www.tiktok.com/@charlopefoundation'
                        target='_blank'
                        aria-label='share us on tiktok'
                        title='tiktok'
                        rel='noreferrer'
                      >
                        <i className='fa-brands fa-tiktok-in' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='contact-main__thumb cta'>
                <Image width={100} height={130} src='https://nextjs.charifund.wowtheme7.com/assets/images/contact-thumb.png' alt='Image_inner' />
              </div>
            </div>
          </div>
          <div className='col-12 col-xl-6'>
            <div
              className='contact__form volunteer__form checkout__form'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={100}
            >
              <div className='volunteer__form-content'>
                <h4 className='title-animation_inner'>Fill Up The Form</h4>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
              </div>
              <form className="cta" onSubmit={handleSubmit}>
                <div className="input-single">
                  <input
                    type="text"
                    placeholder="Enter Name"
                    value={form.full_name}
                    onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                    required
                  />
                </div>
                <div className="input-single">
                  <input
                    type="email"
                    placeholder="Enter Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
                <div className="input-single">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={form.phone_number}
                    onChange={(e) => setForm({ ...form, phone_number: e.target.value })}
                    required
                  />
                </div>
                <div className="input-single alter-input">
                  <textarea
                    placeholder="Your Message..."
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsInner;
