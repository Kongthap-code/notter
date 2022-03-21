import React from "react";
import {
    Grid,
    Box,
    Text,
    Input,
    Button,
    FormLabel,
    Flex,
    Spacer,
} from "@chakra-ui/react";
import Fonts from "../Component/fonts"
import { CustomButton } from "../Component/Button";
import { Header } from "../Component/Header";

export const Register = () => {
    return (
        <Box w="100vw" pos="relative" minH="100vh">
            <Fonts />
            <Header/>
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
                        Sign up to Notter
                    </Text>
                    <form>
                        <FormLabel>
                            <Text as="sub" textAlign="left" color="gray.600">
                                Email
                            </Text>
                        </FormLabel>
                        <Input
                            variant="flushed"
                            type="email"
                            id="email"
                            placeholder="Enter your email address..."
                        />
                        <FormLabel>
                            <Text as="sub" textAlign="left" color="gray.600">
                                Full Name
                            </Text>
                        </FormLabel>
                        <Input
                            variant="flushed"
                            type="name"
                            id="name"
                            placeholder="Enter your Full Name.."
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
                            placeholder="Enter your password..."
                        />
                        <CustomButton label="Register" colorScheme="twitter" variant="outline" w="100%" mt="3"/> 
                    </form>
                    <Flex>
                        <Text color='gray.500' mr="2">You have a account?</Text>
                        <a>Login</a>
                        <Spacer />
                    </Flex>
                </Grid>
            </Box>
        </Box>
    )
}