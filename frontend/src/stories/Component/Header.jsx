import React from "react";
import { Flex, Text,Image } from "@chakra-ui/react";
import LogoNotter from '../assets/notter.svg'

export const Header = () => {
    return (
        <Flex direction="row" alignItems="center" p="4">
            <Image src={LogoNotter} alt="Logo"  width="auto" height="40px" />
            <Text>Notter</Text>
        </Flex>
    )
}