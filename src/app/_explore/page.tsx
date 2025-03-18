'use client'

import { useEffect, useState } from "react";

export default function Page() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    const throttledScroll = () => {
      // Throttle the scroll updates
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [handleScroll, lastScrollY]);

  return (
    <div>
      {/* Header */}
      <div
        className={`fixed top-0 left-0 w-full text-gray-100 bg-blue-500  p-4 transition-transform duration-300 ${
          isVisible ? "translate-y-0 " : "-translate-y-full"
        }`}
      >
        This header hides on scroll down and shows on scroll up.
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {Array.from({ length: 50 }, (_, i) => (
          <p key={i}>Scroll to see the effect - {i + 1}</p>
        ))}
      </div>
    </div>
  );
}
