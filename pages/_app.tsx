import type { AppProps } from 'next/app';
import { ChakraProvider, Box } from "@chakra-ui/react";

import Navbar from "../components/Navbar";

function MyPortfolio({Component, pageProps}: AppProps){
    return(
        <ChakraProvider>
            <Navbar />
            <Box w='80%' mx='auto' p='5' mb='24'>
                <h1>Hello world</h1>
            </Box>
        </ChakraProvider>
    )
}

export default MyPortfolio