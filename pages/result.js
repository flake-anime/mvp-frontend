import Head from 'next/head'
import { 
    Input,
    Center,
    Container, 
    Button,
    HStack,
    Heading,
    Box,
    Image,
    Badge,
    VStack,
} from '@chakra-ui/react'

export default function Home() {
    const property = {
        imageUrl: 'https://i.pinimg.com/originals/ba/b3/a5/bab3a5e4bf5075ac5a86e5923acdc9b9.png',
        imageAlt: 'Oregairu',
        beds: 3,
        baths: 2,
        title: 'My Youth Romantic Comedy Is Wrong, As I Expected',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,
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

                <Box borderWidth='1px' borderRadius='lg' overflow='wrap'>
                    <HStack>
                        <Image src={property.imageUrl} alt={property.imageAlt} height="100px" />
                        <Box p='6'>
                            <Box
                                mt='1'
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                isTruncated
                            >
                                {property.title}
                            </Box>
                        </Box>
                    </HStack>
                </Box>
            </VStack>


        </Container>
    </div>
    )
}
