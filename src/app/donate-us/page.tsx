import BreadcrumbOne from "@/components/BreadcrumbOne";
import DonateInner from "@/components/DonateInner";
import FooterOne from "@/components/FooterOne";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";


export const metadata = {
  title: "",
  description: "",
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
        <BreadcrumbOne title='Donate Us' />

        {/* DonateInner */}
        <DonateInner />

        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;
