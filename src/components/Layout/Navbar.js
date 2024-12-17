import React, { useState, useEffect } from 'react';
import { Image } from '@chakra-ui/react';  // If using Chakra UI
import {
  Box,
  Flex,
  Button,
  HStack,
  Text,
  Container,
  IconButton,
  Link,
  VStack,
  Icon,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Collapse,
  useDisclosure,
  useBreakpointValue,
  useColorModeValue,
  Tooltip,
  Divider,
  Grid,
  SlideFade
} from '@chakra-ui/react';
import { 
  HamburgerIcon, 
  CloseIcon, 
  ChevronDownIcon,
  PhoneIcon
} from '@chakra-ui/icons';
import { 
  FaHeart, 
  FaCalendar, 
  FaCamera, 
  FaGlassCheers,
  FaInstagram,
  FaFacebook,
  FaPinterest 
} from 'react-icons/fa';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../../context/LanguageContext';

export default function Navbar() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { t, language } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const navBg = useColorModeValue(
    scrolled ? 'white' : 'rgba(255, 255, 255, 0.9)',
    'wedding.secondary'
  );
  const Logo = () => (
    <Link 
      href="/" 
      display="flex"
      alignItems="center"
      gap={3}  // Slightly increased gap for better spacing
      _hover={{ 
        textDecoration: 'none',
        transform: 'translateY(-1px)',
        transition: 'all 0.2s ease'
      }}
    >
      <Image
        src="/images/qd-logo.png"
        alt="Qarshileh Design Logo"
        boxSize={{ base: "50px", md: "60px" }}  // Increased size for better visibility
        objectFit="cover"
        borderRadius="full"  // Rounded the logo for a more polished look
      />
      
      <Text 
        fontSize={{ base: "2xl", md: "3xl" }}  // Increased font size for a more impactful look
        fontFamily="heading" 
        fontWeight="bold"  // Made the text bold to stand out more
        letterSpacing="wide"
        color="wedding.secondary"
        textTransform="uppercase"
        pr={4}  // Added padding to the right for better spacing
      >
        Qarshileh
        <Text 
          as="span" 
          fontSize={{ base: "xl", md: "2xl" }}  // Adjusted the size of the secondary text
          color="wedding.accent"
          ml={2}  // Added some margin to the secondary text for better spacing
          pr={100}  // Added padding to the right for better spacing
        >
          Design
        </Text>
      </Text>
    </Link>
  );
  

  const megaMenus = {
    services: {
      title: t('navServices'),
      items: [
        { icon: FaHeart, title: t('fullPlanning'), description: t('fullPlanningDesc'), slug: 'full-planning' },
        { icon: FaCalendar, title: t('partialPlanning'), description: t('partialPlanningDesc'), slug: 'partial-planning' },
        { icon: FaCamera, title: t('vendorSelection'), description: t('vendorSelectionDesc'), slug: 'vendor-selection' },
        { icon: FaGlassCheers, title: t('dayCoordination'), description: t('dayCoordinationDesc'), slug: 'day-coordination' }
      ]
    },
    portfolio: {
      title: t('navPortfolio'),
      items: [
        { title: t('luxuryWeddings'), slug: 'luxury-weddings' },
        { title: t('destinationWeddings'), slug: 'destination-weddings' },
        { title: t('traditionalWeddings'), slug: 'traditional-weddings' }
      ]
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, children, hasSubmenu = false }) => (
    <Link
      href={href}
      px={4}
      py={2}
      position="relative"
      color="wedding.secondary"
      fontSize="sm"
      fontWeight="500"
      letterSpacing="1px"
      textTransform="uppercase"
      display="flex"
      alignItems="center"
      transition="all 0.3s"
      _hover={{
        textDecoration: 'none',
        color: 'wedding.accent',
        transform: 'translateY(-1px)',
        _after: hasSubmenu ? {
          width: '80%',
          bg: 'wedding.accent'
        } : {}
      }}
      _after={hasSubmenu ? {
        content: '""',
        position: 'absolute',
        bottom: '-2px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '0%',
        height: '2px',
        bg: 'wedding.primary',
        transition: 'all 0.3s'
      } : {}}
    >
      {children}
      {hasSubmenu && <ChevronDownIcon ml={1} />}
    </Link>
  );

  const MegaMenu = ({ menu, isHovered }) => (
    <SlideFade in={isHovered} offsetY="20px">
      <Box
        position="absolute"
        top="100%"
        left="50%"
        transform="translateX(-50%)"
        minW="500px"
        bg="white"
        boxShadow="xl"
        rounded="md"
        border="1px solid"
        borderColor="wedding.light"
        overflow="hidden"
        p={6}
        zIndex={1000}
      >
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          {menu.items.map((item, index) => (
            <Link
              key={index}
              href={`/services/${item.slug}`}
              _hover={{ textDecoration: 'none' }}
            >
              <Box
                p={4}
                rounded="md"
                transition="all 0.2s"
                _hover={{
                  bg: 'wedding.light',
                  transform: 'translateY(-2px)',
                  boxShadow: 'md'
                }}
              >
                <Flex align="center" mb={2}>
                  <Icon as={item.icon} color="wedding.accent" boxSize={5} mr={3} />
                  <Text fontWeight="600" color="wedding.secondary">{item.title}</Text>
                </Flex>
                {item.description && (
                  <Text fontSize="sm" color="gray.600">{item.description}</Text>
                )}
              </Box>
            </Link>
          ))}
        </Grid>
      </Box>
    </SlideFade>
  );

  const ConsultationButton = () => (
    <Button
      variant="luxury"
      size="lg"
      px={8}
      rightIcon={<PhoneIcon />}
    >
      {t('bookConsultation')}
    </Button>
  );
const SocialIcons = () => {
  // Official brand colors for social media platforms
  const socialMediaColors = {
    instagram: {
      default: '#E4405F',
      hover: '#D32B4C'
    },
    facebook: {
      default: '#1877F2',
      hover: '#0D65D9'
    },
    pinterest: {
      default: '#E60023',
      hover: '#CC0000'
    }
  };

  const socialLinks = [
    { 
      icon: FaInstagram, 
      label: 'Instagram',
      color: socialMediaColors.instagram.default,
      hoverColor: socialMediaColors.instagram.hover
    },
    { 
      icon: FaFacebook, 
      label: 'Facebook',
      color: socialMediaColors.facebook.default,
      hoverColor: socialMediaColors.facebook.hover
    },
    { 
      icon: FaPinterest, 
      label: 'Pinterest',
      color: socialMediaColors.pinterest.default,
      hoverColor: socialMediaColors.pinterest.hover
    }
  ];

  return (
    <HStack spacing={4}>
      {socialLinks.map((social, index) => (
        <Tooltip key={index} label={social.label} placement="top">
          <IconButton
            icon={<Icon as={social.icon} />}
            variant="ghost"
            color={social.color}
            rounded="full"
            size="md"
            _hover={{
              color: social.hoverColor,
              transform: 'translateY(-2px)',
              bg: `${social.color}15` // Adding slight transparency for hover background
            }}
            transition="all 0.3s ease"
          />
        </Tooltip>
      ))}
    </HStack>
  );
};

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex={1000}
      bg={navBg}
      backdropFilter="blur(10px)"
      boxShadow={scrolled ? 'sm' : 'none'}
      borderBottom={scrolled ? '1px solid' : 'none'}
      borderColor="wedding.light"
      transition="all 0.3s"
    >
      <Container maxW="container.xl">
        <Flex h="80px" align="center" justify="space-between" px={4}>
        <Logo />

          {/* Desktop Navigation */}
          <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
            <HStack spacing={6}>
              {Object.entries(megaMenus).map(([key, menu]) => (
                <Box
                  key={key}
                  position="relative"
                  onMouseEnter={() => setHoveredMenu(key)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <NavLink href={`/${key}`} hasSubmenu>
                    {menu.title}
                  </NavLink>
                  <MegaMenu menu={menu} isHovered={hoveredMenu === key} />
                </Box>
              ))}
              <NavLink href="/contact">{t('navContact')}</NavLink>
            </HStack>

            <Divider orientation="vertical" h="40px" borderColor="wedding.light" />
            
            <HStack spacing={4}>
              <LanguageSelector />
              <SocialIcons />
              <ConsultationButton />
            </HStack>
          </HStack>

          {/* Mobile Menu Button */}
          <IconButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onToggle}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            color="wedding.secondary"
            _hover={{
              color: 'wedding.accent',
              bg: 'wedding.light'
            }}
          />
        </Flex>
      </Container>

      {/* Mobile Menu Drawer */}
      <Drawer
        isOpen={isOpen}
        placement={language === 'ar' ? 'left' : 'right'}
        onClose={onClose}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent bg="white">
          <DrawerHeader bg="wedding.primary" color="wedding.secondary">
            <Flex justify="space-between" align="center">
              <Text fontSize="xl" fontWeight="medium" fontFamily="heading">Menu</Text>
              <DrawerCloseButton color="wedding.secondary" />
            </Flex>
          </DrawerHeader>
          <DrawerBody p={0}>
            <VStack spacing={0} align="stretch" pt={4}>
              {Object.entries(megaMenus).map(([key, menu]) => (
                <Collapse key={key} in={true} animateOpacity>
                  <VStack align="stretch" spacing={2} p={4}>
                    <Text fontWeight="medium" color="wedding.secondary" fontSize="sm" fontFamily="heading">
                      {menu.title}
                    </Text>
                    {menu.items.map((item, index) => (
                      <Link
                        key={index}
                        href={`/${key}/${item.slug}`}
                        _hover={{ textDecoration: 'none' }}
                        onClick={onClose}
                      >
                        <Flex
                          p={3}
                          rounded="md"
                          align="center"
                          _hover={{ bg: 'wedding.light' }}
                          transition="all 0.2s"
                        >
                          {item.icon && <Icon as={item.icon} mr={3} color="wedding.accent" />}
                          <Box>
                            <Text fontWeight="500" color="wedding.secondary">{item.title}</Text>
                            {item.description && (
                              <Text fontSize="sm" color="gray.600">{item.description}</Text>
                            )}
                          </Box>
                        </Flex>
                      </Link>
                    ))}
                  </VStack>
                  <Divider borderColor="wedding.light" />
                </Collapse>
              ))}
              <Box p={4}>
                <VStack spacing={4} align="stretch">
                  <LanguageSelector />
                  <ConsultationButton />
                  <Divider borderColor="wedding.light" />
                  <Text 
                    fontSize="sm" 
                    color="wedding.secondary" 
                    fontWeight="medium" 
                    mb={2}
                    fontFamily="heading"
                  >
                    {t('followUs')}
                  </Text>
                  <SocialIcons />
                </VStack>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}