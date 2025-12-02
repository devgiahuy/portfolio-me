import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Initialize GSAP and configure plugins
 * Call this once at the start of your app
 */
export const initGSAP = () => {
  // Register plugins
  gsap.registerPlugin(ScrollTrigger);

  // Configure GSAP defaults
  gsap.config({
    force3D: true,
    nullTargetWarn: false,
  });

  // Set default ease and duration
  gsap.defaults({
    ease: "power3.out",
    duration: 0.8,
  });

  // Configure ScrollTrigger defaults
  ScrollTrigger.config({
    limitCallbacks: true,
    syncInterval: 150,
  });

  // Refresh ScrollTrigger on window resize
  ScrollTrigger.defaults({
    toggleActions: "play none none reverse",
    markers: false, // Set to true for debugging
  });

  return gsap;
};

/**
 * Clean up all GSAP animations and ScrollTriggers
 * Use this on unmount or page navigation
 */
export const cleanupGSAP = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  gsap.killTweensOf("*");
};

/**
 * Refresh all ScrollTrigger instances
 * Use this after DOM changes or layout shifts
 */
export const refreshScrollTrigger = () => {
  ScrollTrigger.refresh();
};

export default {
  initGSAP,
  cleanupGSAP,
  refreshScrollTrigger,
};
