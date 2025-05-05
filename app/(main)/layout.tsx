import { Box } from '@chakra-ui/react';
import Footer from 'layout/Footer';
import Header from 'layout/Header';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  icons: {
    icon: [
      { rel: 'icon', url: '/favicon.ico' },
      { rel: 'icon', url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Box mt={{ base: '60px', md: '90px' }} minH={'100vh'}>
          {props.children}
        </Box>
      </main>
      <Footer />
    </React.Fragment>
  );
}
