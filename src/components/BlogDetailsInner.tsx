import Image from "next/image";

const BlogDetailsInner = () => {
  return (
    <section className='blog-main cm-details'>
      <div className='container'>
        <div className='row gutter-60'>
          <div className='col-12 col-xl-8'>
            <div className='cm-details__content'>
              <div
                className='cm-details__poster'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <Image width={230} height={300} src='/assets/images/event/poster.png' alt='Image_inner' />
              </div>
              <div className='cm-details-meta'>
                <p>
                  <i className='fa-solid fa-calendar-days' />
                  02 Apr 2021
                </p>
                <p>
                  <i className='fa-solid fa-location-dot' />
                  684 West College St. Sun City, USA
                </p>
              </div>
              <div className='cm-group cta'>
                <h3 className='title-animation_inner'>
                  Give african childrens a good education
                </h3>
                <p>
                  Charity and Donation is a categorys that involves giving
                  financial category that involves giving financial or material
                  support various causes organizations. It allows individuals
                  towards the a addressing social category that involves giving
                  financial or material support various causes of organizations.
                  It allows individuals towards addressing social
                </p>
                <p>
                  Charity and Donation is a categorys that involves giving
                  financial category that involves giving financial or material
                  support various causes organizations.
                </p>
              </div>
              
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsInner;
