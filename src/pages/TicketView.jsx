import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingIndicator from '../components/LoadingIndicator';
import ErrorIndicator from '../components/ErrorIndicator';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Box,
  Button,
  Stack,
  Text,
  StackDivider,
  Divider,
  IconButton,
  Flex,
  useToast,
  Tooltip
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

function TicketView() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [ticketDetail, setTicketDetail] = useState({});
  const navigate = useNavigate();
  const toast = useToast();

  // Fetch ticket details from local storage
  useEffect(() => {
    setLoading(true);
    setError('');

    try {
      const tickets = JSON.parse(localStorage.getItem('tickets')) || [];
      const ticket = tickets.find((ticket) => ticket.id === id);

      if (ticket) {
        setTicketDetail(ticket);
      } else {
        setError('Ticket not found.');
      }
    } catch (error) {
      console.error('Error fetching ticket data from local storage:', error);
      setError('Failed to load ticket details.');
    } finally {
      setLoading(false);
    }
  }, [id]);

  // Handle ticket deletion
  const handleDelete = () => {
    try {
      const tickets = JSON.parse(localStorage.getItem('tickets')) || [];
      const updatedTickets = tickets.filter((ticket) => ticket.id !== id);
      
      localStorage.setItem('tickets', JSON.stringify(updatedTickets));

      toast({
        title: 'Ticket deleted.',
        description: 'The ticket has been successfully deleted.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      navigate('/tickets');
    } catch (error) {
      console.error('Error deleting ticket from local storage:', error);
      toast({
        title: 'Delete failed.',
        description: 'Failed to delete the ticket. Please try again later.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator message={error} />;
  }

  const { title, description, status, priority } = ticketDetail;

  return (
    <Flex direction="column" align="center" p={4}>
      <Card
        borderWidth={1}
        borderRadius="lg"
        boxShadow="md"
        bg="white"
        maxW="md"
        width="100%"
        p={4}
      >
        <CardHeader>
          <Heading size='lg' textAlign="center" color="teal.600">
            {title}
          </Heading>
        </CardHeader>

        <CardBody>
          <Stack spacing='4' divider={<StackDivider borderColor="gray.200" />}>
            <Box>
              <Heading size='sm' textTransform='uppercase' color="gray.600">
                Description
              </Heading>
              <Text pt='2' fontSize='md' color="gray.700">
                {description}
              </Text>
            </Box>
           
            <Box>
              <Heading size='sm' textTransform='uppercase' color="gray.600">
                Status
              </Heading>
              <Text pt='2' fontSize='md' color="gray.700">
                {status}
              </Text>
            </Box>
            <Box>
              <Heading size='sm' textTransform='uppercase' color="gray.600">
                Priority
              </Heading>
              <Text pt='2' fontSize='md' color="gray.700">
                {priority}
              </Text>
            </Box>
          </Stack>
          <Divider my={4} />
          <Flex direction={{ base: 'column', md: 'row' }} spacing={4} justify="center" gap={4}>
            <Tooltip label="Edit Ticket" aria-label="Edit Ticket">
              <IconButton
                icon={<EditIcon />}
                colorScheme="teal"
                variant="outline"
                aria-label="Edit Ticket"
                onClick={() => navigate(`/ticket/edit/${id}`)}
                size="lg"
              />
            </Tooltip>
            <Tooltip label="Delete Ticket" aria-label="Delete Ticket">
              <IconButton
                icon={<DeleteIcon />}
                colorScheme="red"
                variant="outline"
                aria-label="Delete Ticket"
                onClick={handleDelete}
                size="lg"
              />
            </Tooltip>
          </Flex>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default TicketView;
