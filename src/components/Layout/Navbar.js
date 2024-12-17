
import React, { useState } from 'react';
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
  DrawerOverlay,
  DrawerContent,
  Divider,
  Grid,
  useDisclosure,
  Collapse,
} from '@chakra-ui/react';
import { 
  ChevronDownIcon, 
  HamburgerIcon, 
  CloseIcon, 
  PhoneIcon,
  ChevronRightIcon 
} from '@chakra-ui/icons';
import { 
  FaHeart, 
  FaCalendar, 
  FaCamera, 
  FaGlassCheers, 
  FaInstagram, 
  FaFacebook, 
  FaPinterest,
  FaEnvelope
} from 'react-icons/fa';

export default function Navbar() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);

  const navMenus = {
    services: {
      title: "Services",
      items: [
        { icon: FaHeart, title: "Full Planning", description: "Complete wedding planning service", slug: "full-planning" },
        { icon: FaCalendar, title: "Partial Planning", description: "Perfect for couples who need partial assistance", slug: "partial-planning" },
        { icon: FaCamera, title: "Vendor Selection", description: "Find the perfect vendors for your big day", slug: "vendor-selection" },
        { icon: FaGlassCheers, title: "Day Coordination", description: "Ensure your wedding day runs smoothly", slug: "day-coordination" },
      ],
    },
    portfolio: {
      title: "Portfolio",
      items: [
        { title: "Luxury Weddings", description: "Exclusive and elegant celebrations", slug: "luxury-weddings" },
        { title: "Destination Weddings", description: "Unforgettable events worldwide", slug: "destination-weddings" },
        { title: "Traditional Weddings", description: "Classic and timeless ceremonies", slug: "traditional-weddings" },
      ],
    },
  };

  const Logo = () => (
    <Link href="/Wplan" _hover={{ textDecoration: 'none' }}>
      <Flex align="center" gap={3}>
        <Box 
          as="img" 
          src="/Wplan/images/qd-logo.png"
          alt="Logo" 
          boxSize={{ base: "35px", md: "40px" }} 
          borderRadius="full" 
        />
        <Text 
        fontSize={{ base: "xl", md: "xl" }}  // Increased font size for a more impactful look
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
          fontSize={{ base: "xl", md: "xl" }}  // Adjusted the size of the secondary text
          color="gray.500"
          ml={2}  // Added some margin to the secondary text for better spacing
          pr={100}  // Added padding to the right for better spacing
        >
          Design
        </Text>
      </Text>


      </Flex>
    </Link>
  );

  const NavLink = ({ href, children, hasSubmenu }) => (
    <Link
      href={href}
      px={4}
      py={2}
      fontWeight="500"
      color="gray.700"
      _hover={{ color: "gray.500" }}
      display="flex"
      alignItems="center"
    >
      {children} {hasSubmenu && <ChevronDownIcon ml={1} />}
    </Link>
  );

  const MobileMenuItem = ({ title, items, menuKey }) => {
    const isOpen = mobileSubmenu === menuKey;
    
    return (
      <VStack align="stretch" spacing={0}>
        <Flex
          py={4}
          px={6}
          justify="space-between"
          align="center"
          onClick={() => setMobileSubmenu(isOpen ? null : menuKey)}
          cursor="pointer"
          role="group"
          transition="all 0.2s"
          _hover={{ bg: 'gray.50' }}
        >
          <Text 
            fontSize="lg" 
            fontWeight="500"
            color="gray.700"
          >
            {title}
          </Text>
          <Icon
            as={ChevronRightIcon}
            transition="all 0.3s"
            transform={isOpen ? 'rotate(90deg)' : undefined}
            color="gray.400"
            _groupHover={{ color: 'gray.600' }}
          />
        </Flex>
        
        <Collapse in={isOpen}>
          <VStack 
            align="stretch" 
            spacing={1} 
            pb={4}
            bg="gray.50"
          >
            {items.map((item, idx) => (
              <Link
                key={idx}
                href={`/Wplan/${menuKey}/${item.slug}`}
                onClick={onClose}
                _hover={{ textDecoration: 'none' }}
              >
                <Flex
                  align="center"
                  p={4}
                  transition="all 0.2s"
                  _hover={{ bg: 'white' }}
                >
                  {item.icon && (
                    <Icon 
                      as={item.icon} 
                      color="gray.400" 
                      boxSize={5} 
                      mr={3}
                    />
                  )}
                  <Box>
                    <Text 
                      fontWeight="500" 
                      color="gray.700"
                    >
                      {item.title}
                    </Text>
                    {item.description && (
                      <Text 
                        fontSize="sm" 
                        color="gray.500" 
                        mt={0.5}
                      >
                        {item.description}
                      </Text>
                    )}
                  </Box>
                </Flex>
              </Link>
            ))}
          </VStack>
        </Collapse>
      </VStack>
    );
  };

  const SocialIcons = () => (
    <HStack spacing={3} justify="center">
      {[
        { icon: FaInstagram, color: "#E4405F", label: "Instagram" },
        { icon: FaFacebook, color: "#1877F2", label: "Facebook" },
        { icon: FaPinterest, color: "#E60023", label: "Pinterest" }
      ].map((social, idx) => (
        <IconButton
          key={idx}
          as="a"
          href="#"
          aria-label={social.label}
          icon={<Icon as={social.icon} boxSize={5} />}
          color={social.color}
          variant="ghost"
          rounded="full"
          size="lg"
          _hover={{
            transform: "translateY(-2px)",
            color: "white",
            bg: social.color
          }}
          transition="all 0.3s"
        />
      ))}
    </HStack>
  );

  const MobileDrawer = () => (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      size="full"
    >
      <DrawerOverlay bg="blackAlpha.300" backdropFilter="blur(5px)" />
      <DrawerContent>
        <Box px={4} py={4} borderBottom="1px solid" borderColor="gray.100">
          <Flex justify="space-between" align="center">
            <Logo />
            <IconButton
              onClick={onClose}
              icon={<CloseIcon />}
              variant="ghost"
              color="gray.400"
              _hover={{ color: "gray.600" }}
            />
          </Flex>
        </Box>

        <DrawerBody p={0}>
          <VStack spacing={0} align="stretch" divider={<Divider />}>
            {Object.entries(navMenus).map(([key, menu]) => (
              <MobileMenuItem
                key={key}
                title={menu.title}
                items={menu.items}
                menuKey={key}
              />
            ))}

          

            <Box p={6}>
              <Button
                size="lg"
                width="full"
                colorScheme="green"
                rightIcon={<PhoneIcon />}
                mb={8}
                fontSize="md"
                h={14}
              >
                Book Consultation
              </Button>

              <Text
                textAlign="center"
                fontSize="sm"
                fontWeight="medium"
                color="gray.500"
                mb={4}
                textTransform="uppercase"
                letterSpacing="wider"
              >
                Follow Us
              </Text>

              <SocialIcons />

              <Divider my={8} />

              <VStack spacing={2}>
                <Box 
                  as="img" 
                 src="/Wplan/images/qd-logo.png" 
                  alt="Logo" 
                  boxSize="40px" 
                  borderRadius="full"
                  opacity={0.5}
                />
                <Text fontSize="sm" color="gray.500">
                  © {new Date().getFullYear()} Qarshileh Design
                </Text>
              </VStack>
            </Box>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );

  return (
    <Box position="fixed" top="0" left="0" right="0" bg="white" boxShadow="sm" zIndex="1000">
      <Container maxW="container.xl">
        <Flex h="80px" align="center" justify="space-between">
          <Logo />

          {/* Desktop Navigation */}
          <HStack spacing={8} display={{ base: "none", md: "flex" }}>
            {Object.entries(navMenus).map(([key, menu]) => (
              <Box
                key={key}
                position="relative"
                onMouseEnter={() => setHoveredMenu(key)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <NavLink href={`/${key}`} hasSubmenu>
                
                  {menu.title}
                </NavLink>
                <MegaMenu menu={menu} isHovered={hoveredMenu === key}  />
              </Box>
            ))}
           
          </HStack>

          {/* Desktop Social Icons & CTA */}
          <HStack spacing={4} display={{ base: "none", md: "flex" }}>
            <SocialIcons />
            <Button 
              colorScheme="green" 
              rightIcon={<PhoneIcon />}
              size="lg"
              px={8}
            >
              Book Consultation
            </Button>
          </HStack>

          {/* Mobile Menu Button */}
          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={onToggle}
            icon={<HamburgerIcon boxSize={6} />}
            variant="ghost"
            color="gray.600"
            _hover={{ color: "gray.800" }}
          />
        </Flex>
      </Container>

      {/* Mobile Menu */}
      <MobileDrawer />
    </Box>
  );
}
  const MegaMenu = ({ menu, isHovered }) => (
    <Box
      position="absolute"
      top="100%"
      left="50%"
      transform="translateX(-50%)"
      bg="white"
      boxShadow="xl"
      rounded="lg"
      border="1px solid"
      borderColor="gray.100"
      p={6}
      zIndex="1000"
      opacity={isHovered ? 1 : 0}
      visibility={isHovered ? "visible" : "hidden"}
      transition="all 0.2s"
      minW="500px"
    >
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        {menu.items.map((item, idx) => (
          <Link 
            key={idx} 
            href={`/Wplan/${item.slug}`} 
            _hover={{ textDecoration: "none" }}
          >
            <Flex 
              align="start" 
              p={4} 
              rounded="md" 
              transition="all 0.2s"
              _hover={{ bg: "gray.50" }}
            >
              {item.icon && (
                <Icon 
                  as={item.icon} 
                  color="gray.400" 
                  boxSize={5} 
                  mr={4}
                  mt={1}
                />
              )}
              <Box>
                <Text 
                  fontWeight="600" 
                  color="gray.700"
                  mb={1}
                >
                  {item.title}
                </Text>
                {item.description && (
                  <Text 
                    fontSize="sm" 
                    color="gray.500"
                    lineHeight="short"
                  >
                    {item.description}
                  </Text>
                )}
              </Box>
            </Flex>
          </Link>
        ))}
      </Grid>

      <Box mt={6} pt={6} borderTop="1px solid" borderColor="gray.100">
        <Button
          variant="ghost"
          colorScheme="gray"
          size="sm"
          rightIcon={<ChevronRightIcon />}
          _hover={{
            bg: 'transparent',
            color: 'green.500'
          }}
        >
          View All {menu.title}
        </Button>
      </Box>
    </Box>
  );
