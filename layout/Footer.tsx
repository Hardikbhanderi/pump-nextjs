'use client';
import { Box, Container, useColorModeValue } from '@chakra-ui/react';

export default function Footer() {
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  // const t = useTranslations('Footer');

  return (
    <Box as="footer" bg={bgColor}>
      <Container maxW="container.xl"></Container>
    </Box>
  );
}
