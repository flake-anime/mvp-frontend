import Head from 'next/head'
import { 
  Input,
  Center,
  Container, 
  Button,
  HStack
} from '@chakra-ui/react'

export default function SearchPage() {
  return (
    <div>
      <Head>
        <title>Flake Anime</title>
      </Head>
      <Center height="100vh">
        <Container maxW="sm">
          <HStack spacing="2px">
            <Input placeholder="Search" />
            <Button>Search</Button>
          </HStack>
        </Container>
      </Center>
    </div>
  )
}
