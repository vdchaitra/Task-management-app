import { useContext } from 'react';
import { Link as ReactRouterLink, useLocation } from 'react-router-dom';
import { Link as ChakraLink, Flex } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { AuthContext } from '../context/AuthContextProvider';

function LinksIt() {
    const lists = [
        { to: "/", display: "Home" },
        { to: "/tickets", display: "Task" },
        { to: "/about", display: "About" },
        { to: "/contact", display: "Contact" },
        { to: "/login", display: "Login" },
    ];

    const { logout } = useContext(AuthContext);
    const location = useLocation();

    return (
        <div>
            <Flex align="center" justify="space-around" backgroundColor="gray.200" padding={4}>
                {lists.map((list) => (
                    <ChakraLink
                        key={list.to}
                        as={ReactRouterLink}
                        to={list.to}
                        color={location.pathname === list.to ? "teal.500" : "gray.900"}
                        aria-label={list.display}
                    >
                        {list.display}
                    </ChakraLink>
                ))}
                <Button colorScheme="teal" variant="outline" onClick={logout} aria-label="Logout">
                    LOGOUT
                </Button>
            </Flex>
        </div>
    );
}

export default LinksIt;
