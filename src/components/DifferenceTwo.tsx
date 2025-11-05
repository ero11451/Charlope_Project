"use client";
import Image from "next/image";
import { useState } from "react";
// import ModalVideo from "react-modal-video";
const DifferenceTwo = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("mission");
  return (
    <>
      <section className='difference-two'>
        <div className='container'>
          <div className='row gutter-40 align-items-center'>
            <div className='col-12 col-lg-4 col-xxl-5 d-none d-lg-block'>
              <div className='difference-two__thumb-wrapper'>
                <div className='difference-two__thumb'>
                  <div
                    className='thumb-lg'
                    data-aos='fade-right'
                    data-aos-duration={1000}
                  >
                    <Image width={400} height={500}
                      src='https://nextjs.charifund.wowtheme7.com/assets/images/difference/thumb-sm.png'
                      alt='Image_inner'
                    />
                    <div className='grid-line'>
                      <Image width={100} height={100}
                        src='https://nextjs.charifund.wowtheme7.com/assets/images/help/grid.png'
                        alt='Image_inner'
                        className='base-img'
                      />
                    </div>
                    {/* <div className='video-btn-wrapper'>
                      <button
                        onClick={() => setIsOpen(true)}
                        className='open-video-popup'
                      >
                        <i className='icon-play' />
                      </button>
                    </div> */}
                  </div>
                  <div
                    className='thumb-sm'
                    data-aos='fade-up'
                    data-aos-duration={1000}
                    data-aos-delay={300}
                  >
                    <Image width={200} height={400}
                      src='https://nextjs.charifund.wowtheme7.com/assets/images/difference/thumb-lg.png'
                      alt='Image_inner'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-8 col-xxl-7'>
              <div className='difference-two__tab'>
                <div className='difference-two__content'>
                  <span className='sub-title'>
                    <i className='icon-donation' />
                   ABOUT US
                  </span>
                  <h2 className='title-animation_inner'>
                  Who We <span>   Are    </span>
                  </h2>
                  <p>

                  Charlope Global Charity Foundation (CGCF) is a non-profit, non-governmental organization established to improve lives through education, healthcare, empowerment, and humanitarian relief.
                  We are committed to showing love in action by meeting real human needs with genuine compassion.
                  </p>

                  <div className='difference-two__inner cta'>
                    <div className='difference-two__inner-content'>
                      {/* TABS */}
                      <div className='difference-two__tab'>
                        <div className='difference-two__tab-btns'>
                          <button
                            className={`difference-two__tab-btn ${activeTab === "vision" ? "active" : ""
                              }`}
                            onClick={() => setActiveTab("vision")}
                            aria-label='vision'
                            title='vision'
                          >
                            Our Vision
                          </button>
                          <button
                            className={`difference-two__tab-btn ${activeTab === "mission" ? "active" : ""
                              }`}
                            onClick={() => setActiveTab("mission")}
                            aria-label='mission'
                            title='mission'
                          >
                            Our Mission
                          </button>
                          <button
                            className={`difference-two__tab-btn ${activeTab === "excellence" ? "active" : ""
                              }`}
                            onClick={() => setActiveTab("excellence")}
                            aria-label='excellence'
                            title='excellence'
                          >
                            Core Values
                          </button>
                        </div>

                        <div className='difference-two__tab-content'>
                          {activeTab === "mission" && (
                            <div
                              className='difference-two__content-single'
                              id='mission'
                            >
                              <ul>
                                <li>
                                To alleviate poverty, promote education, support healthcare, and empower individuals to become agents of positive change.
                                </li>
                              </ul>
                            </div>
                          )}
                          {activeTab === "vision" && (
                            <div
                              className='difference-two__content-single'
                              id='vision'
                            >
                              <ul>
                                <li>
                                To be a global beacon of hope and empowerment for the less privileged, restoring lives and transforming communities through acts of love.
                                </li>
                              </ul>
                            </div>
                          )}
                          {activeTab === "excellence" && (
                            <div
                              className='difference-two__content-single'
                              id='excellence'
                            >
                              <ul>
                                <li>
                                  Compassion • Integrity • Empowerment • Community • Sustainability.
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='spade'>
          <Image width={100} height={100} src='https://nextjs.charifund.wowtheme7.com/assets/images/spade-green-two.png' alt='Image_inner' />
        </div>
      </section>

    </>
  );
};

export default DifferenceTwo;
