"use client";
import dynamic from "next/dynamic";
import InitializeAOS from "./InitializeAOS";

const AOSWrapper = dynamic(() => import("./AOSWrapper"), {
  ssr: false,
});

const AOSWrap = ({ children }:any) => {
  return (
    <AOSWrapper>
      <InitializeAOS />
      {children}
    </AOSWrapper>
  );
};

export default AOSWrap;
