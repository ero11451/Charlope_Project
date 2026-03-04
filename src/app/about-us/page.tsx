import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import BreadcrumbOne from "@/components/BreadcrumbOne";
import CustomCursor from "@/helper/CustomCursor";
import DifferenceTwo from "@/components/DifferenceTwo";
import TestimonialTwo from "@/components/TestimonialTwo";
import FooterOne from "@/components/FooterOne";
import AOSWrap from "@/helper/AOSWrap";
import Team from "@/components/Team";

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

        {/* BreadcrumbOne */}
        <BreadcrumbOne title='About Us' />

        {/* DifferenceTwo */}
        <DifferenceTwo />

        {/* TeamOne */}
        <TestimonialTwo />
        {/* FaqOne */}
        {/* <FaqOne /> */}

        {/* Team section */}
        <Team />
        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;
