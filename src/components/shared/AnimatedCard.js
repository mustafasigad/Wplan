// src/components/shared/AnimatedCard.js
import { Box, useTheme } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const AnimatedCard = ({ children, delay = 0, ...props }) => {
  const theme = useTheme();
  
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: "easeOut"
      }}
      whileHover={{
        y: -5,
        boxShadow: theme.shadows.xl,
        transition: { duration: 0.3 }
      }}
      bg="white"
      p={6}
      borderRadius="md"
      boxShadow="lg"
      cursor="pointer"
      {...props}
    >
      {children}
    </MotionBox>
  );
};

export default AnimatedCard;