/** @format */

"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const useComponentInView = ({ from = 0, to, duration=30 }: { from: number; to: number, duration?: number }) => {
  const [value, setValue] = useState(from);

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        if (value < to) {
          setValue((prevValue) => prevValue + 1);
        } else {
          clearInterval(interval);
        }
      }, duration);
      return () => clearInterval(interval);
    }
  }, [value, isInView, to, duration]);

  return { ref, value };
};

export default useComponentInView;
