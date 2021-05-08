import React, { useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const targetRef = useRef(null);

  return (
    <div className="root">
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
