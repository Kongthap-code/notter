import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../apollo/mutations";

import {
    Grid,
    Box,
    Text,
    Input,
    FormLabel,
    Flex,
    Spacer,
    Alert,
    AlertIcon,
} from "@chakra-ui/react";
import Fonts from "../Component/fonts"
import { Header } from "../Component/Header";
import { CustomButton } from "../Component/Button";

function FormLogin() {
    const [input, setInput] = useState({
        username: "",
        password: "",
    });
    const [error, setError] = useState('');

    const hendleChange = (e) => {
        const newInput = { ...input };
        newInput[e.target.id] = e.target.value;
        setInput(newInput)
    }

    const [login, { loading }] = useMutation(LOGIN, {
        onCompleted({ login }) {
            if (login) {
                localStorage.setItem("token", login)
            }
        },
        onError(error) {
            setError(error);
        }
    })
    // if (loading) return 'Loading...'
    return (
        <form onSubmit={e => {
            e.preventDefault();
            login(
                {
                    variables:
                        { username: input.username, password: input.password }
                }
            )
        }}>
            {error && (
                <Alert status="error">
                    <AlertIcon />
                    {error.message}
                </Alert>
            )}
            <FormLabel>
                <Text as="sub" textAlign="left" color="gray.600">
                    Username
                </Text>
            </FormLabel>
            <Input
                variant="flushed"
                type="username"
                id="username"
                onChange={(e) => hendleChange(e)}
                placeholder="Enter your username..."
            />
            <FormLabel>
                <Text as="sub" textAlign="left" color="gray.600">
                    password
                </Text>
            </FormLabel>
            <Input
                variant="flushed"
                type="password"
                id="password"
                onChange={(e) => hendleChange(e)}
                placeholder="Enter your password..."
            />
            <FormLabel>
                <Text as="ins" color="gray.600" fontSize="12" textAlign="left">
                    Forgot your password?
                </Text>
            </FormLabel>
            <CustomButton label="Login" colorScheme="twitter" variant="outline" w="100%" mt="3" />
        </form>
    )
}

export const Login = () => {
    return (
        <Box w="100vw" pos="relative" minH="100vh">
            <Fonts />
            <Header />
            <Box
                w="100%"
                h="100%"
                pos="absolute"
                left="0"
                top="0"
                alignItems="center"
                justifyContent="center"
                d="flex"
            >
                <Grid
                    templateColumns={["300px", "350px"]}
                    gap={4}
                    textAlign="center"
                    p={["10px", "50px"]}
                >
                    <Text textStyle="h3" mb="12px">
                        Sign in to Notter
                    </Text>
                    <FormLogin />
                    <Flex>
                        <Text color='gray.500' mr="2">Need an account?</Text>
                        <div>Register</div>
                        <Spacer />
                    </Flex>
                </Grid>
            </Box>
        </Box>
    )
}