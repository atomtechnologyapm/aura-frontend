import { Box } from "@chakra-ui/react";

export function CreditIcon({ size = "24px", color = "white" }) {
    return (
        <Box w={size} h={size} color={color}>
            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
                <path 
                    d="M2 5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V5Z" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
                <path 
                    d="M2 9H22" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
            </svg>
        </Box>
    );
}

export function GlobeIcon({ size = "24px", color = "white" }) {
    return (
        <Box w={size} h={size} color={color}>
            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
                <circle 
                    cx="12" 
                    cy="12" 
                    r="10" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
                <path 
                    d="M2 12H22" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
                <path 
                    d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
            </svg>
        </Box>
    );
}

export function DocumentIcon({ size = "24px", color = "white" }) {
    return (
        <Box w={size} h={size} color={color}>
            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
                <path 
                    d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
                <path 
                    d="M14 2V8H20" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
                <path 
                    d="M16 13H8" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
                <path 
                    d="M16 17H8" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
                <path 
                    d="M10 9H8" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
            </svg>
        </Box>
    );
}

export function ShoppingIcon({ size = "24px", color = "white" }) {
    return (
        <Box w={size} h={size} color={color}>
            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
                <path 
                    d="M6 2L3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6L18 2H6Z" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
                <path 
                    d="M3 6H21" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
                <path 
                    d="M16 10C16 11.1046 15.1046 12 14 12H10C8.89543 12 8 11.1046 8 10" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
            </svg>
        </Box>
    );
}