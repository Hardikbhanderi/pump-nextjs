'use client';
// src/context/ToastContext.tsx
import React, { createContext, useContext } from 'react';
import { useToast, UseToastOptions } from '@chakra-ui/react';

type ToastFn = (options: UseToastOptions) => void;

const ToastContext = createContext<ToastFn>(() => {});

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const toast = useToast();

  const showToast: ToastFn = (options) => {
    toast({
      position: 'top-right',
      duration: 5000,
      isClosable: true,
      ...options,
    });
  };

  return (
    <ToastContext.Provider value={showToast}>{children}</ToastContext.Provider>
  );
};

export const useAppToast = () => useContext(ToastContext);
