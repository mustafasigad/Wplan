// src/components/shared/LuxuryEffects.js
import { Box, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

export const LuxuryShimmer = ({ children }) => (
  <Box
    position="relative"
    _before={{
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
      animation: `${shimmer} 3s infinite linear`
    }}
  >
    {children}
  </Box>
);

export const LuxuryHover = motion(Box);
LuxuryHover.defaultProps = {
  whileHover: { 
    scale: 1.05,
    transition: { duration: 0.3 }
  },
  whileTap: { scale: 0.95 }
};

export const ParallaxScroll = ({ children, offset = 50 }) => {
  return (
    <motion.div
      initial={{ y: offset }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 30
      }}
    >
      {children}
    </motion.div>
  );
};