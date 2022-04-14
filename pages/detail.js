import Head from 'next/head'
import { 
    Container, 
    Button,
    Text,
    Image,
    VStack,
    Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

export default function AnimeDetailPage() {
  return (
    <div>
        <Head>
            <title>Flake Anime</title>
        </Head>
        <Container maxW="100%" padding="50px 10px" centerContent="true">
        <VStack spacing="30px">
            <Heading as="h1" size="lg">Death Note (Dub)</Heading>
            <Image src="https://gogocdn.net/cover/death-note-dub.png" height="400px" borderRadius="8px" />
            <Button>Watch Now!</Button>
            <TableContainer>
                <Table variant='simple'>
                    <TableCaption placement='top'>Overview</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Type</Th>
                            <Th>Genre</Th>
                            <Th>Released</Th>
                            <Th>Status</Th>
                            <Th>Other name</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>TV Series</Td>
                            <Td>
                                Drama , Mystery , Police , <br /> 
                                Psychological , Shounen , Supernatural , <br /> 
                                Thriller
                            </Td>
                            <Td>2003</Td>
                            <Td>Completed</Td>
                            <Td>デスノート</Td>
                            <Th>Genre</Th>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
            <Text maxW="600px" align="justify">
                Yagami Light is a 17-year-old genius from Japan who is tired of his life, school, and the state of the world as he knows it. One day, on the way home from class, Light stumbles upon a dark notebook with "Death Note" written on the front. Intrigued by its appearance, Light reads the first few sentences, only to find out that it states that anyone whose name is written inside will die. Discarding it as a joke, Light continues his daily activities. Soon after though, his human curiosity takes the better of him and prompts Light to try the notebook, discovering the truth behind first sentence. Now, with power in his hands, Yagami Light is on a quest to change the world and become God of the New World. His path to holy status won't be easy however, as another genius, known as L, is working against Light's beliefs and Light himself. Who will win this power of Gods between humans?
            </Text>
        </VStack>
        </Container>
    </div>
  )
}
