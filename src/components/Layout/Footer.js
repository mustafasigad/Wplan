// src/components/layout/Footer.js
import React from 'react';
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Link,
  Icon,
  HStack,
  Divider,
} from '@chakra-ui/react';
import { FaInstagram, FaFacebook, FaPinterest, FaTwitter } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { t, language } = useLanguage();

  const socialLinks = [
    { icon: FaInstagram, href: '#' },
    { icon: FaFacebook, href: '#' },
    { icon: FaPinterest, href: '#' },
    { icon: FaTwitter, href: '#' },
  ];

  return (
    <Box
      bg="gray.900"
      color="white"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <Container maxW="container.xl" py={16}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          <Stack spacing={6}>
            <Text
              fontSize="2xl"
              fontFamily={language === 'ar' ? "'Noto Serif Arabic', serif" : "'Cormorant Garamond', serif"}
              letterSpacing={language === 'ar' ? "normal" : "wider"}
            >
              Qarshileh Design
            </Text>
            <Text
              fontSize="sm"
              color="gray.400"
              fontFamily={language === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Montserrat', sans-serif"}
            >
              {t('footerTagline')}
            </Text>
          </Stack>

          <Stack spacing={4}>
            <Text
              fontWeight="500"
              fontSize="lg"
              fontFamily={language === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Montserrat', sans-serif"}
            >
              {t('services')}
            </Text>
            <Stack spacing={2}>
              {['fullPlanning', 'partialPlanning', 'dayCoordination', 'vendorSelection'].map((key) => (
                <Link
                  key={key}
                  href="#"
                  color="gray.400"
                  _hover={{ color: 'brand.400' }}
                  fontFamily={language === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Montserrat', sans-serif"}
                >
                  {t(key)}
                </Link>
              ))}
            </Stack>
          </Stack>

          <Stack spacing={4}>
            <Text
              fontWeight="500"
              fontSize="lg"
              fontFamily={language === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Montserrat', sans-serif"}
            >
              {t('contact')}
            </Text>
            <Stack spacing={2} color="gray.400">
              <Text>+253 77 43 01 12</Text>
              <Text>contact@qarshilehdesign.com</Text>
              <Text>Djibouti City</Text>
            </Stack>
          </Stack>

          <Stack spacing={4}>
            <Text
              fontWeight="500"
              fontSize="lg"
              fontFamily={language === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Montserrat', sans-serif"}
            >
              {t('followUs')}
            </Text>
            <HStack spacing={4}>
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  _hover={{ color: 'brand.400' }}
                >
                  <Icon as={social.icon} w={6} h={6} />
                </Link>
              ))}
            </HStack>
          </Stack>
        </SimpleGrid>

        <Divider my={8} borderColor="gray.800" />

        <Text
          textAlign="center"
          color="gray.500"
          fontSize="sm"
          fontFamily={language === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Montserrat', sans-serif"}
        >
          © {new Date().getFullYear()} Luxury Weddings. {t('rightsReserved')}
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;