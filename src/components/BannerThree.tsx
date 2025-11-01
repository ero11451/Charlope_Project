"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Slider from "react-slick";

const BannerThree = () => {
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
    <section className='banner-three'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-12 col-lg-8'>
            <div className='banner-three__slider swiper'>
              <Slider {...settings} ref={sliderRef} className='swiper-wrapper'>
                <div className='swiper-slide'>
                  <div className='banner-three__content'>
                    <span className='sub-title'>
                      <i className='icon-donation' />
                      Start donating poor people
                    </span>
                    <h1 className='title-animation_inner'>
                      Offering <span className='bottom-line'>Hope</span>
                      through <br />Education,
                      Health, and Mentorship
                    </h1>
                    <p>

                      Empowering indigent children and women across Nigeria with access to education, healthcare, and
                    </p>
                    <div className='banner__content-cta cta'>
                      <Link
                        href='/our-causes'
                        aria-label='about us'
                        title='about us'
                        className='btn--tertiary'
                      >
                        Discover More <i className='fa-solid fa-arrow-right' />
                      </Link>
                      <Link
                        href='/contact-us'
                        aria-label='contact us'
                        title='contact us'
                        className='btn--primary'
                      >
                        Get A Quote <i className='fa-solid fa-arrow-right' />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='banner-three__content'>
                    <span className='sub-title'>
                      <i className='icon-donation' />
                      Start donating poor people
                    </span>
                    <h1 className='title-animation_inner'>
                      Offering <span className='bottom-line'>Hope</span>
                      through <br />Education,
                      Health, and Mentorship
                    </h1>
                    <p>

                      Empowering indigent children and women across Nigeria with access to education, healthcare, and
                    </p>
                    <div className='banner__content-cta cta'>
                      <Link
                        href='/our-causes'
                        aria-label='about us'
                        title='about us'
                        className='btn--tertiary'
                      >
                        Discover More <i className='fa-solid fa-arrow-right' />
                      </Link>
                      <Link
                        href='/contact-us'
                        aria-label='contact us'
                        title='contact us'
                        className='btn--primary'
                      >
                        Get A Quote <i className='fa-solid fa-arrow-right' />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='banner-three__content'>
                    <span className='sub-title'>
                      <i className='icon-donation' />
                      Start donating poor people
                    </span>
                    <h1 className='title-animation_inner'>
                      Offering <span className='bottom-line'>Hope</span>
                      through <br />Education,
                      Health, and Mentorship
                    </h1>
                    <p>

                      Empowering indigent children and women across Nigeria with access to education, healthcare, and
                    </p>
                    <div className='banner__content-cta cta'>
                      <Link
                        href='/our-causes'
                        aria-label='about us'
                        title='about us'
                        className='btn--tertiary'
                      >
                        Discover More <i className='fa-solid fa-arrow-right' />
                      </Link>
                      <Link
                        href='/contact-us'
                        aria-label='contact us'
                        title='contact us'
                        className='btn--primary'
                      >
                        Get A Quote <i className='fa-solid fa-arrow-right' />
                      </Link>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div className='col-12 col-lg-4 d-none d-lg-block'>
            <div className='banner-three__thumb'>
              <div className='banner-three__thumb-inner'>
                <div className='group'>
                  <div className='m-one move-image'>
                    <Image width={100} height={100}
                      src='https://nextjs.charifund.wowtheme7.com/assets/images/banner/m-one.png'
                      alt='Image_inner'
                      data-aos='fade-right'
                      data-aos-duration={1000}
                    />
                  </div>
                  <div className='m-three move-image'>
                    <Image width={100} height={100}
                      src='https://nextjs.charifund.wowtheme7.com/assets/images/banner/m-three.png'
                      alt='Image_inner'
                      data-aos='fade-right'
                      data-aos-duration={1000}
                      data-aos-delay={300}
                    />
                  </div>
                </div>
                <div className='group'>
                  <div className='m-two move-image'>
                    <Image width={100} height={100}
                      src='https://nextjs.charifund.wowtheme7.com/assets/images/banner/m-two.png'
                      alt='Image_inner'
                      data-aos='zoom-in'
                      data-aos-duration={1000}
                    />
                  </div>
                  <div className='m-four move-image'>
                    <Image width={100} height={100}
                      src='https://nextjs.charifund.wowtheme7.com/assets/images/banner/m-four.png'
                      alt='Image_inner'
                      data-aos='zoom-in'
                      data-aos-duration={1000}
                      data-aos-delay={300}
                    />
                  </div>
                </div>
                <div className='group'>
                  <div className='m-five move-image'>
                    <Image width={100} height={100}
                      src='https://nextjs.charifund.wowtheme7.com/assets/images/difference/thub-sm-two.png'
                      alt='Image_inner'
                      data-aos='fade-left'
                      data-aos-duration={1000}
                      data-aos-delay={300}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='shape-lg'>
        <Image width={100} height={100}
          src='/assets/images/banner/banner-three-bg.png'
          alt='Image_inner'
          data-aos='zoom-in'
          data-aos-duration={1000}
        />
      </div>
      <div className='sprade-shape'>
        <Image width={100} height={100}
          src='/assets/images/sprade-base.png'
          alt='Image_inner'
          className='base-img'
          data-aos='zoom-in'
          data-aos-duration={1000}
        />
      </div>
      <div className='parasuit'>
        <Image width={100} height={100} src='/assets/images/parasuit.png' alt='Image_inner' />
      </div>
    </section>
  );
};

export default BannerThree;
