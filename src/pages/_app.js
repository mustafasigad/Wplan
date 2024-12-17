// src/pages/_app.js
import { ChakraProvider } from '@chakra-ui/react';
import { LanguageProvider } from '../context/LanguageContext';
import { theme } from '../theme'; // Make sure this import is correct
import Layout from '../components/Layout/Layout';


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <LanguageProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LanguageProvider>
    </ChakraProvider>
  );
}

export default MyApp;