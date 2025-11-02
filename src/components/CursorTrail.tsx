import React, { useEffect } from 'react';
// We need these hooks from framer-motion!
import { motion, useMotionValue, useSpring } from 'framer-motion';
// And we need createPortal from react-dom
import { createPortal } from 'react-dom';

export default function CursorTrail() {
  // 1. Create motion values to track the mouse position.
  //    We start them at -100 to hide the cursor off-screen initially.
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // 2. Create spring-animated values.
  //    These will "chase" the x and y motion values, creating the smooth lag.
  //    Play with damping and stiffness to change the "feel"!
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    // Bail out on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    // 3. The mousemove listener *only* updates the target motion values.
    //    The spring does all the hard work of animating.
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
    };
    // We only want this effect to run once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // --- This is the new, declarative part! ---

  // Check for coarse pointer *again* to prevent rendering
  if (typeof document === 'undefined') {
    return null;
  }
  if (window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  const dotSize = 20;

  // 4. Use createPortal to render our dot outside the main React app,
  //    directly into the document body.
  return createPortal(
    <motion.div
      className="fixed rounded-full z-[9999] pointer-events-none"
      style={{
        // 5. Pass the springs directly to the style prop!
        x: springX,
        y: springY,
        // This is a trick to center the dot on the cursor
        // by offsetting it by half its size.
        left: -dotSize / 2,
        top: -dotSize / 2,
        width: dotSize,
        height: dotSize,
        background: 'linear-gradient(90deg,#7C3AED,#06B6D4)',
        // Add a blur to make it softer
        filter: 'blur(2px)',
      }}
    />,
    document.body
  );
}