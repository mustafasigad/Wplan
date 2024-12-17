import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Icon,
  Button,
  Stack
} from '@chakra-ui/react';
import { FaHeart, FaCalendar, FaCamera, FaGlassCheers, FaMusic, FaUtensils } from 'react-icons/fa';
import AnimatedCard from '../components/shared/AnimatedCard';
import { useLanguage } from '../context/LanguageContext';

const services = [
  {
    icon: FaHeart,
    title: "Full Planning",
    description: "Comprehensive wedding planning from start to finish",
    features: ["Venue Selection", "Vendor Management", "Budget Planning", "Timeline Creation"]
  },
  {
    icon: FaCalendar,
    title: "Partial Planning",
    description: "Expert guidance for specific aspects of your wedding",
    features: ["Vendor Recommendations", "Timeline Review", "Month-of Coordination", "Ceremony Planning"]
  },
  {
    icon: FaCamera,
    title: "Vendor Selection",
    description: "Access to our premium vendor network",
    features: ["Photographer Selection", "Catering Options", "Entertainment Booking", "Decor Services"]
  },
  // Add more services as needed
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <Box pt={{ base: 20, md: 28 }} pb={20} bg="pink.50">
      <Container maxW="container.xl">
        <VStack spacing={8} mb={16} textAlign="center">
          <Heading
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="light"
            letterSpacing="wider"
            color="pink.600"
          >
            {t('servicesTitle')}
          </Heading>
          <Text fontSize="xl" color="gray.700" maxW="3xl">
            {t('servicesSubtitle')}
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {services.map((service, index) => (
            <AnimatedCard key={index} delay={index * 0.1}>
              <VStack spacing={6} align="start" p={6}>
                <Icon as={service.icon} w={12} h={12} color="pink.600" />
                <Heading size="lg" fontWeight="light" color="pink.600">
                  {service.title}
                </Heading>
                <Text color="gray.700">{service.description}</Text>
                <VStack align="start" spacing={2} w="full">
                  {service.features.map((feature, idx) => (
                    <Text key={idx} fontSize="sm" color="gray.700">
                      • {feature}
                    </Text>
                  ))}
                </VStack>
                <Button variant="outline" borderColor="pink.600" color="pink.600" _hover={{ bg: "pink.600", color: "white" }} size="lg" w="full">
                  {t('bookConsultation')}
                </Button>
              </VStack>
            </AnimatedCard>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
