/* eslint-disable @next/next/no-async-client-component */
// app/RootLayoutClient.tsx
'use client';

import React, { useEffect } from 'react';
import { ReactQueryProvider } from '@/context/ReactQueryProvider';
import { Provider } from 'react-redux';
import store from '@/store/index';
import '@/styles/globals.css';
import Fonts from '@/styles/Fonts';
import { NextIntlClientProvider } from 'next-intl';
import { AuthProvider } from '@/context/AuthContext';
import { ToastProvider } from '@/context/ToastContext';
import { ChakraProviders } from './ChakraProviderWrapper';

export default function RootLayoutClient({
  children,
  locale,
  messages,
  cookies,
}: {
  children: React.ReactNode;
  locale: string;
  messages: any;
  cookies?: string;
}) {
  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body>
        <Provider store={store}>
          <ReactQueryProvider>
            <NextIntlClientProvider
              locale={locale}
              messages={messages}
              timeZone="Asia/Kolkata"
            >
              <ChakraProviders cookies={cookies}>
                <ToastProvider>
                  <AuthProvider>
                    <Fonts />
                    {children}
                  </AuthProvider>
                </ToastProvider>
              </ChakraProviders>
            </NextIntlClientProvider>
          </ReactQueryProvider>
        </Provider>
      </body>
    </html>
  );
}
