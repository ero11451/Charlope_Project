import HeaderTwo from "@/components/HeaderTwo";
import Preloader from "@/components/Preloader";
import BreadcrumbOne from "@/components/BreadcrumbOne";
import CustomCursor from "@/helper/CustomCursor";
import DifferenceTwo from "@/components/DifferenceTwo";
import FaqOne from "@/components/FaqOne";
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
        <HeaderTwo />

        {/* BreadcrumbOne */}
        <BreadcrumbOne title='About Us' />

        {/* DifferenceTwo */}
        <DifferenceTwo />

        {/* FaqOne */}
        <FaqOne />

        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;
