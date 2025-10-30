"use client";
import dynamic from "next/dynamic";
import InitializeAOS from "./InitializeAOS";

const AOSWrapper = dynamic(() => import("../../../dev-app/src/helper/AOSWrapper"), {
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
