import { useRef } from "react";
import "./App.css";

import useObserver from "./useObserver";

function App() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const rootRef = useRef(null);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const { isVisible } = useObserver({ targetRef, options });

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
