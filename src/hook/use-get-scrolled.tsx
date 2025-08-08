"use client";
import { useEffect, useState } from "react";

/**
 * useInView
 * @param {Object}   options – IntersectionObserver options
 * @return {[ref, isInView]} –
 *   ref ➜ attach to the element you want to watch
 *   isInView ➜ boolean that flips true when element crosses the threshold
 */
export default function useGetScrolled(options = { offset: 500 }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > options.offset);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [options]);

  return [scrolled];
}
