import { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

// Icons
const DashboardIcon = ({ size = "20px", color = "white" }) => (
    <div style={{ width: size, height: size, color: color }}>
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
            <path 
                d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z" 
                fill="currentColor"
            />
        </svg>
    </div>
);

const CoursesIcon = ({ size = "20px", color = "white" }) => (
    <div style={{ width: size, height: size, color: color }}>
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
    </div>
);

const SchoolIcon = ({ size = "20px", color = "white" }) => (
    <div style={{ width: size, height: size, color: color }}>
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
            <path 
                d="M12 3L1 9L12 15L21 10.09V17H23V9L12 3ZM5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" 
                fill="currentColor"
            />
        </svg>
    </div>
);

const TutorIcon = ({ size = "20px", color = "white" }) => (
    <div style={{ width: size, height: size, color: color }}>
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
            <path 
                d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" 
                fill="currentColor"
            />
        </svg>
    </div>
);

const ProfileIcon = ({ size = "20px", color = "white" }) => (
    <div style={{ width: size, height: size, color: color }}>
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
            <path 
                d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.01C14.8 6.7 14.6 6.4 14.3 6.1L15.4 3H13.8L13 5.3C12.7 5.1 12.4 5 12 5S11.3 5.1 11 5.3L10.2 3H8.6L9.7 6.1C9.4 6.4 9.2 6.7 9 7.01L3 7V9H9C9 10.1 9.9 11 11 11V22H13V11C14.1 11 15 10.1 15 9H21Z" 
                fill="currentColor"
            />
        </svg>
    </div>
);

const LogoutIcon = ({ size = "20px", color = "white" }) => (
    <div style={{ width: size, height: size, color: color }}>
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
            <path 
                d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.58L17 17L22 12L17 7ZM4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z" 
                fill="currentColor"
            />
        </svg>
    </div>
);

export default function Sidebar({ onLogout, currentPath = "/dashboard" }) {
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
        { icon: <DashboardIcon size="18px" color="white" />, label: "Dashboard", path: "/dashboard" },
        { icon: <CoursesIcon size="18px" color="white" />, label: "Courses", path: "/courses" },
        { icon: <SchoolIcon size="18px" color="white" />, label: "School", path: "/school" },
        { icon: <TutorIcon size="18px" color="white" />, label: "Tutor", path: "/tutor" },
        { icon: <ProfileIcon size="18px" color="white" />, label: "Profile", path: "/profile" },
    ];

    // Verificar se o item do menu está ativo baseado no currentPath
    const isActiveItem = (itemPath) => {
        if (itemPath === "/dashboard") {
            return currentPath === "/dashboard" || currentPath === "/" || currentPath.startsWith("/dashboard");
        }
        return currentPath.startsWith(itemPath);
    };

    return (
        <div className={`sidebar-container ${isCollapsed ? 'sidebar-collapsed' : 'sidebar-expanded'}`}>
            {/* Header with Profile Photo */}
            <div className={`sidebar-header ${isCollapsed ? 'sidebar-header-collapsed' : 'sidebar-header-expanded'}`}>
                {!isCollapsed && (
                    <div className="sidebar-profile">
                        <div className="sidebar-avatar">
                            <span className="sidebar-avatar-text">
                                {getInitials(user.name)}
                            </span>
                        </div>
                        <div className="sidebar-profile-info">
                            <div className="sidebar-profile-name">
                                {user.name}
                            </div>
                            <div className="sidebar-profile-role">
                                <div className="sidebar-role-dot" />
                                <span className="sidebar-role-text">
                                    {user.role}
                                </span>
                            </div>
                        </div>
                    </div>
                )}
                
                <button
                    className="sidebar-collapse-button"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                >
                    {isCollapsed ? "→" : "←"}
                </button>
            </div>

            {/* Logo */}
            {!isCollapsed && (
                <div className="sidebar-logo">
                    <h2 className="sidebar-logo-title">
                        AURA PLATFORM
                    </h2>
                    <p className="sidebar-logo-subtitle">
                        Teaching Dashboard
                    </p>
                </div>
            )}

            {/* Main Menu */}
            <div className="sidebar-menu">
                {menuItems.map((item, index) => (
                    <Link key={index} to={item.path}>
                        <div className={`sidebar-menu-item ${isActiveItem(item.path) ? 'sidebar-menu-item-active' : 'sidebar-menu-item-inactive'}`}>
                            {isCollapsed ? item.icon : (
                                <>
                                    <span>{item.label}</span>
                                </>
                            )}
                        </div>
                    </Link>
                ))}
            </div>

            {/* Logout Button no rodapé */}
            <div className={`sidebar-logout ${isCollapsed ? 'sidebar-logout-collapsed' : ''}`}>
                <button
                    className="sidebar-logout-button"
                    onClick={onLogout}
                >
                    {isCollapsed ? (
                        <LogoutIcon size="16px" color="rgba(255, 255, 255, 0.8)" />
                    ) : (
                        <>
                            <LogoutIcon size="16px" color="rgba(255, 255, 255, 0.8)" />
                            <span style={{ marginLeft: '8px' }}>Logout</span>
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}