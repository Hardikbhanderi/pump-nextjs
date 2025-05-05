// app/dashboard/page.tsx
'use client';
import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Stack,
  useBreakpointValue,
  SimpleGrid,
  FormControl,
  FormLabel,
  Select,
} from '@chakra-ui/react';
import { FaHistory } from 'react-icons/fa';

const DashboardPage = () => {
  //   const userType: string = 'customer'; // This should be fetched from your authentication context or API
  const balance: number = 1000; // This should be fetched from your API or context
  const [currentModal, setCurrentModal] = useState<
    null | 'scan' | 'takePayment' | 'payFuel' | 'assignMachine' | 'history'
  >(null);
  const [userType, setUserType] = useState<string>('customer'); // This should be fetched from your authentication context or API
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUserType(e.target.value);
  };

  const toggleModal = (modalName: typeof currentModal) => {
    setCurrentModal((prev) => (prev === modalName ? null : modalName));
  };

  const CustomerSalesmanView = () => {
    const isSalesman = userType === 'salesman';
    const showAssignMachine = isSalesman;
    const showTakePayment = isSalesman;
    const salesmanColumns = { base: 2, md: 3 };
    const columns = userType === 'salesman' ? salesmanColumns : 2;

    return (
      <Box borderRadius="md" p={4} boxShadow="md">
        <Box
          mb={4}
          bg="gray.100"
          p={2}
          borderRadius="sm"
          textAlign="center"
          justifyContent={'center'}
        >
          <Text
            fontWeight="semibold"
            textAlign="center"
            fontSize={{ base: 'md', md: 'xl' }} // md on mobile, xl on tablet+
          >
            Current Balance: ₹
            {balance?.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
          </Text>
          <Button
            size="sm"
            rightIcon={<FaHistory />}
            variant={'link'}
            fontSize={{ base: 'sm', md: 'md' }}
            bg={'none'}
            color={'blue.400'}
            _hover={{ bg: 'none', color: 'blue.500' }}
            _active={{ bg: 'none', color: 'blue.500' }}
            _focus={{ bg: 'none', color: 'blue.500' }}
            onClick={() => toggleModal('history')}
          >
            Show History
          </Button>
        </Box>
        <SimpleGrid mt={4} columns={columns} spacing={2}>
          <Button
            size="lg"
            colorScheme="green"
            onClick={() => toggleModal('scan')}
          >
            Scan Bill
          </Button>

          <Button
            size="lg"
            colorScheme="blue"
            onClick={() =>
              toggleModal(showTakePayment ? 'takePayment' : 'payFuel')
            }
          >
            {showTakePayment ? 'Take Payment' : 'Pay For Fuel'}
          </Button>

          {showAssignMachine && (
            <Button
              size="lg"
              colorScheme="purple"
              onClick={() => toggleModal('assignMachine')}
            >
              Assign Machine
            </Button>
          )}
        </SimpleGrid>
      </Box>
    );
  };

  const AdminView = () => (
    <Box borderWidth="1px" borderRadius="md" p={4} boxShadow="md">
      <Text>Admin Dashboard Content Goes Here</Text>
      {/* You can add more specific admin components here */}
    </Box>
  );

  const renderView = () => {
    switch (userType) {
      case 'customer':
      case 'salesman':
        return (
          <Box>
            <CustomerSalesmanView />
          </Box>
        );
      case 'admin':
        return (
          <Box>
            <Heading textAlign="center" size="lg" mb={4}>
              Admin View
            </Heading>
            <AdminView />
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Flex minH="100%" align="center" justify="center" p={4}>
      <Stack
        spacing={4}
        maxWidth={{ base: '90vw', md: 'container.md', lg: 'container.lg' }}
        width="full"
      >
         <FormControl>
          <FormLabel>Select User Type</FormLabel>
          <Select value={userType} onChange={handleChange} colorScheme='blue'>
            <option value="customer">Customer</option>
            <option value="salesman">Salesman</option>
            <option value="admin">Admin</option>
          </Select>
        </FormControl>
        {renderView()}
      </Stack>
    </Flex>
  );
};

export default DashboardPage;
