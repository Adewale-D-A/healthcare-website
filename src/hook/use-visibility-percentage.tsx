"use client";
import { useEffect, useRef, useState } from "react";

export default function useVisibilityPercentage(
  thresholds = Array.from({ length: 101 }, (_, i) => i / 100)
) {
  const ref = useRef(null) as any;
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;
        setPercentage(Math.round(ratio * 100));
      },
      {
        threshold: thresholds,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [thresholds]);

  return [ref, percentage];
}
