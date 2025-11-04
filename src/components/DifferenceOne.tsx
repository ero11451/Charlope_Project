"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import Slider from "react-slick";

const DifferenceOne = () => {
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className='difference'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-10 col-xl-8'>
              <div
                className='section__header text-center'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <span className='sub-title'>
                  <i className='icon-donation' />
                  Start donating poor people
                </span>
                <h2 className='title-animation_inner'>
                  Our Mission, Vision, and Core Values
                </h2>
                <p>
                  Join our monthly giving program to provide consistent support
                  to our initiatives. Regular contributions, no matter the size,
                  help us plan and sustain long-term projects.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='difference__inner'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='difference__slider swiper'>
                  <Slider
                    {...settings}
                    ref={sliderRef}
                    className='swiper-wrapper'
                  >
                    <div className='swiper-slide px-2'>
                      <div className='difference__single-wrapper'>
                        <div
                          className='difference__single difference__single-first'
                          style={{
                            backgroundImage:
                              "url(/assets/images/difference/bg-one.png)",
                          }}
                        >
                          <div className='difference__single-thumb'>
                            <i className='fas fa-award' />
                          </div>
                          <div className='difference__single-content'>
                            <h5>
                              <Link href='/cause-details'>Education Support</Link>
                            </h5>
                            <p>
                               We sponsor school fees, provide learning materials, and mentor children to help them break the cycle of poverty through education.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide px-2'>
                      <div className='difference__single-wrapper'>
                        <div
                          className='difference__single difference__single-second'
                          style={{
                            backgroundImage:
                              "url(/assets/images/difference/bg-two.png)",
                          }}
                        >
                          <div className='difference__single-thumb'>
                          <i className='fas fa-award' />
                          </div>
                          <div className='difference__single-content'>
                            <h5>
                              <Link href='/cause-details'>Women & Youth Empowerment</Link>
                            </h5>
                            <p>
                               We equip women and young people with vocational skills, small business grants, and mentorship to foster self-reliance.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide px-2'>
                      <div className='difference__single-wrapper'>
                        <div
                          className='difference__single difference__single-third '
                          style={{
                            backgroundImage:
                              "url(/assets/images/difference/bg-three.png)",
                          }}
                        >
                          <div className='difference__single-thumb'>
                          <i className='fas fa-award' />
                          </div>
                          <div className='difference__single-content'>
                            <h5>
                              <Link href='/cause-details'>Healthcare Outreach</Link>
                            </h5>
                            <p>
                            Through medical outreaches and health education, we bring free healthcare services to those who need it most.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide px-2'>
                      <div className='difference__single-wrapper'>
                        <div
                          className='difference__single difference__single-first'
                          style={{
                            backgroundImage:
                              "url(/assets/images/difference/bg-one.png)",
                          }}
                        >
                          <div className='difference__single-thumb'>
                          <i className='fas fa-award' />
                          </div>
                          <div className='difference__single-content'>
                            <h5>
                              <Link href='/cause-details'>Food & Welfare Relief</Link>
                            </h5>
                            <p>
                                We distribute food, clothing, and essentials to vulnerable families, widows, and the homeless.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide px-2'>
                      <div className='difference__single-wrapper'>
                        <div
                          className='difference__single difference__single-second'
                          style={{
                            backgroundImage:
                              "url(/assets/images/difference/bg-two.png)",
                          }}
                        >
                          <div className='difference__single-thumb'>
                          <i className='fas fa-award' />
                          </div>
                          <div className='difference__single-content'>
                            <h5>
                              <Link href='/cause-details'>Community Development</Link>
                            </h5>
                            <p>
                            We undertake clean water projects, sanitation campaigns, and rural development initiatives to promote sustainable growth.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide px-2'>
                      <div className='difference__single-wrapper'>
                        <div
                          className='difference__single difference__single-third '
                          style={{
                            backgroundImage:
                              "url(/assets/images/difference/bg-three.png)",
                          }}
                        >
                          <div className='difference__single-thumb'>
                          <i className='fas fa-award' />
                          </div>
                          <div className='difference__single-content'>
                            <h5>
                              <Link href='/cause-details'>Medical Care</Link>
                            </h5>
                            <p>
                              Set up a secure and user-friendly online donation
                              platform that accepts multiple
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='slider-navigation'>
            <button
              onClick={() => sliderRef.current.slickPrev()}
              type='button'
              aria-label='prev slide'
              title='prev slide'
              className='prev-difference slider-btn'
            >
              <i className='fa-solid fa-arrow-left' />
            </button>
            <button
              onClick={() => sliderRef.current.slickNext()}
              type='button'
              aria-label='next slide'
              title='next slide'
              className='next-difference slider-btn slider-btn-next'
            >
              <i className='fa-solid fa-arrow-right' />
            </button>
          </div> */}
        </div>
        <div
          className='shape-hand'
          data-aos='fade-right'
          data-aos-duration={1000}
          data-aos-delay={300}
        >
          <Image width={100} height={100}
            src='/assets/images/difference/shape-hand.png'
            alt='Image_inner'
          />
        </div>
      </section>
    </>
  );
};

export default DifferenceOne;
