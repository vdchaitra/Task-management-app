import React from 'react';
import {
  Container,
  Heading,
  Stack,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useBreakpointValue,
  useColorModeValue
} from '@chakra-ui/react';

function Contact() {
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('gray.700', 'gray.200');

  return (
    <Container maxW="container.md" padding={6} bg={bgColor} borderRadius="md" boxShadow="lg">
      <Stack spacing={6} align="center">
        <Heading as="h1" size="2xl" color={textColor} textAlign="center">
          Contact Us
        </Heading>
        <Box width="100%">
          <Stack spacing={4}>
            <FormControl id="name">
              <FormLabel color={textColor}>Name</FormLabel>
              <Input placeholder="Your Name" size="lg" />
            </FormControl>
            <FormControl id="email">
              <FormLabel color={textColor}>Email</FormLabel>
              <Input type="email" placeholder="Your Email" size="lg" />
            </FormControl>
            <FormControl id="message">
              <FormLabel color={textColor}>Message</FormLabel>
              <Textarea placeholder="Your Message" size="lg" rows={6} />
            </FormControl>
            <Button
              colorScheme="teal"
              size={useBreakpointValue({ base: 'md', md: 'lg' })}
              mt={4}
            >
              Send Message
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}

export { Contact };
