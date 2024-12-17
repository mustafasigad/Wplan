// src/components/layout/Layout.js
import React from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Box minH="100vh" position="relative">
      <Navbar />
      <Box as="main" pt="80px"> {/* Add padding top to account for fixed navbar */}
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;