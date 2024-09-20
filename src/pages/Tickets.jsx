import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Select,
  SimpleGrid,
  Text,
  Center,
  Heading,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import LoadingIndicator from '../components/LoadingIndicator';
import ErrorIndicator from '../components/ErrorIndicator';
import TicketCard from '../components/TicketCard';

function Tickets() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [ticketDetails, setTicketDetails] = useState([]);
  const [sortOrderValue, setSortOrderValue] = useState('');
  const [filterValue, setFilterValue] = useState('');

  // Function to get tickets from localStorage
  const fetchData = (sortOrderValue, filterValue) => {
    setLoading(true);
    setError(false);

    try {
      let tickets = JSON.parse(localStorage.getItem('tickets')) || [];

      // Apply filter by status if selected
      if (filterValue) {
        tickets = tickets.filter((ticket) => ticket.status === filterValue);
      }

      // Apply sorting by priority if selected
      if (sortOrderValue) {
        tickets.sort((a, b) =>
          sortOrderValue === 'asc' ? a.priority - b.priority : b.priority - a.priority
        );
      }

      setTicketDetails(tickets);
    } catch (error) {
      console.error('Error fetching ticket data from local storage:', error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // Run fetchData when sortOrderValue or filterValue changes
  useEffect(() => {
    fetchData(sortOrderValue, filterValue);
  }, [sortOrderValue, filterValue]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <Container maxW="container.xl">
      <Box bg="gray.50" color="gray.800" minH="100vh" p={6}>
        {/* Header Section */}
        <Flex direction="row-reverse" alignItems="center" mb={6}>
          <Button
            colorScheme="teal"
            variant="solid"
            size="lg"
            onClick={() => navigate('/ticket/create')}
          >
            Create Task
          </Button>
          <HStack spacing={4} mr={4}>
            <Select
              placeholder="Sort By Priority"
              value={sortOrderValue}
              onChange={(e) => setSortOrderValue(e.target.value)}
              borderColor="teal.500"
              focusBorderColor="teal.600"
              size="lg"
            >
              <option value="asc">Low To High</option>
              <option value="desc">High To Low</option>
            </Select>
            <Select
              placeholder="Filter By Status"
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              borderColor="teal.500"
              focusBorderColor="teal.600"
              size="lg"
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </Select>
          </HStack>
        </Flex>

        {/* Tickets Overview */}
        <Box mb={8}>
          <Heading as="h2" size="xl" mb={4}>
            Task Overview
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Manage your tasks efficiently by sorting and filtering based on priority and status.
          </Text>
        </Box>

        {/* Ticket Grid Section */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {ticketDetails.length > 0 ? (
            ticketDetails.map((ticket) => (
              <Box key={ticket.id}>
                <TicketCard {...ticket} />
              </Box>
            ))
          ) : (
            <Center w="100%">
              <Text fontSize="lg" color="gray.600">No tickets found.</Text>
            </Center>
          )}
        </SimpleGrid>
      </Box>
    </Container>
  );
}

export { Tickets };
