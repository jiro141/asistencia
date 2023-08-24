import {
    Input,
    InputGroup,
    Button,
    InputRightElement,
    FormControl,
    FormLabel
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";


export function InputPassword() {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
        <FormControl margin={'20px 0px'} variant="floating" id="first-name" isRequired >
            <InputGroup size='md'>
                <Input
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder=''
                />
                <FormLabel>Contraseña</FormLabel>
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>
    )
}