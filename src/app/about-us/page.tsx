import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import BreadcrumbOne from "@/components/BreadcrumbOne";
import CustomCursor from "@/helper/CustomCursor";
import DifferenceTwo from "@/components/DifferenceTwo";
import TestimonialTwo from "@/components/TestimonialTwo";
import FooterOne from "@/components/FooterOne";
import AOSWrap from "@/helper/AOSWrap";

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

        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;
