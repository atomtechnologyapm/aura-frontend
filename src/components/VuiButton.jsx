import { Button } from "@chakra-ui/react";

export default function VuiButton({ 
    variant = "solid", 
    size = "md", 
    colorScheme = "purple",
    children, 
    ...props 
}) {
    const getVariantStyles = () => {
        switch (variant) {
            case "outline":
                return {
                    bg: "transparent",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    color: "white",
                    _hover: {
                        bg: "rgba(67, 24, 255, 0.1)",
                        borderColor: "rgba(67, 24, 255, 0.4)",
                    },
                    _active: {
                        bg: "rgba(67, 24, 255, 0.2)",
                    }
                };
            case "ghost":
                return {
                    bg: "transparent",
                    color: "rgba(255, 255, 255, 0.8)",
                    _hover: {
                        bg: "rgba(67, 24, 255, 0.2)",
                        color: "white",
                    },
                    _active: {
                        bg: "rgba(67, 24, 255, 0.3)",
                    }
                };
            default:
                return {
                    bg: "linear-gradient(90deg, #4318FF 0%, #9333ea 100%)",
                    color: "white",
                    border: "none",
                    _hover: {
                        transform: "translateY(-1px)",
                        boxShadow: "0 4px 15px rgba(67, 24, 255, 0.3)",
                    },
                    _active: {
                        transform: "translateY(0)",
                    }
                };
        }
    };

    const getSizeStyles = () => {
        switch (size) {
            case "sm":
                return {
                    h: "32px",
                    px: 4,
                    fontSize: "sm",
                };
            case "lg":
                return {
                    h: "48px",
                    px: 6,
                    fontSize: "md",
                };
            default:
                return {
                    h: "40px",
                    px: 5,
                    fontSize: "sm",
                };
        }
    };

    return (
        <Button
            {...getVariantStyles()}
            {...getSizeStyles()}
            rounded="8px"
            fontWeight="600"
            transition="all 0.2s ease"
            {...props}
        >
            {children}
        </Button>
    );
}