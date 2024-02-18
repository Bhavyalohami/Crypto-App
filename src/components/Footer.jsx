import React from 'react'
import {Avatar, Box, Stack, Text, VStack} from '@chakra-ui/react'
import imageSRC from '../assets/image.jpg'

const Footer = () => {
  return <>
  <Box bgColor={'black'} color={'whitesmoke'} minH={'48'} px={'16'} py={['16','8']}>
    <Stack direction={['column','row']} h={'full'} alignItems={'center'}>
        <VStack w={'full'} alignItems={['center','flex-start']}>
            <Text fontWeight={'bold'}>About Us</Text>
            <Text fontSize={'sm'} letterSpacing={'widest'} textAlign={['center','left']}>The best trading application in the market.</Text>
        </VStack>
        <VStack>
            <Avatar boxSize={'28'} mt={['4','0']} src={imageSRC}/>
            <Text>Founder</Text>
        </VStack>
    </Stack>
  </Box>
  </>
}

export default Footer