"use client"

import { Cause } from "@/components/Admin/CausesList";
import BreadcrumbOne from "@/components/BreadcrumbOne";
import CauseInner from "@/components/CauseInner";
import CtaSectionOne from "@/components/CtaSectionOne";
import FooterOne from "@/components/FooterOne";
import Header from "@/components/Header";
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
        <Header />

        {/* BreadcrumbOne */}
        <BreadcrumbOne title='Our Programs' />


        {/* CauseInner */}
        <CauseInner  causes={causes} />

        {/* <CtaSectionOne /> */}

        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};
