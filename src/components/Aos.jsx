import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedOnScroll = ({
  threshold = 0.2,
  duration = 0.5,
  easing = "easeOut",
  direction = "left", // Added direction prop with a default value
  ...rest
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: threshold,
  });

  const variants = {
    fromLeft: {
      hidden: {
        opacity: 0,
        x: -20,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: duration,
          ease: easing,
        },
      },
    },
    fromRight: {
      // New variant for animating from the right
      hidden: {
        opacity: 0,
        x: 20,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: duration,
          ease: easing,
        },
      },
    },
    fromBottom: {
      // New variant for animating from the right
      hidden: {
        opacity: 0,
        y: 20,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: duration,
          ease: easing,
        },
      },
    },
  };

  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants[direction]} // Use the selected variant based on direction prop
        {...rest}
      />
    </div>
  );
};

export default AnimatedOnScroll;
