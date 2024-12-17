// src/components/Layout/LanguageSelector.js
import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  HStack,
  Text,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useLanguage } from '../../context/LanguageContext';

const languages = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ar', name: 'العربية', flag: '🇩🇯' },
  { code: 'en', name: 'English', flag: '🇬🇧' }
];

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === language);
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        variant="outline"
        size="md"
        borderColor="brand.600"
        _hover={{ bg: 'brand.100' }}
        _active={{ bg: 'brand.200' }}
      >
        <HStack spacing={2}>
          <Text>{getCurrentLanguage()?.flag}</Text>
          <Text display={{ base: 'none', md: 'block' }} fontWeight="bold">
            {getCurrentLanguage()?.name}
          </Text>
        </HStack>
      </MenuButton>
      <MenuList>
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            fontWeight={language === lang.code ? 'bold' : 'normal'}
          >
            <HStack spacing={2}>
              <Text>{lang.flag}</Text>
              <Text>{lang.name}</Text>
            </HStack>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default LanguageSelector;