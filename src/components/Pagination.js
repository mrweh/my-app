import {
    Flex,
    Button,
    Spacer
} from '@chakra-ui/react';

export default function PaginationButton ({changePageDown, changePageUp}) {
    return (
        <>
            <Flex>
                <Button bgGradient='linear(to-l, gray.300, teal.800)' p='4' onClick={changePageDown}>
                    Prev
                </Button>
                <Spacer/>
                <Button bgGradient='linear(to-r, gray.300, teal.800)' p='4' onClick={changePageUp}>
                    Next
                </Button>
            </Flex>
        </>
    )
}