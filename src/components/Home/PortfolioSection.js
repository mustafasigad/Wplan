import React from 'react';
import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  Image,
  VStack,
  Button,
  Link
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const MotionBox = motion(Box);

const portfolioItems = [
  {
    image: "/api/placeholder/600/400",
    titleKey: "luxuryWedding",
    category: "luxury"
  },
  {
    image: "/api/placeholder/600/400",
    titleKey: "beachWedding",
    category: "destination"
  },
  {
    image: "/api/placeholder/600/400",
    titleKey: "traditionalWedding",
    category: "cultural"
  }
];

const PortfolioSection = () => {
  const { t, language } = useLanguage();

  return (
    <Box py={20} bg="blue.50">
      <Container maxW="container.xl">
        <VStack spacing={12} dir={language === 'ar' ? 'rtl' : 'ltr'}>
          <Box textAlign="center" maxW="3xl" mx="auto">
            <Heading
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="light"
              letterSpacing={language === 'ar' ? "normal" : "wider"}
              color="blue.500"
              mb={4}
              fontFamily={language === 'ar' ? "'Noto Serif Arabic', serif" : "'Cormorant Garamond', serif"}
            >
              {t('portfolioTitle')}
            </Heading>
            <Text
              color="gray.600"
              fontSize={{ base: "lg", md: "xl" }}
              fontFamily={language === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Montserrat', sans-serif"}
            >
              {t('portfolioSubtitle')}
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
            {portfolioItems.map((item, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                position="relative"
                overflow="hidden"
                borderRadius="md"
                boxShadow="lg"
                cursor="pointer"
                _hover={{
                  '& > div': { opacity: 1 }
                }}
              >
                <Image
                  src={item.image}
                  alt={t(item.titleKey)}
                  w="full"
                  h="400px"
                  objectFit="cover"
                  transition="transform 0.3s ease"
                  _hover={{ transform: 'scale(1.05)' }}
                />
                <Box
                  position="absolute"
                  inset={0}
                  bg="blackAlpha.600"
                  opacity={0}
                  transition="opacity 0.3s"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                  p={6}
                  textAlign="center"
                >
                  <Heading
                    size="lg"
                    mb={2}
                    fontFamily={language === 'ar' ? "'Noto Serif Arabic', serif" : "'Cormorant Garamond', serif"}
                  >
                    {t(item.titleKey)}
                  </Heading>
                  <Text
                    fontFamily={language === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Montserrat', sans-serif"}
                  >
                    {t(item.category)}
                  </Text>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>

          <Button
            as={Link}
            href="/portfolio"
            variant="outline"
            borderColor="blue.600"
            color="blue.600"
            _hover={{ bg: "blue.600", color: "white" }}
            size="lg"
            px={12}
            height="60px"
            fontSize="md"
            letterSpacing={language === 'ar' ? "normal" : "0.2em"}
            fontFamily={language === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Montserrat', sans-serif"}
          >
            {t('viewMore')}
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default PortfolioSection;
