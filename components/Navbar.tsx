import Link from 'next/link';
import { Flex, Spacer } from '@chakra-ui/react'

export default function Navbar() {
    return (
        <Flex direction="row" w="100%" p="5" bg="gray.100">
            <Spacer />
            <Link href="">Home</Link>
            <Spacer />
            <Link href="">Work</Link>
            <Spacer />
            <Link href="">About</Link>
            <Spacer />
            <Link href="">Blog</Link>
            <Spacer />
            <Link href="">Contact</Link>
        </Flex>
    )
}
