import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";

export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Verificar autenticação no carregamento inicial
        const token = localStorage.getItem("token");
        setIsAuthenticated(!!token);

        // Escutar mudanças no localStorage
        const handleStorageChange = () => {
            const token = localStorage.getItem("token");
            setIsAuthenticated(!!token);
        };

        window.addEventListener("storage", handleStorageChange);
        
        // Verificar periodicamente (para mudanças no mesmo tab)
        const interval = setInterval(() => {
            const token = localStorage.getItem("token");
            setIsAuthenticated(!!token);
        }, 1000);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
            clearInterval(interval);
        };
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />} />
                <Route
                    path="/dashboard/*"
                    element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
                />
            </Routes>
        </Router>
    );
}
