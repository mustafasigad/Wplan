import React from 'react';
import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const ContactSection = () => {
  const { t, language } = useLanguage();

  const contactInfo = [
    {
      icon: FaPhone,
      titleKey: 'phone',
      value: '+253 77 43 01 12'
    },
    {
      icon: FaEnvelope,
      titleKey: 'email',
      value: 'contact@qarshilehdesign.com'
    },
    {
      icon: FaMapMarkerAlt,
      titleKey: 'address',
      value: 'Djibouti City, Republic of Djibouti'
    }
  ];

  return (
    <Box py={20} bg="pink.50">
      <Container maxW="container.xl">
        <VStack spacing={12} dir={language === 'ar' ? 'rtl' : 'ltr'}>
          <Box textAlign="center" maxW="3xl" mx="auto">
            <Heading
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="light"
              letterSpacing={language === 'ar' ? "normal" : "wider"}
              color="pink.600"
              mb={4}
              fontFamily={language === 'ar' ? "'Noto Serif Arabic', serif" : "'Cormorant Garamond', serif"}
            >
              {t('contactTitle')}
            </Heading>
            <Text
              color="gray.700"
              fontSize={{ base: "lg", md: "xl" }}
              fontFamily={language === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Montserrat', sans-serif"}
            >
              {t('contactSubtitle')}
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16} w="full">
            <VStack spacing={8} align={language === 'ar' ? 'end' : 'start'}>
              {contactInfo.map((item, index) => (
                <HStack key={index} spacing={4}>
                  <Icon as={item.icon} w={8} h={8} color="pink.600" />
                  <VStack align={language === 'ar' ? 'end' : 'start'} spacing={1}>
                    <Text
                      fontWeight="medium"
                      fontFamily={language === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Montserrat', sans-serif"}
                    >
                      {t(item.titleKey)}
                    </Text>
                    <Text color="gray.700">{item.value}</Text>
                  </VStack>
                </HStack>
              ))}
            </VStack>

            <Box bg="white" p={8} borderRadius="lg" boxShadow="xl">
              <VStack as="form" spacing={6}>
                <FormControl isRequired>
                  <FormLabel
                    fontFamily={language === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Montserrat', sans-serif"}
                  >
                    {t('name')}
                  </FormLabel>
                  <Input
                    placeholder={t('namePlaceholder')}
                    focusBorderColor="pink.600"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel
                    fontFamily={language === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Montserrat', sans-serif"}
                  >
                    {t('email')}
                  </FormLabel>
                  <Input
                    type="email"
                    placeholder={t('emailPlaceholder')}
                    focusBorderColor="pink.600"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel
                    fontFamily={language === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Montserrat', sans-serif"}
                  >
                    {t('phone')}
                  </FormLabel>
                  <Input
                    placeholder={t('phonePlaceholder')}
                    focusBorderColor="pink.600"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel
                    fontFamily={language === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Montserrat', sans-serif"}
                  >
                    {t('message')}
                  </FormLabel>
                  <Textarea
                    placeholder={t('messagePlaceholder')}
                    rows={6}
                    focusBorderColor="pink.600"
                  />
                </FormControl>

                <Button
                  variant="outline"
                  borderColor="pink.600"
                  color="pink.600"
                  _hover={{ bg: "pink.600", color: "white" }}
                  size="lg"
                  w="full"
                  height="56px"
                  fontSize="md"
                  letterSpacing={language === 'ar' ? "normal" : "0.2em"}
                  fontFamily={language === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Montserrat', sans-serif"}
                >
                  {t('send')}
                </Button>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default ContactSection;
