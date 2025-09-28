import {
    Flex,
    Box,
    Heading,
    Text,
    Input,
    Button,
    Field,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [user, setUser] = useState("admin");
    const [pass, setPass] = useState("admin");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login button clicked");
        
        // Login automático - qualquer entrada é aceita
        localStorage.setItem("token", "fake-token");
        console.log("Token set:", localStorage.getItem("token"));
        
        // Usar setTimeout para garantir que o token seja definido antes da navegação
        setTimeout(() => {
            console.log("Navigating to dashboard...");
            navigate("/dashboard");
        }, 100);
    };

    return (
        <Flex
            minH="100vh"
            align="center"
            justify="center"
            bg="#4318FF"
            px={6}
            position="relative"
            _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                bg: "rgba(11, 20, 38, 0.8)",
            }}
        >
            <Box
                bg="rgba(255, 255, 255, 0.1)"
                backdropFilter="blur(20px)"
                border="1px solid rgba(255, 255, 255, 0.2)"
                p={8}
                rounded="2xl"
                shadow="0 8px 32px 0 rgba(31, 38, 135, 0.37)"
                w={{ base: "100%", sm: "400px" }}
                position="relative"
                zIndex={1}
            >
                <Heading mb={2} textAlign="center" size="lg" color="white" fontWeight="bold">
                    Bem-vindo de volta
                </Heading>
                <Text mb={6} color="whiteAlpha.700" fontSize="sm" textAlign="center">
                    Digite seu e-mail e senha para entrar
                </Text>

                <form onSubmit={handleLogin}>
                    <Field.Root mb={4}>
                        <Field.Label color="white" mb={2} fontWeight="500">Usuário</Field.Label>
                        <Input
                            type="text"
                            placeholder="Digite seu usuário"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            bg="rgba(255, 255, 255, 0.1)"
                            border="1px solid rgba(255, 255, 255, 0.3)"
                            color="white"
                            _placeholder={{ color: "whiteAlpha.600" }}
                            _focus={{
                                borderColor: "#4318FF",
                                boxShadow: "0 0 0 1px #4318FF",
                            }}
                        />
                    </Field.Root>

                    <Field.Root mb={6}>
                        <Field.Label color="white" mb={2} fontWeight="500">Senha</Field.Label>
                        <Input
                            type="password"
                            placeholder="Digite sua senha"
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            bg="rgba(255, 255, 255, 0.1)"
                            border="1px solid rgba(255, 255, 255, 0.3)"
                            color="white"
                            _placeholder={{ color: "whiteAlpha.600" }}
                            _focus={{
                                borderColor: "#4318FF",
                                boxShadow: "0 0 0 1px #4318FF",
                            }}
                        />
                    </Field.Root>

                    <Button
                        type="submit"
                        w="full"
                        size="lg"
                        rounded="xl"
                        bg="linear-gradient(135deg, #4318FF 0%, #6B46C1 100%)"
                        color="white"
                        fontWeight="bold"
                        _hover={{
                            bg: "linear-gradient(135deg, #3311CC 0%, #553C9A 100%)",
                            transform: "translateY(-2px)",
                            boxShadow: "0 10px 25px rgba(67, 24, 255, 0.4)",
                        }}
                        _active={{
                            transform: "translateY(0)",
                        }}
                        transition="all 0.3s ease"
                    >
                        Entrar
                    </Button>
                </form>
            </Box>
        </Flex>
    );
}
