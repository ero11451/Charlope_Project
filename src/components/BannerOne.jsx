"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Slider from "react-slick";

const BannerOne = () => {
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    arrows: false,
  };
  return (
    <>
      <section className='banner-two'>
        <div className='banner-two__slider swiper'>
          <Slider {...settings} ref={sliderRef} className='swiper-wrapper'>
            <div className='swiper-slide'>
              <div className='banner-two__slider-single'>
                <div
                  className='banner-two__slider-bg'
                  style={{
                    backgroundImage:
                      "url(https://nextjs.charifund.wowtheme7.com/assets/images/banner/banner-two-bg.png)",
                  }}
                ></div>
                <div className='container'>
                  <div className='row'>
                    <div className='col-12 col-md-9 col-lg-7 col-xxl-6'>
                      <div className='banner-two__slider-content'>
                        <span className='sub-title'>
                          <i className='icon-donation' />
                          Start donating
                        </span>
                        <h1>
                          Bringing Hope.  <br /> Empowering Lives.
                          <span className='bottom-line'>Transforming Communities.</span>
                        </h1>
                        <p className="text-white">
                          At Charlope Global Charity Foundation (CGCF), we are driven by compassion to uplift the poor, empower the vulnerable, and bring lasting change to communities in need.
                        </p>
                        <div className='banner__content-cta cta'>
                          <Link
                            href='/our-causes'
                            aria-label='about us'
                            title='about us'
                            className='btn--tertiary'
                          >
                            Become a Volunteer{" "}
                            <i className='fa-solid fa-arrow-right' />
                          </Link>
                          <Link
                            href='/donate-us'
                            aria-label='donate us'
                            title='donate us'
                            className='btn--primary'
                          >
                            Donate Now{" "}
                            <i className='fa-solid fa-arrow-right' />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
              <div className='banner-two__slider-single'>
                <div
                  className='banner-two__slider-bg'
                  style={{
                    backgroundImage:
                      "url(https://nextjs.charifund.wowtheme7.com/assets/images/banner/banner-one-bg.png)",
                  }}
                ></div>
                <div className='container'>
                  <div className='row'>
                    <div className='col-12 col-md-9  col-lg-7 col-xxl-6'>
                      <div className='banner-two__slider-content'>
                        <span className='sub-title'>
                          <i className='icon-donation' />
                          Start donating
                        </span>
                        <h1>
                          Bringing Hope.  <br />Empowering Lives. Transforming Communities.
                          {/* To Those <span className='bottom-line'>peoples</span>
                          Who Need It. */}
                        </h1>
                        <p className="text-white">
                          At Charlope Global Charity Foundation (CGCF), we are driven by compassion to uplift the poor, empower the vulnerable, and bring lasting change to communities in need.
                        </p>
                        <div className='banner__content-cta cta'>
                          <Link
                            href='/our-causes'
                            aria-label='about us'
                            title='about us'
                            className='btn--tertiary'
                          >
                            Become a Volunteer{" "}
                            <i className='fa-solid fa-arrow-right' />
                          </Link>
                          <Link
                            href='/donate-us'
                            aria-label='donate us'
                            title='donate us'
                            className='btn--primary'
                          >
                            Donate Now{" "}
                            <i className='fa-solid fa-arrow-right' />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
              <div className='banner-two__slider-single'>
                <div
                  className='banner-two__slider-bg'
                  style={{
                    backgroundImage:
                      "url(https://nextjs.charifund.wowtheme7.com/assets/images/banner/banner-two-bg.png)",
                  }}
                ></div>
                <div className='container'>
                  <div className='row'>
                    <div className='col-12 col-md-9 col-lg-7 col-xxl-6'>
                      <div className='banner-two__slider-content'>
                        <span className='sub-title'>
                          <i className='icon-donation' />
                          {/* Start donating poor people */}
                        </span>
                        <h1>
                          Bringing Hope.  <br />Empowering Lives. Transforming Communities.
                          {/* To Those <span className='bottom-line'>peoples</span>
                          Who Need It. */}
                        </h1>
                        <p>
                          At Charlope Global Charity Foundation (CGCF), we are driven by compassion to uplift the poor, empower the vulnerable, and bring lasting change to communities in need.
                        </p>
                        <div className='banner__content-cta cta'>
                          <Link
                            href='/our-causes'
                            aria-label='about us'
                            title='about us'
                            className='btn--tertiary'
                          >
                            Become a Volunteer{" "}
                            <i className='fa-solid fa-arrow-right' />
                          </Link>
                          <Link
                            href='/donate-us'
                            aria-label='donate us'
                            title='donate us'
                            className='btn--primary'
                          >
                            Donate Now{" "}
                            <i className='fa-solid fa-arrow-right' />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
              <div className='banner-two__slider-single'>
                <div
                  className='banner-two__slider-bg'
                  style={{
                    backgroundImage:
                      "url(/assets/images/banner/banner-one-bg.png)",
                  }}
                ></div>
                <div className='container'>
                  <div className='row'>
                    <div className='col-12 col-md-9 col-lg-7 col-xxl-6'>
                      <div className='banner-two__slider-content'>
                        <span className='sub-title'>
                          <i className='icon-donation' />
                          Start donating
                        </span>
                        <h1>
                          Bringing Hope.  <br />Empowering Lives. Transforming Communities.
                          {/* To Those <span className='bottom-line'>peoples</span>
                          Who Need It. */}
                        </h1>
                        <p>
                          At Charlope Global Charity Foundation (CGCF), we are driven by compassion to uplift the poor, empower the vulnerable, and bring lasting change to communities in need.
                        </p>
                        <div className='banner__content-cta cta'>
                          <Link
                            href='/our-causes'
                            aria-label='about us'
                            title='about us'
                            className='btn--tertiary'
                          >
                            Become a Volunteer{" "}
                            <i className='fa-solid fa-arrow-right' />
                          </Link>
                          <Link
                            href='/donate-us'
                            aria-label='donate us'
                            title='donate us'
                            className='btn--primary'
                          >
                            Donate Now{" "}
                            <i className='fa-solid fa-arrow-right' />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className='slider-navigation d-none d-md-flex'>
          <button
            onClick={() => sliderRef.current.slickPrev()}
            type='button'
            aria-label='prev slide'
            title='prev slide'
            className='prev-banner slider-btn'
          >
            <i className='fa-solid fa-arrow-left' />
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            type='button'
            aria-label='next slide'
            title='next slide'
            className='next-banner slider-btn slider-btn-next'
          >
            <i className='fa-solid fa-arrow-right' />
          </button>
        </div>
        <div className='shape'>
          <Image width={100} height={200} src='/assets/images/shape.png' alt='Image_inner' />
        </div>
        <div
          className='shape-left'
          data-aos='fade-right'
          data-aos-duration={1000}
          data-aos-delay={300}
        >
          <Image
            width={100} height={200}
            src='/assets/images/banner/banner-two-shape.png'
            alt='Image_inner'
          />
        </div>
        <div className='sprade-shape'>
          <Image
            width={100} height={200}
            src='/assets/images/sprade-base.png'
            alt='Image_inner'
            className='base-img'
            data-aos='zoom-in'
            data-aos-duration={1000}
          />
        </div>
        <div className='unity'>
          <Image
            width={100} height={200}
            src='/assets/images/unity.png' alt='Image_inner' />
        </div>
      </section>
    </>
  );
};

export default BannerOne;
