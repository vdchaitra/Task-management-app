import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Image,
  Flex,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box bg="gray.100" color="gray.800" minH="100vh" p={{ base: 4, md: 8 }}>
      <Flex
        direction={{ base: 'column-reverse', md: 'row' }}
        align="center"
        justify="space-between"
        p={{ base: 4, md: 8 }}
        bg="white"
        borderRadius="lg"
        boxShadow="md"
        gap={{ base: 6, md: 0 }}
      >
        <VStack align="start" spacing={5} w={{ base: '100%', md: '50%' }}>
          <Heading as="h1" size="xl">
            Welcome to Task Manager
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }}>
            Manage your tasks efficiently and stay organized with our tools.
          </Text>
          <HStack spacing={4} justify={{ base: 'center', md: 'start' }} w="100%">
            <Button colorScheme="teal" variant="solid" onClick={() => navigate('/tickets')}>
              Get Started
            </Button>
            <Button colorScheme="teal" variant="outline" onClick={() => navigate('/about')}>
              Learn More
            </Button>
          </HStack>
        </VStack>
        <Image
          src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Task Management"
          borderRadius="md"
          boxShadow="md"
          maxW={{ base: '100%', md: '40%' }}
        />
      </Flex>

      {/* Features Section */}
      <Box py={{ base: 8, md: 12 }} textAlign="center">
        <Heading as="h2" size={{ base: 'md', md: 'lg' }} mb={8}>
          Why Choose Our Task Manager?
        </Heading>
        <Flex direction={{ base: 'column', md: 'row' }} spacing={8} justify="center">
          <VStack mb={{ base: 8, md: 0 }} spacing={4} align="center" w={{ base: '100%', md: 'auto' }}>
            <Text fontWeight="bold" fontSize="2xl" color="teal.500">
              ✓
            </Text>
            <Heading as="h3" size="md">
              Easy to Use
            </Heading>
            <Text textAlign="center">
              Simple interface to manage tasks with ease.
            </Text>
          </VStack>
          <VStack mb={{ base: 8, md: 0 }} spacing={4} align="center" w={{ base: '100%', md: 'auto' }}>
            <Text fontWeight="bold" fontSize="2xl" color="teal.500">
              ✓
            </Text>
            <Heading as="h3" size="md">
              Comprehensive Tools
            </Heading>
            <Text textAlign="center">
              All the tools you need to stay on top of your work.
            </Text>
          </VStack>
          <VStack spacing={4} align="center" w={{ base: '100%', md: 'auto' }}>
            <Text fontWeight="bold" fontSize="2xl" color="teal.500">
              ✓
            </Text>
            <Heading as="h3" size="md">
              Collaboration
            </Heading>
            <Text textAlign="center">
              Work with your team seamlessly.
            </Text>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
};

export { Home };
