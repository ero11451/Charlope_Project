"use client"

import { Cause } from "@/components/Admin/CausesList";
import BreadcrumbOne from "@/components/BreadcrumbOne";
import CauseInner from "@/components/CauseInner";
import FooterOne from "@/components/FooterOne";
import HeaderTwo from "@/components/HeaderTwo";
import Preloader from "@/components/Preloader";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import { useEffect, useState } from "react";

export default function Page()  {
  const [causes, setCauses] = useState<Cause<string>[]>([]);
  const fetchCauses =  () => {
     fetch("/api/causes").then((res) => res.json()).then((data) => setCauses(data)) ;
    ;
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
