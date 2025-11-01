"use client";

import React, { useEffect, useRef, useState } from "react";

interface ProgressBarProps {
  percent?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percent = "0%" }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    // ✅ store ref snapshot to avoid cleanup warning
    const element = wrapperRef.current;
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    if (inView && barRef.current && valueRef.current) {
      const target = parseInt(percent, 10);
      let current = 0;

      const interval = setInterval(() => {
        if (barRef.current && valueRef.current) {
          if (current <= target) {
            barRef.current.style.width = `${current}%`;
            valueRef.current.textContent = `${current}%`;
            current++;
          } else {
            clearInterval(interval);
          }
        }
      }, 15);

      // ✅ Cleanup the interval when component unmounts
      return () => clearInterval(interval);
    }
  }, [inView, percent]);

  return (
    <>
      <div className="cause-progress__intro">
        <p>
          <span>Donation</span>
          <span className="percent-value" ref={valueRef}></span>
        </p>
      </div>

      <div className="cause-progress__bar" ref={wrapperRef}>
        <div className="progress-bar">
          <div className="progress-bar-percent" ref={barRef}></div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
