"use client";


import dynamic from "next/dynamic";
import InitializeAOS from "./InitializeAOS";
import { ReactNode } from "react";

const AOSWrapper = dynamic(() => import("./AOSWrapper"), {
  ssr: false,
});

const AOSWrap = ({ children } : { children :ReactNode }) => {
  return (
    <AOSWrapper>
      <InitializeAOS />
      {children}
    </AOSWrapper>
  );
};

export default AOSWrap;
