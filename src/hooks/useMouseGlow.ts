import { useEffect } from "react";

export const useMouseGlow = () => {
  useEffect(() => {
    // Create glow element if it doesn't exist
    let glow = document.getElementById("mouse-glow");
    if (!glow) {
      glow = document.createElement("div");
      glow.id = "mouse-glow";
      glow.style.position = "fixed";
      glow.style.width = "400px";
      glow.style.height = "400px";
      glow.style.borderRadius = "50%";
      glow.style.pointerEvents = "none";
      glow.style.zIndex = "9999";
      glow.style.opacity = "0";
      glow.style.transition = "opacity 0.3s ease";
      glow.style.background =
        "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0.05) 40%, transparent 70%)";
      document.body.appendChild(glow);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const glow = document.getElementById("mouse-glow");
      if (glow) {
        // Position the glow so its center is slightly below the cursor
        glow.style.left = `${e.clientX - 200}px`;
        glow.style.top = `${e.clientY - 150}px`; // Offset upward so glow appears below cursor
        glow.style.opacity = "1";
      }
    };

    const handleMouseLeave = () => {
      const glow = document.getElementById("mouse-glow");
      if (glow) {
        glow.style.opacity = "0";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      // Clean up glow element
      const glowElement = document.getElementById("mouse-glow");
      if (glowElement) {
        glowElement.remove();
      }
    };
  }, []);
};
