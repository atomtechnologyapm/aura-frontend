import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

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
