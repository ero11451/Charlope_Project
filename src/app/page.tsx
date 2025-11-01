
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import TestimonialTwo from "@/components/TestimonialTwo";
import DifferenceOne from "@/components/DifferenceOne";
import FooterOne from "@/components/FooterOne";
import HeaderTwo from "@/components/HeaderTwo";
import Preloader from "@/components/Preloader";
import CommitTwo from "@/components/CommitTwo";
import CommunityTwo from "@/components/CommunityTwo";
import BannerThree from "@/components/BannerThree";
// import CommunityThree from "@/components/CommunityThree";

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
        <HeaderTwo />

        {/* BannerOne */}
        <BannerThree />

        {/* DifferenceOne */}
        <DifferenceOne />
      {/* <div className="mt-5 pt-5">
        <CommunityThree />

      </div> */}
  

        <CommunityTwo />
        {/* TestimonialTwo */}
        <TestimonialTwo />

        {/* TeamOne */}
        <CommitTwo />

        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;
