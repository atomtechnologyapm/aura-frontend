import { 
    Box, 
    Flex, 
    Text, 
    Heading, 
    Grid,
    VStack,
    HStack
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { CreditIcon, GlobeIcon, DocumentIcon, ShoppingIcon } from "../../components/Icons";
import VuiButton from "../../components/VuiButton";

// Icons
const DashboardIcon = ({ size = "20px", color = "white" }) => (
    <Box w={size} h={size} color={color}>
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
            <path 
                d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z" 
                fill="currentColor"
            />
        </svg>
    </Box>
);

const CoursesIcon = ({ size = "20px", color = "white" }) => (
    <Box w={size} h={size} color={color}>
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
            <path 
                d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" 
                fill="currentColor"
            />
            <path 
                d="M7 7H17V9H7V7ZM7 11H17V13H7V11ZM7 15H14V17H7V15Z" 
                fill="currentColor"
            />
        </svg>
    </Box>
);

const SchoolIcon = ({ size = "20px", color = "white" }) => (
    <Box w={size} h={size} color={color}>
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
            <path 
                d="M12 3L1 9L12 15L21 10.09V17H23V9L12 3ZM5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" 
                fill="currentColor"
            />
        </svg>
    </Box>
);

const TutorIcon = ({ size = "20px", color = "white" }) => (
    <Box w={size} h={size} color={color}>
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
            <path 
                d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" 
                fill="currentColor"
            />
        </svg>
    </Box>
);

const ProfileIcon = ({ size = "20px", color = "white" }) => (
    <Box w={size} h={size} color={color}>
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
            <path 
                d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.01C14.8 6.7 14.6 6.4 14.3 6.1L15.4 3H13.8L13 5.3C12.7 5.1 12.4 5 12 5S11.3 5.1 11 5.3L10.2 3H8.6L9.7 6.1C9.4 6.4 9.2 6.7 9 7.01L3 7V9H9C9 10.1 9.9 11 11 11V22H13V11C14.1 11 15 10.1 15 9H21Z" 
                fill="currentColor"
            />
        </svg>
    </Box>
);

const LogoutIcon = ({ size = "20px", color = "white" }) => (
    <Box w={size} h={size} color={color}>
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
            <path 
                d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.58L17 17L22 12L17 7ZM4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z" 
                fill="currentColor"
            />
        </svg>
    </Box>
);

function VisionStatCard({ title, value, change, bgGradient, icon }) {
    return (
        <Box 
            bg={bgGradient}
            p={6}
            rounded="15px"
            position="relative"
            overflow="hidden"
            minH="120px"
        >
            <Flex justify="space-between" align="flex-start" mb={4}>
                <Box>
                    <Text fontSize="xs" color="rgba(255,255,255,0.7)" mb={2} textTransform="uppercase" fontWeight="600">
                        {title}
                    </Text>
                    <Text fontSize="xl" fontWeight="bold" color="white">
                        {value}
                    </Text>
                </Box>
                <Box 
                    bg="rgba(67, 24, 255, 0.2)"
                    p={3}
                    rounded="12px"
                    border="1px solid rgba(67, 24, 255, 0.3)"
                >
                    {icon}
                </Box>
            </Flex>
            <HStack spacing={1}>
                <Text fontSize="xs" color="#01B574" fontWeight="700">
                    {change}
                </Text>
                <Text fontSize="xs" color="rgba(255,255,255,0.7)">
                    since yesterday
                </Text>
            </HStack>
        </Box>
    );
}

function LineAreaChart({ height = "200px" }) {
    const data = [
        { month: 'Jan', value: 50 },
        { month: 'Feb', value: 30 },
        { month: 'Mar', value: 70 },
        { month: 'Apr', value: 40 },
        { month: 'May', value: 85 },
        { month: 'Jun', value: 65 }
    ];

    return (
        <Box w="full">
            <Box h={height} position="relative" w="full" mb={4}>
                <svg width="100%" height="100%" viewBox="0 0 400 200">
                    <defs>
                        <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#4318FF" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#4318FF" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    
                    {/* Grid lines */}
                    {[0, 1, 2, 3, 4].map(i => (
                        <line 
                            key={i}
                            x1="40" 
                            y1={40 + i * 30} 
                            x2="380" 
                            y2={40 + i * 30} 
                            stroke="rgba(255,255,255,0.1)" 
                            strokeWidth="1"
                        />
                    ))}
                    
                    {/* Y-axis labels */}
                    {[100, 75, 50, 25, 0].map((value, i) => (
                        <text 
                            key={i}
                            x="30" 
                            y={45 + i * 30} 
                            fill="rgba(255,255,255,0.6)" 
                            fontSize="10" 
                            textAnchor="end"
                        >
                            {value}
                        </text>
                    ))}
                    
                    {/* Area */}
                    <path
                        d={`M 40 ${200 - data[0].value * 1.2} 
                           ${data.map((d, i) => `L ${60 + i * 56} ${200 - d.value * 1.2}`).join(' ')} 
                           L 380 200 L 40 200 Z`}
                        fill="url(#areaGradient)"
                    />
                    
                    {/* Line */}
                    <path
                        d={`M 40 ${200 - data[0].value * 1.2} 
                           ${data.map((d, i) => `L ${60 + i * 56} ${200 - d.value * 1.2}`).join(' ')}`}
                        fill="none"
                        stroke="#4318FF"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                    
                    {/* Points */}
                    {data.map((d, i) => (
                        <circle
                            key={i}
                            cx={i === 0 ? 40 : 60 + (i - 1) * 56}
                            cy={200 - d.value * 1.2}
                            r="4"
                            fill="#4318FF"
                            stroke="white"
                            strokeWidth="2"
                        />
                    ))}
                </svg>
            </Box>
            
            {/* X-axis labels */}
            <Flex justify="space-between" px={10}>
                {data.map((d, i) => (
                    <Text key={i} fontSize="xs" color="rgba(255,255,255,0.6)" fontWeight="600">
                        {d.month}
                    </Text>
                ))}
            </Flex>
        </Box>
    );
}

function DonutProgress({ percentage, size = 140 }) {
    const radius = size / 2 - 15;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <Box position="relative" w={`${size}px`} h={`${size}px`}>
            <svg width={size} height={size}>
                <defs>
                    <linearGradient id="donutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4318FF" />
                        <stop offset="100%" stopColor="#9F7AEA" />
                    </linearGradient>
                </defs>
                <circle
                    cx={size/2}
                    cy={size/2}
                    r={radius}
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="12"
                    fill="none"
                />
                <circle
                    cx={size/2}
                    cy={size/2}
                    r={radius}
                    stroke="url(#donutGradient)"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    transform={`rotate(-90 ${size/2} ${size/2})`}
                />
            </svg>
            <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                textAlign="center"
            >
                <Text color="white" fontSize="xl" fontWeight="bold">
                    {percentage}%
                </Text>
            </Box>
        </Box>
    );
}

function VisionBarChart() {
    const data = [40, 70, 35, 90, 45, 80, 60];
    const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    return (
        <Box w="full" h="full">
            <Box h="200px" position="relative" mb={4}>
                <svg width="100%" height="100%" viewBox="0 0 400 200">
                    {/* Grid lines */}
                    {[0, 1, 2, 3, 4].map(i => (
                        <line 
                            key={i}
                            x1="40" 
                            y1={40 + i * 30} 
                            x2="360" 
                            y2={40 + i * 30} 
                            stroke="rgba(255,255,255,0.1)" 
                            strokeWidth="1"
                        />
                    ))}
                    
                    {/* Y-axis labels */}
                    {[100, 75, 50, 25, 0].map((value, i) => (
                        <text 
                            key={i}
                            x="30" 
                            y={45 + i * 30} 
                            fill="rgba(255,255,255,0.6)" 
                            fontSize="10" 
                            textAnchor="end"
                        >
                            {value}
                        </text>
                    ))}
                    
                    {/* Bars */}
                    {data.map((height, index) => (
                        <rect
                            key={index}
                            x={60 + index * 40}
                            y={200 - height * 1.4}
                            width="12"
                            height={height * 1.4}
                            fill="white"
                            rx="3"
                        />
                    ))}
                </svg>
            </Box>
            
            {/* X-axis labels */}
            <Flex justify="space-around" px={14}>
                {days.map((day, index) => (
                    <Text key={index} fontSize="xs" color="rgba(255,255,255,0.6)" fontWeight="600">
                        {day}
                    </Text>
                ))}
            </Flex>
        </Box>
    );
}

function Home() {
    return (
        <VStack spacing={6} align="stretch" w="full">
            {/* Top Row - Stats */}
            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={5}>
                <VisionStatCard 
                    title="Today's Money"
                    value="$53,000"
                    change="+55%"
                    bgGradient="linear-gradient(127deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)"
                    icon={<CreditIcon size="18px" color="#01B574" />}
                />
                <VisionStatCard 
                    title="Today's Users"
                    value="2,300"
                    change="+3%"
                    bgGradient="linear-gradient(127deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)"
                    icon={<GlobeIcon size="18px" color="#4FD1C7" />}
                />
                <VisionStatCard 
                    title="New Clients"
                    value="+3,462"
                    change="-2%"
                    bgGradient="linear-gradient(127deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)"
                    icon={<DocumentIcon size="18px" color="#4FD1C7" />}
                />
                <VisionStatCard 
                    title="Sales"
                    value="$103,430"
                    change="+5%"
                    bgGradient="linear-gradient(127deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)"
                    icon={<ShoppingIcon size="18px" color="#4FD1C7" />}
                />
            </Grid>

            {/* Middle Row - Charts */}
            <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} gap={5}>
                {/* Website Views */}
                <Box 
                    bg="linear-gradient(127deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)"
                    p={6}
                    rounded="15px"
                >
                    <VStack align="start" spacing={4}>
                        <Box>
                            <Heading size="md" color="white" mb={2}>Website Views</Heading>
                            <HStack>
                                <Text color="white" fontSize="lg" fontWeight="bold">(+5) more</Text>
                                <Text color="rgba(255,255,255,0.7)" fontSize="sm">in 2021</Text>
                            </HStack>
                        </Box>
                        <LineAreaChart />
                    </VStack>
                </Box>

                {/* Daily Traffic */}
                <Box 
                    bg="linear-gradient(127deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)"
                    p={6}
                    rounded="15px"
                >
                    <VStack align="start" spacing={4}>
                        <Box>
                            <Heading size="md" color="white" mb={2}>Daily Traffic</Heading>
                            <HStack>
                                <Text color="white" fontSize="lg" fontWeight="bold">(+23)</Text>
                                <Text color="rgba(255,255,255,0.7)" fontSize="sm">than last week</Text>
                            </HStack>
                        </Box>
                        <Flex w="full" justify="center" align="center" mb={4}>
                            <DonutProgress percentage={75} size={150} />
                        </Flex>
                        
                        {/* Footer com 2 cards pequenas */}
                        <Grid templateColumns="repeat(2, 1fr)" gap={4} w="full">
                            <Box 
                                bg="rgba(255, 255, 255, 0.05)"
                                p={4}
                                rounded="12px"
                                border="1px solid rgba(255, 255, 255, 0.1)"
                            >
                                <VStack align="start" spacing={2}>
                                    <HStack>
                                        <Box w="3" h="3" bg="#4318FF" rounded="full" />
                                        <Text color="rgba(255,255,255,0.8)" fontSize="xs">Users</Text>
                                    </HStack>
                                    <Text color="white" fontWeight="600" fontSize="sm">32,984</Text>
                                    <Text color="#01B574" fontSize="xs" fontWeight="600">+12%</Text>
                                </VStack>
                            </Box>
                            
                            <Box 
                                bg="rgba(255, 255, 255, 0.05)"
                                p={4}
                                rounded="12px"
                                border="1px solid rgba(255, 255, 255, 0.1)"
                            >
                                <VStack align="start" spacing={2}>
                                    <HStack>
                                        <Box w="3" h="3" bg="#01B574" rounded="full" />
                                        <Text color="rgba(255,255,255,0.8)" fontSize="xs">Clicks</Text>
                                    </HStack>
                                    <Text color="white" fontWeight="600" fontSize="sm">2.42m</Text>
                                    <Text color="#01B574" fontSize="xs" fontWeight="600">+5%</Text>
                                </VStack>
                            </Box>
                        </Grid>
                    </VStack>
                </Box>
            </Grid>

            {/* Bottom Row */}
            <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} gap={5}>
                {/* Sales Overview */}
                <Box 
                    bg="linear-gradient(127deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)"
                    p={6}
                    rounded="15px"
                >
                    <VStack align="start" spacing={4}>
                        <Box>
                            <Heading size="md" color="white" mb={2}>Sales Overview</Heading>
                            <HStack>
                                <Text color="#01B574" fontSize="sm" fontWeight="600">(+5) more</Text>
                                <Text color="rgba(255,255,255,0.7)" fontSize="sm">in 2021</Text>
                            </HStack>
                        </Box>
                        <VisionBarChart />
                    </VStack>
                </Box>

                {/* Projects */}
                <Box 
                    bg="linear-gradient(127deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)"
                    p={6}
                    rounded="15px"
                >
                    <VStack align="start" spacing={4}>
                        <Box>
                            <Heading size="md" color="white" mb={2}>Projects</Heading>
                            <HStack>
                                <Box w="3" h="3" bg="#01B574" rounded="full" />
                                <Text color="white" fontSize="sm" fontWeight="600">30 done</Text>
                                <Text color="rgba(255,255,255,0.7)" fontSize="sm">this month</Text>
                            </HStack>
                        </Box>
                        <VStack spacing={4} w="full">
                            {[
                                { name: "Chakra Soft UI Version", budget: "$14,000", status: "Working", progress: 60 },
                                { name: "Add Progress Track", budget: "$3,000", status: "Done", progress: 100 },
                                { name: "Fix Platform Errors", budget: "Not set", status: "Cancelled", progress: 30 },
                                { name: "Launch our Mobile App", budget: "$32,000", status: "Done", progress: 100 },
                                { name: "Add the New Pricing Page", budget: "$400", status: "Working", progress: 25 }
                            ].map((project, index) => (
                                <Flex key={index} w="full" justify="space-between" align="center">
                                    <Box flex={2}>
                                        <Text color="white" fontSize="sm" fontWeight="600">{project.name}</Text>
                                        <Text color="rgba(255,255,255,0.6)" fontSize="xs">{project.budget}</Text>
                                    </Box>
                                    <Box flex={1} textAlign="center">
                                        <Text 
                                            color={project.status === "Done" ? "#01B574" : project.status === "Cancelled" ? "#FF3A29" : "#4318FF"}
                                            fontSize="xs"
                                            fontWeight="600"
                                        >
                                            {project.status}
                                        </Text>
                                    </Box>
                                    <Box flex={1}>
                                        <Text color="white" fontSize="xs" mb={1}>{project.progress}%</Text>
                                        <Box bg="rgba(255,255,255,0.1)" h="4px" rounded="full">
                                            <Box 
                                                bg={project.status === "Done" ? "#01B574" : project.status === "Cancelled" ? "#FF3A29" : "#4318FF"}
                                                h="100%" 
                                                w={`${project.progress}%`} 
                                                rounded="full"
                                            />
                                        </Box>
                                    </Box>
                                </Flex>
                            ))}
                        </VStack>
                    </VStack>
                </Box>
            </Grid>
        </VStack>
    );
}

function Profile() {
    return (
        <Box color="white">
            <Heading mb={4}>Profile</Heading>
            <Box bg="rgba(255, 255, 255, 0.1)" backdropFilter="blur(20px)" border="1px solid rgba(255, 255, 255, 0.2)" p={6} rounded="xl">
                <Text color="white">Profile information here...</Text>
            </Box>
        </Box>
    );
}

function Sidebar({ onLogout }) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    
    // Obter dados do usuário do localStorage
    const getUserData = () => {
        try {
            const userData = localStorage.getItem("user");
            return userData ? JSON.parse(userData) : { name: "Usuário", role: "User" };
        } catch (error) {
            return { name: "Usuário", role: "User" };
        }
    };
    
    const user = getUserData();
    const getInitials = (name) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase();
    };
    
    const menuItems = [
        { icon: <DashboardIcon size="18px" color="white" />, label: "Dashboard", path: "/dashboard", active: true },
        { icon: <CoursesIcon size="18px" color="white" />, label: "Courses", path: "courses" },
        { icon: <SchoolIcon size="18px" color="white" />, label: "School", path: "school" },
        { icon: <TutorIcon size="18px" color="white" />, label: "Tutor", path: "tutor" },
        { icon: <ProfileIcon size="18px" color="white" />, label: "Profile", path: "profile" },
    ];

    return (
        <Box
            w={isCollapsed ? "80px" : "280px"}
            h="100vh"
            bg="linear-gradient(127deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)"
            borderRight="1px solid rgba(255, 255, 255, 0.1)"
            p={isCollapsed ? 4 : 6}
            position="relative"
            transition="all 0.3s ease"
        >
            {/* Header with Profile Photo */}
            <Flex align="center" mb={8} justify={isCollapsed ? "center" : "space-between"}>
                {!isCollapsed && (
                    <HStack>
                        <Box
                            w="45px"
                            h="45px"
                            bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                            rounded="full"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Text fontSize="lg" color="white" fontWeight="bold">
                                {getInitials(user.name)}
                            </Text>
                        </Box>
                        <Box>
                            <Text color="white" fontSize="sm" fontWeight="bold">
                                {user.name}
                            </Text>
                            <HStack>
                                <Box w="2" h="2" bg="#01B574" rounded="full" />
                                <Text color="rgba(255, 255, 255, 0.6)" fontSize="xs">
                                    {user.role}
                                </Text>
                            </HStack>
                        </Box>
                    </HStack>
                )}
                
                <VuiButton
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    p={2}
                    minW="auto"
                >
                    <Text fontSize="16px">{isCollapsed ? "→" : "←"}</Text>
                </VuiButton>
            </Flex>

            {/* Logo */}
            {!isCollapsed && (
                <Box mb={8}>
                    <Heading color="white" size="lg" mb={1} fontWeight="bold">
                        AURA PLATFORM
                    </Heading>
                    <Text color="rgba(255, 255, 255, 0.6)" fontSize="xs">
                        Teaching Dashboard
                    </Text>
                </Box>
            )}

            {/* Main Menu */}
            <VStack spacing={2} align="stretch" mb={8}>
                {menuItems.map((item, index) => (
                    <Link key={index} to={item.path}>
                        <VuiButton
                            variant={item.active ? "solid" : "ghost"}
                            justifyContent="center"
                            leftIcon={!isCollapsed ? item.icon : null}
                            w="full"
                            size="sm"
                            bg={item.active ? "linear-gradient(90deg, #4318FF 0%, #9333ea 100%)" : "transparent"}
                            color={item.active ? "white" : "rgba(255, 255, 255, 0.8)"}
                            fontWeight="600"
                            fontSize="sm"
                            h="45px"
                            textAlign="center"
                            _hover={{
                                bg: item.active ? "linear-gradient(90deg, #4318FF 0%, #9333ea 100%)" : "rgba(255, 255, 255, 0.1)",
                                color: "white"
                            }}
                        >
                            {isCollapsed ? item.icon : item.label}
                        </VuiButton>
                    </Link>
                ))}
            </VStack>

            {/* Logout Button no rodapé */}
            <Box 
                position="absolute" 
                bottom={6} 
                left={isCollapsed ? 4 : 6} 
                right={isCollapsed ? 4 : 6}
            >
                <VuiButton
                    variant="outline"
                    leftIcon={!isCollapsed ? <LogoutIcon size="16px" color="rgba(255, 255, 255, 0.8)" /> : null}
                    w="full"
                    onClick={onLogout}
                    size="sm"
                    justifyContent="center"
                    textAlign="center"
                    color="rgba(255, 255, 255, 0.8)"
                    border="1px solid rgba(255, 255, 255, 0.2)"
                    _hover={{
                        bg: "rgba(255, 0, 0, 0.1)",
                        borderColor: "red.400",
                        color: "white"
                    }}
                >
                    {isCollapsed ? <LogoutIcon size="16px" color="rgba(255, 255, 255, 0.8)" /> : "Logout"}
                </VuiButton>
            </Box>
        </Box>
    );
}

export default function Dashboard() {
    const navigate = useNavigate();
    
    // Obter dados do usuário do localStorage
    const getUserData = () => {
        try {
            const userData = localStorage.getItem("user");
            return userData ? JSON.parse(userData) : { name: "Usuário", role: "User" };
        } catch (error) {
            return { name: "Usuário", role: "User" };
        }
    };
    
    const user = getUserData();
    const firstName = user.name.split(' ')[0];
    
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <Flex h="100vh" bg="#0b1426">
            {/* Sidebar */}
            <Sidebar onLogout={handleLogout} />

            {/* Main Content */}
            <Box flex={1} p={8} overflowY="auto">
                {/* Header */}
                <Flex justify="space-between" align="center" mb={8}>
                    <Box>
                        <Heading color="white" size="lg" fontWeight="bold" mb={2}>
                            Main Dashboard
                        </Heading>
                        <HStack>
                            <Box w="2" h="2" bg="#01B574" rounded="full" />
                            <Text color="rgba(255,255,255,0.7)" fontSize="sm">
                                Hello {firstName}, nice to see you again!
                            </Text>
                        </HStack>
                    </Box>
                </Flex>

                <Routes>
                    <Route index element={<Home />} />
                    <Route path="profile" element={<Profile />} />
                </Routes>
            </Box>
        </Flex>
    );
}