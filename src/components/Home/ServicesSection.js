// import React from 'react';
// import {
//   Box,
//   Container,
//   SimpleGrid,
//   Heading,
//   Text,
//   Icon,
//   VStack
// } from '@chakra-ui/react';
// import {
//   FaHeart,
//   FaCalendar,
//   FaCamera,
//   FaHandsHelping,
//   FaMusic,
//   FaUtensils
// } from 'react-icons/fa';
// import AnimatedCard from '../shared/AnimatedCard';
// import { useLanguage } from '../../context/LanguageContext';

// const ServicesSection = () => {
//   const { t, language } = useLanguage();

//   const services = [
//     {
//       icon: FaHeart,
//       titleKey: 'fullPlanning',
//       descriptionKey: 'fullPlanningDesc',
//       color: 'red.500' // Romance and love
//     },
//     {
//       icon: FaCalendar,
//       titleKey: 'partialPlanning',
//       descriptionKey: 'partialPlanningDesc',
//       color: 'blue.500' // Trust and professionalism
//     },
//     {
//       icon: FaCamera,
//       titleKey: 'vendorSelection',
//       descriptionKey: 'vendorSelectionDesc',
//       color: 'purple.500' // Creativity and artistry
//     },
//     {
//       icon: FaHandsHelping,
//       titleKey: 'dayCoordination',
//       descriptionKey: 'dayCoordinationDesc',
//       color: 'green.500' // Collaboration and support
//     },
//     {
//       icon: FaMusic,
//       titleKey: 'entertainment',
//       descriptionKey: 'entertainmentDesc',
//       color: 'teal.500' // Fun and vibrancy
//     },
//     {
//       icon: FaUtensils,
//       titleKey: 'catering',
//       descriptionKey: 'cateringDesc',
//       color: 'orange.500' // Warmth and hospitality
//     }
//   ];

//   return (
//     <Box
//       py={20}
//       bgGradient="linear(to-b, white, gray.50)"
//       bgAttachment="fixed"
//     >
//       <Container maxW="container.xl">
//         <VStack spacing={12} dir={language === 'ar' ? 'rtl' : 'ltr'}>
//           <Box textAlign="center" maxW="3xl" mx="auto">
//             <Heading
//               fontSize={{ base: "3xl", md: "5xl" }}
//               fontWeight="bold"
//               letterSpacing={language === 'ar' ? "normal" : "wider"}
//               color="brand.600"
//               mb={4}
//               fontFamily={language === 'ar' ? "'Noto Serif Arabic', serif" : "'Playfair Display', serif"}
//             >
//               {t('servicesTitle')}
//             </Heading>
//             <Text
//               color="gray.700"
//               fontSize={{ base: "lg", md: "xl" }}
//               fontFamily={language === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Open Sans', sans-serif"}
//             >
//               {t('servicesSubtitle')}
//             </Text>
//           </Box>

//           <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w="full">
//             {services.map((service, index) => (
//               <AnimatedCard
//                 key={index}
//                 delay={index * 0.1}
//                 bg="white"
//                 boxShadow="2xl"
//                 borderRadius="lg"
//                 _hover={{
//                   transform: "translateY(-8px)",
//                   boxShadow: "3xl",
//                   borderColor: service.color
//                 }}
//                 borderWidth="2px"
//                 borderColor="gray.200"
//                 transition="all 0.3s ease"
//               >
//                 <VStack spacing={6} p={10} align="center" textAlign="center">
//                   <Icon
//                     as={service.icon}
//                     w={16}
//                     h={16}
//                     color={service.color}
//                   />
//                   <Heading
//                     size="md"
//                     fontWeight="semibold"
//                     letterSpacing={language === 'ar' ? "normal" : "wide"}
//                     fontFamily={language === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Playfair Display', serif"}
//                     color="gray.800"
//                   >
//                     {t(service.titleKey)}
//                   </Heading>
//                   <Text
//                     color="gray.600"
//                     fontSize="md"
//                     fontFamily={language === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Open Sans', sans-serif"}
//                   >
//                     {t(service.descriptionKey)}
//                   </Text>
//                 </VStack>
//               </AnimatedCard>
//             ))}
//           </SimpleGrid>
//         </VStack>
//       </Container>
//     </Box>
//   );
// };

// export default ServicesSection;
import React from 'react';
import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  Icon,
  VStack
} from '@chakra-ui/react';
import {
  FaHeart,
  FaCalendar,
  FaCamera,
  FaHandsHelping,
  FaMusic,
  FaUtensils
} from 'react-icons/fa';
import AnimatedCard from '../shared/AnimatedCard';
import { useLanguage } from '../../context/LanguageContext';

const ServicesSection = () => {
  const { t, language } = useLanguage();

  const services = [
    {
      icon: FaHeart,
      titleKey: 'fullPlanning',
      descriptionKey: 'fullPlanningDesc',
      color: 'red.500' // Romance and love
    },
    {
      icon: FaCalendar,
      titleKey: 'partialPlanning',
      descriptionKey: 'partialPlanningDesc',
      color: 'blue.500' // Trust and professionalism
    },
    {
      icon: FaCamera,
      titleKey: 'vendorSelection',
      descriptionKey: 'vendorSelectionDesc',
      color: 'purple.500' // Creativity and artistry
    },
    {
      icon: FaHandsHelping,
      titleKey: 'dayCoordination',
      descriptionKey: 'dayCoordinationDesc',
      color: 'green.500' // Collaboration and support
    },
    {
      icon: FaMusic,
      titleKey: 'entertainment',
      descriptionKey: 'entertainmentDesc',
      color: 'teal.500' // Fun and vibrancy
    },
    {
      icon: FaUtensils,
      titleKey: 'catering',
      descriptionKey: 'cateringDesc',
      color: 'orange.500' // Warmth and hospitality
    }
  ];

  return (
    <Box
      py={20}
      bgGradient="linear(to-b, white, gray.50)"
      bgAttachment="fixed"
    >
      <Container maxW="container.xl">
        <VStack spacing={12} dir={language === 'ar' ? 'rtl' : 'ltr'}>
          <Box textAlign="center" maxW="3xl" mx="auto">
            <Heading
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="bold"
              letterSpacing={language === 'ar' ? "normal" : "wider"}
              color="brand.600"
              mb={4}
              fontFamily={language === 'ar' ? "'Noto Serif Arabic', serif" : "'Playfair Display', serif"}
            >
              {t('servicesTitle')}
            </Heading>
            <Text
              color="gray.700"
              fontSize={{ base: "lg", md: "xl" }}
              fontFamily={language === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Open Sans', sans-serif"}
            >
              {t('servicesSubtitle')}
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w="full">
            {services.map((service, index) => (
              <AnimatedCard
                key={index}
                delay={index * 0.1}
                bg="white"
                boxShadow="2xl"
                borderRadius="lg"
                _hover={{
                  transform: "translateY(-8px)",
                  boxShadow: "3xl",
                  borderColor: service.color
                }}
                borderWidth="2px"
                borderColor="gray.200"
                transition="all 0.3s ease"
              >
                <VStack spacing={6} p={10} align="center" textAlign="center">
                  <Icon
                    as={service.icon}
                    w={16}
                    h={16}
                    color={service.color}
                  />
                  <Heading
                    size="md"
                    fontWeight="semibold"
                    letterSpacing={language === 'ar' ? "normal" : "wide"}
                    fontFamily={language === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Playfair Display', serif"}
                    color="gray.800"
                  >
                    {t(service.titleKey)}
                  </Heading>
                  <Text
                    color="gray.600"
                    fontSize="md"
                    fontFamily={language === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Open Sans', sans-serif"}
                  >
                    {t(service.descriptionKey)}
                  </Text>
                </VStack>
              </AnimatedCard>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default ServicesSection;
