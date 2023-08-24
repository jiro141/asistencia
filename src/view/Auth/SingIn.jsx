import React from "react";
import {
    Box,
    Text,
} from "@chakra-ui/react";
import { InputPassword } from "../../components/widgets/Inputs/InputPassword";
import { InputGeneral } from "../../components/widgets/Inputs/Input";
import { GeneralButton } from "../../components/widgets/Buttons/GeneralButton";
import fondo from '../../recursos/Diseño sin título.png'

const SingIn = () => {
    return (
        <Box
            backgroundImage={fondo}
            backgroundSize="cover"
            backgroundPosition="center"
            minHeight="100vh" // Asegura que el componente ocupe al menos la altura completa de la ventana
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Box
                backgroundColor="white"
                padding="20px"
                border="solid"
                borderRadius="16px"
                borderColor="teal.400"
            >
                <Text textAlign="center" fontSize="20px" fontWeight="bold">Iniciar sesión</Text>
                <Box margin="30px 80px">
                    <InputGeneral />
                    <InputPassword />
                    <Box textAlign="center">
                        <GeneralButton title="Iniciar sesión" />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default SingIn;
