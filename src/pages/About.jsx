import React from 'react'
import {
  Container,
  Heading,
  Text,
  Stack,
  Box,
  VStack,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';
function About() {
  return (
    <Container maxW="container.lg" padding={6}>
    <VStack spacing={6} align="start">
      <Heading as="h1" size="2xl" textAlign="center" color="teal.600">
        About TaskMaster
      </Heading>
      <Box>
        <Heading as="h2" size="xl" color="gray.700" mb={4}>
          Your Ultimate Task Management Solution
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Welcome to TaskMaster, the tool designed to help you manage your tasks effortlessly. Our platform provides an intuitive and user-friendly interface to help you stay organized and focused on what matters most.
        </Text>
      </Box>
      <Box>
        <Heading as="h3" size="lg" color="teal.500" mb={4}>
          Key Features
        </Heading>
        <Stack spacing={4}>
          <Box>
            <Heading size="md" color="gray.700">
              Create Tasks
            </Heading>
            <Text color="gray.500">
              Easily add and organize tasks with detailed descriptions to keep track of what needs to be done.
            </Text>
          </Box>
          <Box>
            <Heading size="md" color="gray.700">
              Set Priorities
            </Heading>
            <Text color="gray.500">
              Assign priority levels to your tasks so you can focus on the most important ones first.
            </Text>
          </Box>
          <Box>
            <Heading size="md" color="gray.700">
              Track Progress
            </Heading>
            <Text color="gray.500">
              Monitor the status of your tasks and visualize your progress with ease.
            </Text>
          </Box>
          <Box>
            <Heading size="md" color="gray.700">
              Assign Tasks
            </Heading>
            <Text color="gray.500">
              Delegate tasks to team members and manage collaborations efficiently.
            </Text>
          </Box>
        </Stack>
      </Box>
      <Box textAlign="center">
        <Button colorScheme="teal" size={useBreakpointValue({ base: 'md', md: 'lg' })}>
          Get Started
        </Button>
      </Box>
    </VStack>
  </Container>
  )
}

export {About} 
