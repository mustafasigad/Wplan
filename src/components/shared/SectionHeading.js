// src/components/shared/SectionHeading.js
import { Heading } from '@chakra-ui/react';

export default function SectionHeading({ children, ...props }) {
  return (
    <Heading
      textAlign="center"
      fontWeight="light"
      letterSpacing="wider"
      color="brand.400"
      mb={16}
      {...props}
    >
      {children}
    </Heading>
  );
}