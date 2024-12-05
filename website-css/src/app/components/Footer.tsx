// components/Footer.js
"use client"
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <p>&copy; 2024 | All Rights Reserved.</p>

      {/* Scroll-to-Top Icon */}
      <button
        onClick={scrollToTop}
        className="scroll-top-btn"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}
