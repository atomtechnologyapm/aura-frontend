import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function Login() {
    const [user, setUser] = useState("admin@aura.com.br");
    const [pass, setPass] = useState("aura123");
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
        <div className="vision-login-page">
            {/* Navbar */}
            <nav className="vision-navbar">
                <div className="vision-navbar-container">
                    <span className="vision-navbar-logo">AURA
                        <span className="vision-navbar-log-phrase">Teacheung Plataform</span>
                    </span>


                    <div className="vision-navbar-menu">
                        <a href="#" className="vision-navbar-link">Dashboard</a>
                        <a href="#" className="vision-navbar-link">Profile</a>
                        <a href="#" className="vision-navbar-link">Sign Up</a>
                        <a href="#" className="vision-navbar-link">Sign In</a>
                        <button className="vision-navbar-button">
                            BUY NOW
                        </button>
                    </div>
                </div>
            </nav>

            {/* Main Content - 2 COLUNAS */}
            <div className="vision-main-container">
                {/* COLUNA ESQUERDA - IMAGEM */}
                <div className="vision-left-column">
                    {/* Efeitos decorativos */}
                    <div className="vision-blur-effect-1"></div>
                    <div className="vision-blur-effect-2"></div>
                    
                    <div className="vision-left-content">
                        <div>
                            <h3 className="vision-subtitle">
                                INSPIRED BY THE FUTURE:
                            </h3>
                            <h1 className="vision-title">
                                THE FUTURE IS HERE
                            </h1>
                        </div>
                    </div>
                </div>

                {/* COLUNA DIREITA - LOGIN */}
                <div className="vision-right-column">
                    <div className="vision-right-overlay"></div>
                    
                    <div className="vision-login-container">
                        <div className="vision-login-card">
                            {/* Header */}
                            <div className="vision-login-header">
                                <h2 className="vision-login-title">
                                    Nice to see you!
                                </h2>
                                <p className="vision-login-subtitle">
                                    Enter your email and password to sign in
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleLogin} className="vision-login-form">
                                <div className="vision-form-group">
                                    <label className="vision-form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        value={user}
                                        onChange={(e) => setUser(e.target.value)}
                                        className="vision-form-input"
                                        required
                                    />
                                </div>

                                <div className="vision-form-group">
                                    <label className="vision-form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Your password"
                                        value={pass}
                                        onChange={(e) => setPass(e.target.value)}
                                        className="vision-form-input"
                                        required
                                    />
                                </div>

                                <div className="vision-checkbox-container">
                                    <label className="vision-checkbox-label">
                                        <input 
                                            type="checkbox" 
                                            className="vision-checkbox"
                                        />
                                        <span className="vision-checkbox-text">Remember me</span>
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="vision-submit-button"
                                >
                                    Sign in
                                </button>
                            </form>

                            {/* Footer */}
                            <div className="vision-login-footer">
                                <p className="vision-footer-text">
                                    Don't have an account?{' '}
                                    <a href="#" className="vision-footer-link">
                                        Sign up
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
