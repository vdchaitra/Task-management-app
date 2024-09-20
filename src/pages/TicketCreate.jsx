import React, { useState } from 'react';
import { Button, Container, Input, Select, Textarea, VStack, Alert, AlertIcon, FormLabel, FormControl } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import LoadingIndicator from '../components/LoadingIndicator';
import ErrorIndicator from '../components/ErrorIndicator';

function TicketCreate() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const isFormValid = () => title && description  && priority && status;

  async function handleTicket() {
    if (!isFormValid()) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const newTicket = {
        id: Date.now().toString(), // Unique ID for the ticket
        title,
        description,
        priority: Number(priority), // Ensure priority is sent as a number
        status,
      };

      setLoading(true);

      // Get existing tickets from localStorage
      const tickets = JSON.parse(localStorage.getItem('tickets')) || [];
      // Add the new ticket to the list
      tickets.push(newTicket);
      // Save the updated ticket list back to localStorage
      localStorage.setItem('tickets', JSON.stringify(tickets));

      navigate('/tickets');
    } catch (error) {
      console.error('Error creating ticket:', error);
      setError('There was an error creating the ticket. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <Container maxW="1000px" padding={6}>
      <VStack spacing={4} align="stretch">
        {error && (
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
        )}
        <FormControl isRequired>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input
            id="title"
            placeholder="Enter Your Title"
            size="lg"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="description">Description</FormLabel>
          <Textarea
            id="description"
            placeholder="Enter Your Description"
            size="lg"
            value={description}
            padding={2}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>
        
        <FormControl isRequired>
          <FormLabel htmlFor="priority">Priority</FormLabel>
          <Select
            id="priority"
            placeholder="Select Priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            {[...Array(10).keys()].map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="status">Status</FormLabel>
          <Select
            id="status"
            placeholder="Select Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </Select>
        </FormControl>
        <Button colorScheme="teal" variant="outline" onClick={handleTicket}>
          Create Ticket
        </Button>
      </VStack>
    </Container>
  );
}

export default TicketCreate;
