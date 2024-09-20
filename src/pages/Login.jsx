import React, { useState, useContext } from 'react';
import { Heading, Input, Button, VStack, Container, Box, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContextProvider';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);

    async function handleIn() {
        try {
            let res = await axios.post("https://reqres.in/api/login", {
                email,
                password
            });

            console.log(res.data.token);
            login(res.data.token); // Assuming login function saves the token or manages state
            
            navigate('/'); // Navigate after successful login

        } catch (error) {
            console.log(error);
        }
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    const containerBg = useColorModeValue('white', 'gray.800');
    const inputBg = useColorModeValue('gray.50', 'gray.700');
    const buttonBg = useColorModeValue('teal.500', 'teal.300');

    return (
        <Container
            maxW={{ base: '90%', md: '500px' }}
            padding={6}
            bg={containerBg}
            borderRadius="md"
            boxShadow="md"
            centerContent
        >
            <VStack spacing={6}>
                <Heading as="h1" size="xl" textAlign="center" color="teal.600">
                    Login
                </Heading>
                <Box width="100%">
                    <Input
                        placeholder='Enter your email'
                        value={email}
                        type='email'
                        name='email'
                        onChange={handleChangeEmail}
                        mb={4}
                        bg={inputBg}
                        borderColor="gray.300"
                        focusBorderColor="teal.500"
                    />
                    <Input
                        placeholder='Enter your password'
                        value={password}
                        type='password'
                        name='password'
                        onChange={handleChangePassword}
                        mb={6}
                        bg={inputBg}
                        borderColor="gray.300"
                        focusBorderColor="teal.500"
                    />
                </Box>
                <Button
                    variant="solid"
                    colorScheme="teal"
                    size={useBreakpointValue({ base: 'md', md: 'lg' })}
                    onClick={handleIn}
                    width="full"
                >
                    Login
                </Button>
            </VStack>
        </Container>
    );
}

export { Login };
