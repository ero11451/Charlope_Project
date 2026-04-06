import Image from "next/image";

const Team = () => {
  return (
    <section
      className='team'
      style={{
        backgroundImage: "url(/assets/images/bg-one.png)",
      }}
    >
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-lg-10 col-xl-6'>
            <div
              className='section__header text-center'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <span className='sub-title'>
                <i className='icon-donation' />
                Start donating to help people.
              </span>
              <h2 className='title-animation_inner'>
                Meet Our  <span className="my-2">Team</span> members
              </h2>
            </div>
          </div>
        </div>
        <div className='row '>
          <div className='col-12 col-sm-6 col-xl-4'>
            <div
              className='team__single-wrapper'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={300}
            >
              <div className='team__single van-tilt'>
                <div className='team__single-thumb'>
                  <Image src='/assets/images/founder.jpeg'  width={400} height={200} alt='Image_inner' />

                </div>
                <div className='team__single-content'>
                  <h6>
                    Imariabe and Hope Omoregbee</h6>
                  <p>Founder</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-xl-4'>
            <div
              className='team__single-wrapper'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <div className='team__single van-tilt'>
                <div className='team__single-thumb '>
                  <Image src='/assets/images/Evans_Osaigbovo_Program_officer.jpeg'  width={400} height={200} alt='Image_inner' />
                  
                </div>
                <div className='team__single-content'>
                  <h6>
                    Evans Osaigbovo
                  </h6>
                  <p>Program officer</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-xl-4'>
            <div
              className='team__single-wrapper'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={300}
            >
              <div className='team__single van-tilt'>
                <div className='team__single-thumb'>
                  <Image src='/assets/images/Israel_Adodo_Legal_adviser.jpeg' width={400} height={200} alt='Image_inner'  />
                </div>
                <div className='team__single-content'>
                  <h6>
                    Israel Adodo
                  </h6>
                  <p>Legal adviser</p>
                </div>
              </div>
            </div>
          </div>
           <div className='col-12 col-sm-6 col-xl-4'>
            <div
              className='team__single-wrapper'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={300}
            >
              <div className='team__single van-tilt'>
                <div className='team__single-thumb'>
                  <Image src='/assets/images/Samue_Adewo_Human_Resources_Officer.jpeg' width={400} height={200} alt='Image_inner'  />
                </div>
                <div className='team__single-content'>
                  <h6>Samuel Adewo
                  </h6>
                  <p>
 Human Resources Officer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='row'>
          <div className='col-12'>
            <div className='section__cta cta text-center'>
              <Link
                href='/our-team'
                aria-label='our team'
                title='our team'
                className='btn--primary'
              >
                View All
                <i className='fa-solid fa-arrow-right' />
              </Link>
            </div>
          </div>
        </div> */}
      </div>
      <div className='spade'>
        <Image src='https://nextjs.charifund.wowtheme7.com/assets/images/sprade-green.png' fill alt='Image_inner' />
      </div>
    </section>
  );
};

export default Team;
