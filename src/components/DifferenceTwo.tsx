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
                    <Image width={100} height={100}
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
                    <Image width={100} height={100}
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
                    Start donating poor people
                  </span>
                  <h2 className='title-animation_inner'>
                    Donate <span>Support</span> to Make Difference way
                  </h2>
                  <p>
                  
CHARLOPE GLOBAL CHARITY FOUNDATION
Offering Hope through Education, Health, and Mentorship
Empowering indigent children and women across Nigeria with access to education, healthcare
                  </p>

                  <div className='difference-two__inner cta'>
                    <div className='difference-two__inner-content'>
                      {/* TABS */}
                      <div className='difference-two__tab'>
                        <div className='difference-two__tab-btns'>
                          <button
                            className={`difference-two__tab-btn ${
                              activeTab === "mission" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("mission")}
                            aria-label='mission'
                            title='mission'
                          >
                            Our Mission
                          </button>
                          <button
                            className={`difference-two__tab-btn ${
                              activeTab === "vision" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("vision")}
                            aria-label='vision'
                            title='vision'
                          >
                            Our Vision
                          </button>
                          <button
                            className={`difference-two__tab-btn ${
                              activeTab === "excellence" ? "active" : ""
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
                                To offer financial support, mentorship, and healthcare assistance to indigent children and women in Nigeria.
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
                                A Nigeria where every child learns and every woman lives with dignity and hope.
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
                                Compassion • Integrity • Accountability • Empowerment • Service.

                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* PROGRESS */}
                      {/* <div className='difference-two__progress'>
                        <div className='difference-progress-single'>
                          <div
                            className='progress-bar-single'
                            data-percent='75%'
                          >
                            <div className='circular-progress'>
                              <div className='percent-value'>55%</div>
                              <svg
                                className='progress-circle'
                                viewBox='0 0 36 36'
                              >
                                <path
                                  className='circle-bg'
                                  d='M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831'
                                />
                                <path
                                  style={{ strokeDasharray: 55 }}
                                  className='circle-progress'
                                  d='M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831'
                                />
                              </svg>
                            </div>
                          </div>
                          <div className='content'>
                            <p>
                              Treatment <br />
                              Helping
                            </p>
                          </div>
                        </div>
                        <div className='difference-progress-single'>
                          <div
                            className='progress-bar-single'
                            data-percent='92%'
                          >
                            <div className='circular-progress'>
                              <div className='percent-value'>85%</div>
                              <svg
                                className='progress-circle'
                                viewBox='0 0 36 36'
                              >
                                <path
                                  className='circle-bg'
                                  d='M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831'
                                />
                                <path
                                  style={{ strokeDasharray: 60 }}
                                  className='circle-progress'
                                  d='M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831'
                                />
                              </svg>
                            </div>
                          </div>
                          <div className='content'>
                            <p>
                              Highest <br />
                              Fund Raised
                            </p>
                          </div>
                        </div>
                      </div> */}
                    </div>

                    {/* CARD */}
                    {/* <div className='difference-two__card'>
                      <div className='card-group'>
                        <div className='thumb'>
                          <i className='icon-donation-card' />
                        </div>
                        <div className='content'>
                          <h6>Donate Now</h6>
                          <p>$40,456</p>
                        </div>
                      </div>
                      <hr />
                      <div className='card-group card-group-alt'>
                        <div className='thumb'>
                          <i className='icon-fund' />
                        </div>
                        <div className='content'>
                          <h6>Total Fundraised</h6>
                          <p>$1,540,456</p>
                        </div>
                      </div>
                    </div> */}
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
