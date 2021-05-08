import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const targetRef = useRef<HTMLDivElement | null>(null);
  const rootRef = useRef(null);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries: any) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  }, options);

  useEffect(() => {
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [observer]);

  return (
    <div className="root" ref={rootRef}>
      <div className="isVisible">
        {isVisible ? "✅ Visible" : "❌ Not visible"}
      </div>
      <div className="section"></div>
      <div className="target" ref={targetRef}>
        target element
      </div>
    </div>
  );
}

export default App;
