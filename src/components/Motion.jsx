import { motion } from 'framer-motion';

export const fadeUp = {
  hidden: { opacity: 0.96, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.06, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.38, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}
