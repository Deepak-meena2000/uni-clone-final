import React, { useState } from "react";
import ThirdSection from "./components/third-section";
import FourthSection from "./components/fourth-section";
import FifthSection from "./components/fifth-section";
import SixthSection from "./components/sixth-section";
import SeventhSection from "./components/seventh-section";
import ApplyNow from "./components/apply-now";
import SecondSection from "./components/second-section";
import { Header } from "./components/header";
import VideoSection from "./components/video-section";

export default function Home() {
  return (
    <>
      <Header />
      <VideoSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />

      <ApplyNow />
    </>
  );
}
