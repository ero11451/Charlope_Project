"use client"

import BreadcrumbOne from "@/components/BreadcrumbOne";
import CauseInner from "@/components/CauseInner";
import FooterOne from "@/components/FooterOne";
import HeaderTwo from "@/components/HeaderTwo";
import Preloader from "@/components/Preloader";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import { useEffect, useState } from "react";

const page = () => {
  const [causes, setCauses] = useState([]);
  const fetchCauses = async () => {
    const res = await fetch("/api/causes");
    const data = await res.json();
    setCauses(data);
  };

  useEffect(() => {
    fetchCauses();
  }, []);
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
        <BreadcrumbOne title='Our Causes' />

        {/* CauseInner */}
        <CauseInner  causes={causes} />

        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;
