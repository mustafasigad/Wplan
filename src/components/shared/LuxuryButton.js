// src/components/shared/LuxuryButton.js
import { Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionButton = motion(Button);

export default function LuxuryButton({ children, ...props }) {
  return (
    <MotionButton
      variant="luxury"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </MotionButton>
  );
}