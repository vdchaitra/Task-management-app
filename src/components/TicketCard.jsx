import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Heading, Box, Button, Stack, Text, StackDivider } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function TicketCard({ title, status, priority, id }) {
    const navigate = useNavigate();

    return (
        <Card>
            <CardHeader>
                <Heading size='md'>{title}</Heading>
            </CardHeader>

            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Status
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {status}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Priority
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {priority}
                        </Text>
                    </Box>
                </Stack>
            </CardBody>
            <CardFooter>
                <Button 
                    colorScheme="teal" 
                    variant="outline" 
                    onClick={() => navigate(`/ticket/view/${id}`)}
                    aria-label={`View details of ticket ${id}`}
                >
                    View Details
                </Button>
            </CardFooter>
        </Card>
    );
}

// Adding PropTypes for validation
TicketCard.propTypes = {
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    priority: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
};

export default TicketCard;
