import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import styles from "@/styles/vishal.module.css";
const ScrollAnimation = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <InView>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          className={inView ? `${styles.animate_fadeIn}` : ""}
        >
          {children}
        </motion.div>
      )}
    </InView>
  );
};

export default ScrollAnimation;
