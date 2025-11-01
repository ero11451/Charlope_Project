

import Link from "next/link";
import ProgressBar from "../helper/ProgressBar";
import Image from "next/image";
import { Cause } from "./Admin/CausesList";
const CauseInner = ({ causes }: { causes: Cause<string>[] }) => {

  return (
    <section className='cause cause-three-alt'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-8 col-xl-7'>
            <div
              className='section__header mb-60 text-center'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <span className='sub-title'>
                <i className='icon-donation' />
                Start donating poor people
              </span>
              <h2 className='title-animation_inner'>
                Be the reason of someone
                <span>smiles</span> Causes
              </h2>
            </div>
          </div>
        </div>
        <div className='row gutter-30'>
          {causes.map((c: Cause<string>) => <div  key={c.id} className='col-12 col-md-6 col-xl-4 col-xxl-3'>
            <div
            
              className='cause__slider-inner'
              data-aos='fade-up'
              data-aos-duration={1000}
            >  <div className='cause__slider-single van-tilt'>
                <div className='thumb'>
                  <Link href='/cause-details'>
                    <Image width={300} height={200} src='https://nextjs.charifund.wowtheme7.com/assets/images/cause/one.png' alt='Image_inner' />
                  </Link>
                  <div className='tag'>
                    <Link href='/our-causes'>{c.category}</Link>
                  </div>
                </div>
                <div className='content'>
                  <h6>
                    <Link href='/cause-details'>{c.title}</Link>
                  </h6>
                  <p>   {c.description}     </p>
                </div>
                <div className='cause__slider-cta'>
                  <div className='cause__progress progress-bar-single'>
                    {/* ProgressBar */}
                    <ProgressBar percent={c.percentage} />
                    {/* ProgressBar */}
                    <div className='cause-progress__goal'>
                      <p>
                        Raised: <span className='raised'>{c.raised} </span>
                      </p>
                      <p>
                        Goal: <span className='goal'>{c.goal} </span>
                      </p>
                    </div>
                  </div>
                  <div className='cause__cta'>
                    <Link
                      href='/donate-us'
                      aria-label='donate now'
                      title='donate now'
                      className='btn--secondary'
                    >
                      Donate Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>)}



        </div>
        {/* <div className='row'>
          <div className='col-12'>
            <div
              className='pagination-wrapper'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <ul className='pagination main-pagination'>
                <li>
                  <button>
                    <i className='fa-solid fa-angles-left' />
                  </button>
                </li>
                <li>
                  <Link href='/blog-list'>1</Link>
                </li>
                <li>
                  <Link href='/blog-list' className='active'>
                    2
                  </Link>
                </li>
                <li>
                  <Link href='/blog-list'>3</Link>
                </li>
                <li>
                  <button>
                    <i className='fa-solid fa-angles-right' />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
      {/* <div className='spade'>
        <img src='https://nextjs.charifund.wowtheme7.com/assets/images/help/spade.png' alt='Image_inner' />
      </div> */}
    </section>
  );
};

export default CauseInner;
