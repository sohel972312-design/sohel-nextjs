"use client";

import { useEffect } from "react";

export default function TiltInit() {
  useEffect(() => {
    const init = async () => {
      const VanillaTilt = (await import("vanilla-tilt")).default;
      VanillaTilt.init(document.querySelectorAll(".js-tilt"), {
        scale: 1,
        reset: true,
        glare: false,
        speed: 400,
      });
    };
    init();
  }, []);

  return null;
}
