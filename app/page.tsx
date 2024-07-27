import dynamic from "next/dynamic";

import { Header } from "./components/header";
import VideoSection from "./components/video-section";

const BenifitsSection = dynamic(() => import("./components/benifits"), {
  ssr: false,
});
const CreditInfoSection = dynamic(() => import("./components/credit-info"), {
  ssr: false,
});
const CardBenifitsSection = dynamic(
  () => import("./components/card-benifits-section"),
  {
    ssr: false,
  }
);
const PartnershipSection = dynamic(
  () => import("./components/partnership-section"),
  {
    ssr: false,
  }
);
const GuideLinesSection = dynamic(() => import("./components/guidelines"), {
  ssr: false,
});
const ApplyNow = dynamic(() => import("./components/apply-now"), {
  ssr: false,
});
const DownloadAppSection = dynamic(() => import("./components/download-app"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Header />
      <VideoSection />
      <BenifitsSection />
      <CreditInfoSection />
      <CardBenifitsSection />
      <PartnershipSection />
      <GuideLinesSection />
      <DownloadAppSection />
      <ApplyNow />
    </>
  );
}
