"use client";

import React, { useState, useEffect } from "react";

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-5 right-10 z-50">
      <button
        type="button"
        onClick={scrollToTop}
        className={`px-4 py-2 rounded-full text-white shadow-lg ${
          visible ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          marginTop: "calc(100vh + 50px)",
          marginRight: "10px",
          marginBottom: "80px",
          placeSelf: "end",
          fontFamily: "sans-serif",
        }}
      >
        <span className="text-3xl">Back to Top ↑</span>
      </button>
    </div>
  );
};

export default ScrollToTopButton;
