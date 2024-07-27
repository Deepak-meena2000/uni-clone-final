import Image from "next/image";
import styles from "./index.module.css";
import { ImagesEnum } from "@/app/constants/images";

const PartnershipSection = () => {
  return (
    <section className={`${styles.section} ${styles.sectionLg}`}>
      <div className={`${styles.container} ${styles.containerMd}`}>
        <p className={`${styles.title} ${styles.titleMd}`}>
          <span>
            At Uni, we’re committed to{" "}
            <span className={styles.primaryGradient}>
              delivering an unmatched credit experience
            </span>{" "}
            for millions of Indians.
          </span>
        </p>
        <p className={styles.subtitle}>
          On this mission, we’ve partnered with some of the best in the
          business.
        </p>
        <div className={styles.partnerLogos}>
          <div
            className={`${styles.partnerLogoWrapper} ${styles.partnerLogoWrapperMd}`}
          >
            <Image
              className={styles.partnerLogo}
              src={ImagesEnum.SBM}
              alt="SBM Bank"
              width={150}
              height={50}
            />
          </div>
          <div
            className={`${styles.partnerLogoWrapper} ${styles.partnerLogoWrapperMd}`}
          >
            <Image
              className={styles.partnerLogo}
              src={ImagesEnum.YES_BANK}
              alt="Yes Bank"
              width={150}
              height={50}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
