import { useEffect, useState } from "react";

export function scrollY() {
  const [scrollY, setScrollY] = useState<number>(0);
  const listener = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return scrollY;
}
