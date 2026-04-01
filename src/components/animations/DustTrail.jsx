import { useEffect, useRef } from "react";

/**
 * DustTrail Component
 * 
 * Features:
 * - Interpolated path spawning for high density.
 * - Optimized performance using direct DOM manipulation.
 * - Directional motion (Upward).
 * - Responsive: Disables on touch devices.
 */
const DustTrail = () => {
  const containerRef = useRef(null);
  const isTouchDevice = useRef(false);
  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Detect touch device
    isTouchDevice.current =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouchDevice.current) return;

    const createParticle = (x, y) => {
      if (!containerRef.current) return;

      const particle = document.createElement("div");
      const size = Math.random() * 2 + 3; // 3px to 5px
      const lifetime = 600; // 0.6 seconds

      // Optimized style assignment
      Object.assign(particle.style, {
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: "#FDBA74",
        borderRadius: "50%",
        opacity: "0.5",
        filter: "blur(0.8px)",
        pointerEvents: "none",
        zIndex: "9999",
        willChange: "transform, opacity",
        transform: "translate(-50%, -50%)",
        transition: `transform ${lifetime}ms cubic-bezier(0.1, 0.5, 0.2, 1), opacity ${lifetime}ms linear`,
      });

      containerRef.current.appendChild(particle);

      // Trigger animation: Move Up (-12px to -20px) and fade
      requestAnimationFrame(() => {
        const driftX = (Math.random() - 0.5) * 4; // Minimal horizontal drift (±2px)
        const driftY = -12 - Math.random() * 8; // -12px to -20px
        
        particle.style.transform = `translate(calc(-50% + ${driftX}px), calc(-50% + ${driftY}px)) scale(0.5)`;
        particle.style.opacity = "0";
      });

      // Cleanup
      setTimeout(() => {
        if (particle.parentNode === containerRef.current) {
          containerRef.current.removeChild(particle);
        }
      }, lifetime);
    };

    const handleMouseMove = (e) => {
      const { clientX: currX, clientY: currY } = e;
      const { x: prevX, y: prevY } = lastMousePos.current;

      // Initialize on first move
      if (prevX === 0 && prevY === 0) {
        lastMousePos.current = { x: currX, y: currY };
        return;
      }

      const dx = currX - prevX;
      const dy = currY - prevY;
      const distance = Math.hypot(dx, dy);

      // Interpolation logic: Spawn particles every 4 pixels
      const interpolationSteps = Math.max(1, Math.floor(distance / 4));

      for (let i = 0; i <= interpolationSteps; i++) {
        const t = i / interpolationSteps;
        const x = prevX + dx * t;
        const y = prevY + dy * t;
        createParticle(x, y);
      }

      lastMousePos.current = { x: currX, y: currY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden select-none"
      aria-hidden="true"
    />
  );
};

export default DustTrail;
