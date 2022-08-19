import Link from 'next/link';
import { Flex, Spacer } from '@chakra-ui/react'

export default function Navbar() {
    return (
        <Flex direction="row" w="100%" p="5" bg="gray.100">
            <Spacer />
            <Link href="">Home</Link>
            <Link href="">Work</Link>
            <Link href="">About</Link>
            <Link href="">Blog</Link>
            <Link href="">Contact</Link>
        </Flex>
    )
}
