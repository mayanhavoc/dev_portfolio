import React from 'react';
import {
      Box
    , Heading
    , Text
    , Spinner
    , Center,
} from '@chakra-ui/react';
import { useEffect, useState } from "react";
import type { NextPage } from "next";
import ProfileCard from '../components/ProfileCard';


const Home : NextPage = () => {
    return (
        <Box display='flex' alignItems='center' justifyContent='start' color='black' p='5' m='5' mx='auto' maxW='960px'>
            <ProfileCard />
        </Box>
    )
}

export default Home