
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import CtaSectionOne from "@/components/CtaSectionOne";
import DifferenceOne from "@/components/DifferenceOne";
import FooterOne from "@/components/FooterOne";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
// import CommitTwo from "@/components/CommitTwo";
import CommunityTwo from "@/components/CommunityTwo";
import BannerOne from "@/components/BannerOne";
import BlogOne from "@/components/BlogOne";
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

        {/* DifferenceOne */}
        <DifferenceOne />
        {/* <div className="mt-5 pt-5">
        <CommunityThree />
<
      </div> */}

        <CommunityTwo />
        {/* TestimonialTwo */}
        {/* <TestimonialTwo /> */}

        {/* TeamOne */}
        <TestimonialTwo />

        <CtaSectionOne />

        <CauseSliderTwo />
        <BlogOne />
        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;
