import { Flex, Avatar, Text, Box, Badge } from '@chakra-ui/react'

export default function ProfileCard() {
    const profile = {
        imageUrl: '/images/profile_photo.jpg',
        imageAlt: 'A cartoon drawing of Roberto',
        name: 'Roberto M',
        age: '37',
        title: 'Full Stack Developer'
    }
    return (
        <Box width={['0%', '100%']}>
            <Flex rounded='md' p='1' >
                <Avatar src={profile.imageUrl} alt={profile.imageAlt}/>
                <Box ml='1'>
                  <Text fontWeight='bold'>
                    Roberto M
                    <Badge ml='1' colorScheme='green'>
                      DEV
                    </Badge>
                  </Text>
                  <Text fontSize='sm'>Full Stack Engineer</Text>
                </Box>
            </Flex>
        </Box>
    )
}