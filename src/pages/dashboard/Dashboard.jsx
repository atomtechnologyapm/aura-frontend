import { 
    Box, 
    Flex, 
    Text, 
    Heading, 
    Grid,
    VStack,
    HStack
} from "@chakra-ui/react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { CreditIcon, GlobeIcon, DocumentIcon, ShoppingIcon } from "../../components/Icons";
import Sidebar from "../../components/Sidebar";
import "./style.css";


function VisionStatCard({ title, value, change, bgGradient, icon }) {
    return (
        <Box 
            bg={bgGradient}
            p={6}
            rounded="20px"
            position="relative"
            overflow="hidden"
            minH="120px"
        >
            <Flex justify="space-between" align="flex-start" mb={4}>
                <Box>
                    <Text fontSize="xs" color="rgba(255,255,255,0.7)" mb={2} textTransform="uppercase" fontWeight="600">
                        {title}
                    </Text>
                    <Text fontSize="2rem" fontWeight="bold" color="white">
                        {value}
                    </Text>
                </Box>
                <Box 
                    bg="rgba(148,0,211, 0.99)"
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
                    bgGradient="linear-gradient(140deg,rgba(6, 11, 40, 0.49) 35%, rgba(75,0,130, 0.45) 100%)"
                    icon={<CreditIcon size="18px" color="#FFFFFF" />}
                />
                <VisionStatCard 
                    title="Today's Users"
                    value="2,300"
                    change="+3%"
                    bgGradient="linear-gradient(140deg,rgba(6, 11, 40, 0.49) 35%, rgba(75,0,130, 0.45) 100%)"
                    icon={<GlobeIcon size="18px" color="#FFFFFF" />}
                />
                <VisionStatCard 
                    title="New Clients"
                    value="+3,462"
                    change="-2%"
                    bgGradient="linear-gradient(140deg,rgba(6, 11, 40, 0.49) 35%, rgba(75,0,130, 0.45) 100%)"
                    icon={<DocumentIcon size="18px" color="#FFFFFF" />}
                />
                <VisionStatCard 
                    title="Sales"
                    value="$103,430"
                    change="+5%"
                    bgGradient="linear-gradient(140deg,rgba(6, 11, 40, 0.49) 35%, rgba(75,0,130, 0.45) 100%)"
                    // bgGradient="linear-gradient(127deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)"
                    icon={<ShoppingIcon size="18px" color="#FFFFFF" />}
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
        <div className="dashboard-container">
            {/* Sidebar */}
            <Sidebar onLogout={handleLogout} />

            {/* Main Content */}
            <div className="dashboard-main-content">
                {/* Header */}
                <div className="dashboard-header">
                    <div>
                        <h1 className="dashboard-header-title">
                            Main Dashboard
                        </h1>
                        <div className="dashboard-header-subtitle">
                            <div className="dashboard-status-dot" />
                            <span className="dashboard-subtitle-text">
                                Hello {firstName}, nice to see you again!
                            </span>
                        </div>
                    </div>
                </div>

                <Routes>
                    <Route index element={<Home />} />
                    <Route path="profile" element={<Profile />} />
                </Routes>
            </div>
        </div>
    );
}