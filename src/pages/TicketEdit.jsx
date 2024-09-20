import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Button,
  Container,
  Input,
  Select,
  Textarea,
  VStack,
  Box,
  FormControl,
  FormLabel,
  useToast,
} from '@chakra-ui/react';

function TicketEdit() {
  const { id } = useParams();
  const [ticketDetail, setTicketDetail] = useState({});
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    // Fetch the ticket from localStorage
    const tickets = JSON.parse(localStorage.getItem('tickets')) || [];
    const ticket = tickets.find((ticket) => ticket.id === id);
    if (ticket) {
      setTicketDetail(ticket);
    }
  }, [id]);

  function handleSubmit() {
    const updatedTicket = {
      ...ticketDetail,
    };

    // Get existing tickets from localStorage
    const tickets = JSON.parse(localStorage.getItem('tickets')) || [];
    const updatedTickets = tickets.map((ticket) =>
      ticket.id === id ? updatedTicket : ticket
    );

    // Save updated tickets back to localStorage
    localStorage.setItem('tickets', JSON.stringify(updatedTickets));

    toast({
      title: 'Ticket updated.',
      description: 'The ticket details have been updated successfully.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });

    navigate('/tickets'); // Navigate back to the tickets list
  }

  const { title, description, status, priority } = ticketDetail;

  return (
    <Container maxW="container.md" padding={6}>
      <Box borderWidth={1} borderRadius="lg" boxShadow="md" padding={6} bg="white">
        <VStack spacing={4} align="stretch">
          <FormControl id="title" isRequired>
            <FormLabel>Title</FormLabel>
            <Input
              placeholder="Enter the title"
              size="lg"
              value={title || ''}
              onChange={(e) => setTicketDetail({ ...ticketDetail, title: e.target.value })}
            />
          </FormControl>

          <FormControl id="description" isRequired>
            <FormLabel>Description</FormLabel>
            <Textarea
              placeholder="Enter the description"
              size="lg"
              value={description || ''}
              onChange={(e) => setTicketDetail({ ...ticketDetail, description: e.target.value })}
            />
          </FormControl>

          

          <FormControl id="priority" isRequired>
            <FormLabel>Priority</FormLabel>
            <Select
              placeholder="Select priority"
              value={priority || ''}
              onChange={(e) => setTicketDetail({ ...ticketDetail, priority: Number(e.target.value) })}
            >
              {[...Array(10).keys()].map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl id="status" isRequired>
            <FormLabel>Status</FormLabel>
            <Select
              placeholder="Select status"
              value={status || ''}
              onChange={(e) => setTicketDetail({ ...ticketDetail, status: e.target.value })}
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </Select>
          </FormControl>

          <Button colorScheme="teal" variant="solid" onClick={handleSubmit}>
            Save Changes
          </Button>
        </VStack>
      </Box>
    </Container>
  );
}

export default TicketEdit;
