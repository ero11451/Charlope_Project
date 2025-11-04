"use client"

import BreadcrumbOne from "@/components/BreadcrumbOne";
import ContactUsInner from "@/components/ContactUsInner";
import FooterOne from "@/components/FooterOne";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";



const ContactUs = () => {
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
        <BreadcrumbOne title='Contact Us' />

        {/* ContactUsInner */}
        <ContactUsInner />

        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default ContactUs;
