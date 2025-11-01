import Image from "next/image";
import Link from "next/link";

const ErrorInner = () => {
  return (
    <section className='error'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-xl-7'>
            <div
              className='error__content text-center'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={300}
            >
              <div className='thumb'>
                <Image width={200} height={250} src='https://nextjs.charifund.wowtheme7.com/assets/images/error.png' alt='Image_inner' />
              </div>
              <h3 className='title-animation_inner'>Page Not Found</h3>
              <p>
                It could have been removed, renamed, or temporarily unavailable.
                Try searching for what you are looking for.
              </p>
              <div className='cta'>
                <Link
                  href='/'
                  aria-label='back to home'
                  title='back to home'
                  className='btn--primary'
                >
                  Back To Home <i className='fa-solid fa-arrow-right' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='spade'>
        <Image width={200} height={250}
          src='https://nextjs.charifund.wowtheme7.com/assets/images/blog/spade-base.png'
          alt='Image_inner'
          className='base-img'
        />
      </div>
      <div className='spade-green'>
        <Image width={200} height={250} src='https://nextjs.charifund.wowtheme7.com/assets/images/sprade-green.png' alt='Image_inner' />
      </div>
    </section>
  );
};

export default ErrorInner;
