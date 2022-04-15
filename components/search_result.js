import { 
    HStack,
    Box,
    Image,
} from '@chakra-ui/react'

export default function SearchResult({ image_url, image_alt, title }) {
    return(
        <Box borderWidth='1px' borderRadius='lg' overflow='wrap'>
            <HStack>
                <Image src={image_url} alt={image_alt} height="100px" />
                <Box p='6'>
                    <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        isTruncated
                    >
                        {title}
                    </Box>
                </Box>
            </HStack>
        </Box>
    )
}