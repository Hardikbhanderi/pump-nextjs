'use client';
import { useAuth } from '@/context/AuthContext';
import { useAppToast } from '@/context/ToastContext';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function LoginPage() {
  const [form, setForm] = useState({ mobile: '', password: '' });
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const showToast = useAppToast();
  const { isAuthenticated, login } = useAuth();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { mobile, password } = form;

    // Basic validation
    // if (!mobile || !password) {
    //   toast({
    //     title: 'Validation Error',
    //     description: 'All fields are required.',
    //     status: 'error',
    //     duration: 3000,
    //     isClosable: true,
    //     position: 'top-right',
    //   });
    //   setLoading(false);
    //   return;
    // }

    // if (!/^\d{10,}$/.test(mobile)) {
    //   toast({
    //     title: 'Invalid Mobile Number',
    //     description: 'Mobile number must be numeric and at least 10 digits.',
    //     status: 'error',
    //     duration: 3000,
    //     isClosable: true,
    //     position: 'top-right',
    //   });
    //   setLoading(false);
    //   return;
    // }

    // if (!/^[a-zA-Z0-9]{6,}$/.test(password)) {
    //   toast({
    //     title: 'Invalid Password',
    //     description: 'Password must be alphanumeric and at least 6 characters.',
    //     status: 'error',
    //     duration: 3000,
    //     isClosable: true,
    //     position: 'top-right',
    //   });
    //   setLoading(false);
    //   return;
    // }

    // All checks passed
    console.log('Form submitted:', form);

    if (mobile === '1234567890' && password === 'pass') {
      login();
      showToast({
        title: 'Login successful',
        description: 'You have been logged in!',
        status: 'success',
      });
    }
  };

  useEffect(() => setIsClient(true), []);

  useEffect(() => {
    if (isClient && isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, isClient]);

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      color="primaryText"
      px={4}
    >
      <Box
        as="section"
        rounded="lg"
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow="lg"
        p={{ base: 0, md: 6 }}
      >
        <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6} width="100%">
          <Stack align="center">
            <Heading textAlign={'center'} fontSize={{ base: '2xl', md: '4xl' }}>
              Sign in to your account
            </Heading>
            <Text textAlign={'center'} fontSize="lg">
              Use your mobile number and password
            </Text>
          </Stack>
          <Box>
            <form onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <FormControl id="mobile" isRequired>
                  <FormLabel>Mobile Number</FormLabel>
                  <Input
                    type="tel"
                    name="mobile"
                    placeholder="Enter mobile number"
                    value={form.mobile}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={form.password}
                    onChange={handleChange}
                  />
                </FormControl>
                <Stack spacing={10} pt={4}>
                  <Button
                    type="submit"
                    isLoading={loading}
                    loadingText="Signing in"
                    size="lg"
                    bg={useColorModeValue('#2563eb', '#60A5FA')}
                    color={useColorModeValue('white', 'gray.900')}
                    _hover={{ bg: useColorModeValue('blue.500', 'blue.300') }}
                  >
                    Sign in
                  </Button>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
}
