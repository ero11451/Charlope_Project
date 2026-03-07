
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import CtaSectionOne from "@/components/CtaSectionOne";
import FooterOne from "@/components/FooterOne";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import CommunityTwo from "@/components/CommunityTwo";
import BannerOne from "@/components/BannerOne";
import CauseSliderTwo from "@/components/CauseSliderTwo";
import TestimonialTwo from "@/components/TestimonialTwo";

export const metadata = {
  title: "Charifund | Nonprofit & Fundraising Charity NEXT JS Template",
  description: "Nonprofit & Fundraising Charity NEXT JS Template.",
};

const page = () => {
  return (
    <AOSWrap>
      <section className='page-wrapper'>
        {/* Preloader */}
        <Preloader />

        {/* CustomCursor  */}
        <CustomCursor />

        {/* HeaderOne */}
        <Header />

        {/* BannerOne */}
        <BannerOne />

        <CommunityTwo />
        <br /><br />
        {/* DifferenceOne */}
        {/* <DifferenceOne /> */}
        {/* <div className="mt-5 pt-5">
        <CommunityThree />
<
      </div> */}

        {/* TestimonialTwo */}
        {/* <TestimonialTwo /> */}

        {/* TeamOne */}
        <TestimonialTwo />

        <CtaSectionOne />

        {/* <CauseSliderTwo /> */}
        {/* <BlogOne /> */}
        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;
