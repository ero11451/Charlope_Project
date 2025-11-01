import Image from "next/image";
// import Link from "next/link";

const CommunityTwo = () => {
  return (
    <section className='community fc-community'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12'>
            <div
              className='community-donation'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <div className='community-donation__inner'>
                <div className='row gutter-30 align-items-center'>
                  <div className='col-12 col-md-8 col-xl-8'>
                    <div className='section__header mb-0'>
                      <span className='sub-title'>
                        We are always open for children
                      </span>
                      <h2 className='title-animation_inner mt-0 hb'>
                        Support for eating funds for hungry people
                      </h2>
                    </div>
                  </div>
                  <div className='col-12 col-md-4 col-xl-4'>
                    <div className='text-start text-xl-end'>
                      <span className='tag-c'>Donate Now 24/7 Support</span>
                    </div>
                  </div>
                </div>
                <div className='unity'>
                  <Image width={100} height={100} src='https://nextjs.charifund.wowtheme7.com/assets/images/unit.png' alt='Image_inner' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='parasuit'>
        <Image width={100} height={100} src='https://nextjs.charifund.wowtheme7.com/assets/images/parasuit.png' alt='Image_inner' />
      </div>
      <div className='spade'>
        <Image width={100} height={100} src='https://nextjs.charifund.wowtheme7.com/assets/images/fc-twelve.png' alt='Image_inner' />
      </div>
      <span className='dn-now'>Donate Now</span>
    </section>
  );
};

export default CommunityTwo;
