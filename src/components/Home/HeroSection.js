// src/components/home/HeroSection.js
import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { useLanguage } from '../../context/LanguageContext';

const HeroSection = () => {
  const { t, language } = useLanguage();

  return (
    <Box
      minH="100vh"
      position="relative"
      overflow="hidden"
      bg="linear-gradient(145deg, #B4912F 0%, #D4AF37 25%, #E5B980 50%, #D4AF37 75%, #B4912F 100%)"
    >
      {/* Pattern overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        opacity={0.07}
        bgImage={`url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}
        bgSize="80px 80px"
      />

      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="linear(to-b, rgba(0,0,0,0.2), rgba(0,0,0,0.4))"
      />

      <Container
        maxW="container.xl"
        h="100vh"
        position="relative"
        zIndex={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
        pt="70px"
      >
        <VStack
          spacing={14}
          maxW={{ base: "95%", md: "85%", lg: "80%" }}
          textAlign="center"
          dir={language === 'ar' ? 'rtl' : 'ltr'}
        >
          <VStack spacing={10}>
            <Heading
              as="h1"
              color="white"
              textTransform="uppercase"
              textShadow="0 2px 10px rgba(0,0,0,0.2)"
            >
              <Text
                fontSize={{ base: "3xl", md: "5xl", lg: "7xl" }}
                fontWeight="300"
                letterSpacing={language === 'ar' ? "normal" : "0.25em"}
                lineHeight="1.4"
                fontFamily={language === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Raleway', sans-serif"}
              >
                {t('heroTitle')}
              </Text>
              <Text
                fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }}
                fontWeight="300"
                letterSpacing={language === 'ar' ? "normal" : "0.3em"}
                mt={6}
                fontFamily={language === 'ar' ? "'Noto Serif Arabic', serif" : "'Cormorant Garamond', serif"}
                fontStyle={language === 'ar' ? "normal" : "italic"}
              >
                {t('heroLocation')}
              </Text>
            </Heading>
            <Text
              fontSize={{ base: "md", md: "xl", lg: "2xl" }}
              fontWeight="300"
              letterSpacing={language === 'ar' ? "normal" : "0.15em"}
              maxW="3xl"
              color="white"
              lineHeight="2"
              textShadow="0 1px 2px rgba(0,0,0,0.2)"
              fontFamily={language === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Montserrat', sans-serif"}
            >
              {t('heroSubtitle')}
            </Text>
          </VStack>

          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 6, md: 12 }}
            w={{ base: "100%", md: "auto" }}
            justify="center"
            pt={4}
          >
            <Button
              size="lg"
              height="72px"
              px={14}
              fontSize="md"
              bg="rgba(0,0,0,0.85)"
              color="white"
              _hover={{
                bg: 'rgba(0,0,0,0.95)',
                transform: 'translateY(-3px)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
              }}
              letterSpacing={language === 'ar' ? "normal" : "0.3em"}
              fontWeight="400"
              textTransform="uppercase"
              fontFamily={language === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Montserrat', sans-serif"}
              borderRadius="0"
              transition="all 0.3s ease"
            >
              {t('bookConsultation')}
            </Button>
            <Button
              size="lg"
              height="72px"
              px={14}
              fontSize="md"
              variant="outline"
              color="white"
              borderColor="white"
              borderWidth="1px"
              _hover={{
                bg: 'whiteAlpha.100',
                transform: 'translateY(-3px)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}
              letterSpacing={language === 'ar' ? "normal" : "0.3em"}
              fontWeight="400"
              textTransform="uppercase"
              fontFamily={language === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Montserrat', sans-serif"}
              borderRadius="0"
              transition="all 0.3s ease"
            >
              {t('viewPortfolio')}
            </Button>
          </Stack>
        </VStack>
      </Container>
    </Box>
  );
};

export default HeroSection;
