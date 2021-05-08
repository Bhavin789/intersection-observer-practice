import { MutableRefObject, useEffect, useState } from "react";

const useObserver = ({
  targetRef,
  options,
}: {
  targetRef: MutableRefObject<HTMLDivElement | null>;
  options: any;
}) => {
  const [isVisible, setIsVisible] = useState(false);

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
  }, [observer, targetRef]);

  return { isVisible };
};

export default useObserver;
