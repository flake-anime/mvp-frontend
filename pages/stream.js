import Head from 'next/head'
import { 
    Container, 
    Heading,
    VStack,
} from '@chakra-ui/react'

export default function Home() {
    return (
    <div>
        <Head>
            <title>Flake Anime</title>
        </Head>
        <Container maxW="100%" padding="50px 10px" centerContent="true">
            <VStack spacing="30px">
                <Heading as="h1" size="lg">My Youth Romantic Comedy Is Wrong, As I Expected</Heading>
                <Heading as="h4" size="md">Episode 1</Heading>
                <iframe src="https://vidstreaming.io/streaming.php?id=MjkyOTI=&amp;title=Oregairu+Episode+13" allowfullscreen="true" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" height="450px" width="800px"></iframe>
            </VStack>
        </Container>
    </div>
    )
}
