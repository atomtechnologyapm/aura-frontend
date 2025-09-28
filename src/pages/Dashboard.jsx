import { 
    Box, 
    Flex, 
    Text, 
    Heading, 
    Grid, 
    Button,
    VStack,
    HStack
} from "@chakra-ui/react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

// Icons simples usando símbolos
const DashboardIcon = () => <Text fontSize="20px">📊</Text>;
const ProfileIcon = () => <Text fontSize="20px">👤</Text>;
const SettingsIcon = () => <Text fontSize="20px">⚙️</Text>;
const LogoutIcon = () => <Text fontSize="20px">🚪</Text>;
const TrendingUpIcon = () => <Text fontSize="20px">📈</Text>;
const UsersIcon = () => <Text fontSize="20px">👥</Text>;
const RevenueIcon = () => <Text fontSize="20px">💰</Text>;
const OrdersIcon = () => <Text fontSize="20px">📦</Text>;

function StatCard({ title, value, change, icon, color = "#4318FF" }) {
    return (
        <Box 
            bg="rgba(255, 255, 255, 0.1)" 
            backdropFilter="blur(20px)"
            border="1px solid rgba(255, 255, 255, 0.2)"
            color="white"
            p={6}
            rounded="xl"
        >
            <Flex justify="space-between" align="center" mb={4}>
                <Box>
                    <Text fontSize="sm" color="whiteAlpha.700" mb={1}>
                        {title}
                    </Text>
                    <Text fontSize="2xl" fontWeight="bold">
                        {value}
                    </Text>
                </Box>
                <Box color={color} fontSize="24px">
                    {icon}
                </Box>
            </Flex>
            <HStack>
                <TrendingUpIcon />
                <Text fontSize="sm" color="green.300">
                    {change}
                </Text>
                <Text fontSize="sm" color="whiteAlpha.600">
                    vs último mês
                </Text>
            </HStack>
        </Box>
    );
}

function ProgressCard({ title, value, total, percentage }) {
    return (
        <Box 
            bg="rgba(255, 255, 255, 0.1)" 
            backdropFilter="blur(20px)"
            border="1px solid rgba(255, 255, 255, 0.2)"
            color="white"
            p={6}
            rounded="xl"
        >
            <Text fontSize="sm" color="whiteAlpha.700" mb={2}>
                {title}
            </Text>
            <Text fontSize="xl" fontWeight="bold" mb={3}>
                {value} / {total}
            </Text>
            {/* Progress bar customizada */}
            <Box bg="rgba(255, 255, 255, 0.3)" h="8px" rounded="full" mb={2}>
                <Box 
                    bg="linear-gradient(90deg, #4318FF 0%, #6B46C1 100%)"
                    h="100%" 
                    w={`${percentage}%`} 
                    rounded="full"
                    transition="width 0.3s ease"
                />
            </Box>
            <Text fontSize="sm" color="whiteAlpha.600">
                {percentage}% completado
            </Text>
        </Box>
    );
}

function Profile() {
    return (
        <Box color="white">
            <Heading mb={4}>Perfil do Usuário</Heading>
            <Box bg="rgba(255, 255, 255, 0.1)" backdropFilter="blur(20px)" border="1px solid rgba(255, 255, 255, 0.2)" p={6} rounded="xl">
                <Text color="white">Informações do perfil aqui...</Text>
            </Box>
        </Box>
    );
}

function Home() {
    return (
        <VStack spacing={6} align="stretch">
            {/* Header */}
            <Flex justify="space-between" align="center">
                <Box>
                    <Heading color="white" size="lg" mb={2}>
                        Dashboard
                    </Heading>
                    <Text color="whiteAlpha.700">
                        Bem-vindo de volta! Aqui está o que está acontecendo.
                    </Text>
                </Box>
            </Flex>

            {/* Stats Cards */}
            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={6}>
                <StatCard 
                    title="Total de Usuários"
                    value="2,420"
                    change="+12%"
                    icon={<UsersIcon />}
                    color="#00D4FF"
                />
                <StatCard 
                    title="Receita"
                    value="R$ 45.2K"
                    change="+8%"
                    icon={<RevenueIcon />}
                    color="#05CD99"
                />
                <StatCard 
                    title="Pedidos"
                    value="1,340"
                    change="+15%"
                    icon={<OrdersIcon />}
                    color="#FFB547"
                />
                <StatCard 
                    title="Taxa de Conversão"
                    value="12.5%"
                    change="+3%"
                    icon={<TrendingUpIcon />}
                    color="#4318FF"
                />
            </Grid>

            {/* Progress Cards */}
            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
                <ProgressCard 
                    title="Meta Mensal"
                    value="8.5K"
                    total="10K"
                    percentage={85}
                />
                <ProgressCard 
                    title="Projetos Ativos"
                    value="12"
                    total="15"
                    percentage={80}
                />
            </Grid>
        </VStack>
    );
}

function Sidebar({ onLogout }) {
    const menuItems = [
        { icon: <DashboardIcon />, label: "Dashboard", path: "/dashboard" },
        { icon: <ProfileIcon />, label: "Perfil", path: "profile" },
        { icon: <SettingsIcon />, label: "Configurações", path: "settings" },
    ];

    return (
        <Box
            w="280px"
            h="100vh"
            bg="rgba(11, 20, 38, 0.9)"
            backdropFilter="blur(20px)"
            borderRight="1px solid rgba(255, 255, 255, 0.1)"
            p={6}
        >
            {/* Logo */}
            <Box mb={8}>
                <Heading color="white" size="lg" mb={2}>
                    VISION UI
                </Heading>
                <Text color="whiteAlpha.600" fontSize="sm">
                    Dashboard
                </Text>
            </Box>

            {/* Menu Items */}
            <VStack spacing={2} align="stretch">
                {menuItems.map((item, index) => (
                    <Link key={index} to={item.path}>
                        <Button
                            variant="ghost"
                            color="whiteAlpha.800"
                            justifyContent="flex-start"
                            leftIcon={item.icon}
                            w="full"
                            _hover={{
                                bg: "rgba(67, 24, 255, 0.2)",
                                color: "white",
                            }}
                            _active={{
                                bg: "rgba(67, 24, 255, 0.3)",
                            }}
                        >
                            {item.label}
                        </Button>
                    </Link>
                ))}
            </VStack>

            {/* Logout Button */}
            <Box position="absolute" bottom={6} left={6} right={6}>
                <Button
                    variant="outline"
                    colorScheme="red"
                    leftIcon={<LogoutIcon />}
                    w="full"
                    onClick={onLogout}
                    border="1px solid rgba(255, 255, 255, 0.3)"
                    color="white"
                    _hover={{
                        bg: "rgba(255, 0, 0, 0.1)",
                        borderColor: "red.400",
                    }}
                >
                    Logout
                </Button>
            </Box>
        </Box>
    );
}

export default function Dashboard() {
    const navigate = useNavigate();
    
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <Flex 
            h="100vh" 
            bg="linear-gradient(135deg, #4318FF 0%, #1A202C 100%)"
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
            {/* Sidebar */}
            <Box position="relative" zIndex={1}>
                <Sidebar onLogout={handleLogout} />
            </Box>

            {/* Main Content */}
            <Box flex={1} p={8} position="relative" zIndex={1} overflowY="auto">
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="profile" element={<Profile />} />
                </Routes>
            </Box>
        </Flex>
    );
}
