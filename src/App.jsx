import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";

export default function App() {
    const isAuthenticated = localStorage.getItem("token");

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/dashboard/*"
                    element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
                />
            </Routes>
        </Router>
    );
}
