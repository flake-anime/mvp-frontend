import Head from 'next/head'
import { 
    Input,
    Container, 
    Button,
    HStack,
    Heading,
    Box,
    Image,
    VStack,
} from '@chakra-ui/react'
import SearchResult from '../components/search_result'

export default function ResultPage() {
    const result = {
        imageUrl: 'https://i.pinimg.com/originals/ba/b3/a5/bab3a5e4bf5075ac5a86e5923acdc9b9.png',
        imageAlt: 'Oregairu',
        title: 'My Youth Romantic Comedy Is Wrong, As I Expected',
    }

    return (
    <div>
        <Head>
            <title>Flake Anime</title>
        </Head>
        <Container maxW="100%" padding="10px" centerContent="true">
            <VStack spacing="30px">
                <HStack spacing="2px" maxW="sm">
                    <Input placeholder="Search" />
                    <Button>Search</Button>
                </HStack>
                <Heading as="h5" size="sm">Search Result</Heading>
                <SearchResult image_url={result.imageUrl} image_alt={result.imageAlt} title={result.title} />
            </VStack>
        </Container>
    </div>
    )
}
