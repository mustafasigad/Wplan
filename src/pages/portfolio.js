import React, { useState } from 'react';
import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  Image,
  Button,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  VStack,
  HStack,
  Tag,
  IconButton
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import AnimatedCard from '../components/shared/AnimatedCard';

const MotionBox = motion(Box);

const portfolioItems = [
  {
    id: 1,
    title: "Royal Wedding at Kempinski",
    category: "Luxury",
    description: "An elegant celebration featuring traditional and modern elements",
    location: "Kempinski Palace Djibouti",
    date: "2024",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    tags: ["Luxury", "Indoor", "Traditional"]
  },
  {
    id: 2,
    title: "Beachside Ceremony",
    category: "Destination",
    description: "A romantic sunset ceremony by the Gulf of Tadjoura",
    location: "Plage des Sables Blancs",
    date: "2024",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    tags: ["Beach", "Outdoor", "Sunset"]
  },
  {
    id: 3,
    title: "Traditional Afar Celebration",
    category: "Traditional",
    description: "A beautiful blend of cultural traditions and modern luxury",
    location: "Djibouti City",
    date: "2023",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    tags: ["Traditional", "Cultural", "Indoor"]
  }
  // Add more portfolio items as needed
];

const categories = ["All", "Luxury", "Destination", "Traditional"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredItems = portfolioItems.filter(item => 
    selectedCategory === "All" || item.category === selectedCategory
  );

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setCurrentImageIndex(0);
    onOpen();
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex + 1 < selectedItem.images.length ? prevIndex + 1 : 0
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : selectedItem.images.length - 1
    );
  };

  return (
    <Box minH="100vh" pt={20} pb={20} bg="pink.50">
      <Container maxW="container.xl">
        {/* Hero Section */}
        <VStack spacing={6} mb={16}>
          <Heading
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="light"
            letterSpacing="wider"
            color="pink.600"
            textAlign="center"
          >
            Our Wedding Portfolio
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="gray.700"
            textAlign="center"
            maxW="2xl"
          >
            Explore our collection of beautiful celebrations and love stories
          </Text>
        </VStack>

        {/* Category Filters */}
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify="center"
          mb={12}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "solid" : "outline"}
              colorScheme="pink"
              onClick={() => setSelectedCategory(category)}
              size="lg"
              rounded="full"
            >
              {category}
            </Button>
          ))}
        </Stack>

        {/* Portfolio Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {filteredItems.map((item, index) => (
            <AnimatedCard
              key={item.id}
              delay={index * 0.2}
              onClick={() => handleItemClick(item)}
              p={0}
              overflow="hidden"
              borderRadius="md"
              boxShadow="lg"
            >
              <Image
                src={item.images[0]}
                alt={item.title}
                w="full"
                h="300px"
                objectFit="cover"
                transition="transform 0.3s ease"
                _hover={{ transform: 'scale(1.05)' }}
              />
              <Box p={6}>
                <Heading
                  size="md"
                  mb={2}
                  fontWeight="light"
                  letterSpacing="wide"
                  color="pink.600"
                >
                  {item.title}
                </Heading>
                <Text color="gray.600" mb={4}>
                  {item.description}
                </Text>
                <HStack spacing={2} flexWrap="wrap">
                  {item.tags.map((tag) => (
                    <Tag
                      key={tag}
                      size="sm"
                      variant="subtle"
                      colorScheme="pink"
                    >
                      {tag}
                    </Tag>
                  ))}
                </HStack>
              </Box>
            </AnimatedCard>
          ))}
        </SimpleGrid>

        {/* Detail Modal */}
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size="5xl"
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton zIndex="tooltip" />
            <ModalBody p={8}>
              {selectedItem && (
                <Stack spacing={8}>
                  <Box position="relative">
                    <Image
                      src={selectedItem.images[currentImageIndex]}
                      alt={selectedItem.title}
                      w="full"
                      h="500px"
                      objectFit="cover"
                      borderRadius="md"
                    />
                    <IconButton
                      icon={<ArrowLeftIcon />}
                      position="absolute"
                      top="50%"
                      left="2"
                      transform="translateY(-50%)"
                      onClick={prevImage}
                      size="lg"
                      colorScheme="pink"
                      variant="ghost"
                      aria-label="Previous Image"
                    />
                    <IconButton
                      icon={<ArrowRightIcon />}
                      position="absolute"
                      top="50%"
                      right="2"
                      transform="translateY(-50%)"
                      onClick={nextImage}
                      size="lg"
                      colorScheme="pink"
                      variant="ghost"
                      aria-label="Next Image"
                    />
                  </Box>
                  <Stack spacing={4}>
                    <Heading
                      size="lg"
                      fontWeight="light"
                      letterSpacing="wide"
                      color="pink.600"
                    >
                      {selectedItem.title}
                    </Heading>
                    <Text color="gray.700">
                      {selectedItem.description}
                    </Text>
                    <HStack spacing={4}>
                      <Text fontWeight="bold">Location:</Text>
                      <Text>{selectedItem.location}</Text>
                    </HStack>
                    <HStack spacing={4}>
                      <Text fontWeight="bold">Date:</Text>
                      <Text>{selectedItem.date}</Text>
                    </HStack>
                    <HStack spacing={2} flexWrap="wrap">
                      {selectedItem.tags.map((tag) => (
                        <Tag
                          key={tag}
                          size="md"
                          variant="subtle"
                          colorScheme="pink"
                        >
                          {tag}
                        </Tag>
                      ))}
                    </HStack>
                  </Stack>
                </Stack>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>
      </Container>
    </Box>
  );
}
