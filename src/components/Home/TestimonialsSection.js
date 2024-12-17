// src/components/home/TestimonialsSection.js
import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Avatar,
  Icon,
  SimpleGrid
} from '@chakra-ui/react';
import { FaQuoteRight, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const MotionBox = motion(Box);

const testimonials = [
  {
    nameKey: "testimonialName1",
    textKey: "testimonialText1",
    image: "/api/placeholder/100/100",
    rating: 5
  },
  {
    nameKey: "testimonialName2",
    textKey: "testimonialText2",
    image: "/api/placeholder/100/100",
    rating: 5
  },
  {
    nameKey: "testimonialName3",
    textKey: "testimonialText3",
    image: "/api/placeholder/100/100",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const { t, language } = useLanguage();

  return (
    <Box py={20} bg="white">
      <Container maxW="container.xl">
        <VStack spacing={12} dir={language === 'ar' ? 'rtl' : 'ltr'}>
          <Box textAlign="center" maxW="3xl" mx="auto">
            <Heading
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="light"
              letterSpacing={language === 'ar' ? "normal" : "wider"}
              color="brand.400"
              mb={4}
              fontFamily={language === 'ar' ? "'Noto Serif Arabic', serif" : "'Cormorant Garamond', serif"}
            >
              {t('testimonialsTitle')}
            </Heading>
            <Text
              color="gray.600"
              fontSize={{ base: "lg", md: "xl" }}
              fontFamily={language === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Montserrat', sans-serif"}
            >
              {t('testimonialsSubtitle')}
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
            {testimonials.map((testimonial, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <VStack
                  bg="white"
                  p={8}
                  borderRadius="lg"
                  boxShadow="xl"
                  spacing={6}
                  align="center"
                  position="relative"
                >
                  <Icon
                    as={FaQuoteRight}
                    w={8}
                    h={8}
                    color="brand.200"
                    position="absolute"
                    top={4}
                    right={4}
                  />
                  <Avatar
                    size="xl"
                    src={testimonial.image}
                    name={t(testimonial.nameKey)}
                  />
                  <Text
                    fontSize="lg"
                    textAlign="center"
                    color="gray.600"
                    fontFamily={language === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Montserrat', sans-serif"}
                  >
                    {t(testimonial.textKey)}
                  </Text>
                  <Box>
                    {Array(testimonial.rating).fill('').map((_, i) => (
                      <Icon
                        key={i}
                        as={FaStar}
                        w={4}
                        h={4}
                        color="yellow.400"
                      />
                    ))}
                  </Box>
                  <Text
                    fontWeight="medium"
                    fontSize="lg"
                    fontFamily={language === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Montserrat', sans-serif"}
                  >
                    {t(testimonial.nameKey)}
                  </Text>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;