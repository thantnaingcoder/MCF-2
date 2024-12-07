import React from "react";
import { useEffect, useState } from "react";
const BackToTop = ({ children }) => {
  const [show, setShow] = useState(false);
  const scroll = () => {
    const maxScrollY =
      document.documentElement.scrollHeight - window.innerHeight;
    if (window.scrollY > maxScrollY - maxScrollY / 3) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <div
      className={` z-50 fixed bottom-20 right-5 duration-300  ${
        show ? "opacity-100" : " pointer-events-none opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default BackToTop;
