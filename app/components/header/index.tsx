"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import { useState } from "react";
export const Header = () => {
  const [showHamburger, setShowHamburger] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 z-[100] w-full">
        <div className={styles.headerMain}>
          <div className="flex items-center justify-between w-full">
            <Link className="px-4 py-6 lg:px-0" href="/">
              <Image src="/main-logo.svg" alt="logo" width={105} height={40} />
            </Link>
            <button
              onClick={() => setShowHamburger(!showHamburger)}
              className={styles.hamburgerMenu}
            >
              <Image
                src={showHamburger ? "/icon-close.svg" : "/icon-hamburger.svg"}
                alt="hamburger"
                width={30}
                height={24}
              />
            </button>
          </div>
        </div>
      </header>

      <div className={`${styles.mobileMenu} ${showHamburger && styles.show}`}>
        <div className="flex justify-between w-full">
          <span className="text-white">Uni Paychek</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fff"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </>
  );
};
