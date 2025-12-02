import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface UseGsapAnimationsOptions {
  fadeIn?: boolean;
  slideUp?: boolean;
  slideLeft?: boolean;
  slideRight?: boolean;
  stagger?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  scrub?: boolean;
  start?: string;
  end?: string;
  markers?: boolean;
}

/**
 * Hook for applying GSAP animations with ScrollTrigger
 */
export const useGsapAnimations = (
  ref: RefObject<HTMLElement> | RefObject<HTMLElement[]>,
  options: UseGsapAnimationsOptions = {}
) => {
  const {
    fadeIn = true,
    slideUp = false,
    slideLeft = false,
    slideRight = false,
    stagger = 0,
    duration = 0.8,
    delay = 0,
    ease = "power3.out",
    scrub = false,
    start = "top 80%",
    end = "bottom 20%",
    markers = false,
  } = options;

  useEffect(() => {
    if (!ref.current) return;

    const elements = Array.isArray(ref.current) ? ref.current : [ref.current];
    const validElements = elements.filter((el) => el !== null);

    if (validElements.length === 0) return;

    const fromVars: gsap.TweenVars = {};
    const toVars: gsap.TweenVars = { duration, delay, ease };

    if (fadeIn) {
      fromVars.opacity = 0;
      toVars.opacity = 1;
    }

    if (slideUp) {
      fromVars.y = 50;
      toVars.y = 0;
    }

    if (slideLeft) {
      fromVars.x = 50;
      toVars.x = 0;
    }

    if (slideRight) {
      fromVars.x = -50;
      toVars.x = 0;
    }

    const scrollTriggerConfig: ScrollTrigger.Vars = {
      trigger: validElements[0],
      start,
      end,
      markers,
      toggleActions: "play none none reverse",
    };

    if (scrub) {
      scrollTriggerConfig.scrub = true;
    }

    toVars.scrollTrigger = scrollTriggerConfig;

    if (stagger > 0) {
      toVars.stagger = stagger;
    }

    gsap.fromTo(validElements, fromVars, toVars);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [
    ref,
    fadeIn,
    slideUp,
    slideLeft,
    slideRight,
    stagger,
    duration,
    delay,
    ease,
    scrub,
    start,
    end,
    markers,
  ]);
};

/**
 * Animate section titles on scroll
 */
export const useScrollTriggerAnimation = (
  selector: string,
  options: gsap.TweenVars = {}
) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    if (elements.length === 0) return;

    elements.forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          ...options,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [selector, options]);
};

/**
 * Stagger animation for lists/grids
 */
export const useStaggerAnimation = (
  containerRef: RefObject<HTMLElement>,
  childSelector: string,
  options: UseGsapAnimationsOptions = {}
) => {
  const {
    stagger = 0.1,
    duration = 0.6,
    delay = 0,
    ease = "power2.out",
    start = "top 80%",
  } = options;

  useEffect(() => {
    if (!containerRef.current) return;

    const children = containerRef.current.querySelectorAll(childSelector);

    if (children.length === 0) return;

    gsap.fromTo(
      children,
      {
        opacity: 0,
        y: 30,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration,
        delay,
        stagger,
        ease,
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [containerRef, childSelector, stagger, duration, delay, ease, start]);
};

/**
 * Parallax effect for elements
 */
export const useParallax = (
  ref: RefObject<HTMLElement>,
  speed: number = 0.5
) => {
  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      y: () => window.innerHeight * speed,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [ref, speed]);
};

/**
 * Text reveal animation (split by words or characters)
 */
export const useTextReveal = (
  ref: RefObject<HTMLElement>,
  splitBy: "words" | "chars" = "words"
) => {
  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const text = element.textContent || "";

    if (!text) return;

    const words = text.split(" ");
    element.innerHTML = "";

    words.forEach((word, index) => {
      const span = document.createElement("span");
      span.style.display = "inline-block";
      span.style.opacity = "0";
      span.textContent = word;
      element.appendChild(span);

      if (index < words.length - 1) {
        element.appendChild(document.createTextNode(" "));
      }
    });

    const spans = element.querySelectorAll("span");

    gsap.to(spans, {
      opacity: 1,
      duration: 0.4,
      stagger: 0.03,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      element.textContent = text;
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [ref, splitBy]);
};

/**
 * Magnetic button effect
 */
export const useMagneticEffect = (ref: RefObject<HTMLElement>) => {
  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(element, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.5)",
      });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref]);
};

/**
 * Scale on scroll animation
 */
export const useScaleOnScroll = (
  ref: RefObject<HTMLElement>,
  scale: [number, number] = [0.8, 1]
) => {
  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      {
        scale: scale[0],
        opacity: 0,
      },
      {
        scale: scale[1],
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [ref, scale]);
};

export default useGsapAnimations;
