import {
    Input,
    InputGroup,
    Button,
    InputRightElement,
    FormControl,
    FormLabel
} from "@chakra-ui/react";

export function InputGeneral() {
    return (
        <FormControl margin={'20px 0px'} variant="floating" id="first-name" isRequired >
            <InputGroup size='md'>
                <Input
                    pr='4.5rem'
                    type={'text'}
                    placeholder=''
                />
                <FormLabel>Usuario</FormLabel>
            </InputGroup>
        </FormControl>
    )
}