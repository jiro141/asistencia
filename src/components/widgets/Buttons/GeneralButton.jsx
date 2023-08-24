import { Button } from "@chakra-ui/react";

export function GeneralButton({ title }) {
    return (
        <Button
            size='md'
            height='48px'
            width='200px'
            border='2px'
            borderColor='teal.400'
            backgroundColor={'teal.400'}
            color={'whiteAlpha.900'}
            _hover={{ bg: 'teal.500', cursor: 'pointer' }}
        >
            {title}
        </Button>
    )
}