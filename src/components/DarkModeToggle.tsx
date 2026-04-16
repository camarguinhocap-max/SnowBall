"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle() {
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Padrão é light. Só ativa dark se o usuário salvou explicitamente.
        const saved = localStorage.getItem("theme");
        const isDarkMode = saved === "dark";

        setIsDark(isDarkMode);
        applyTheme(isDarkMode);
    }, []);

    const applyTheme = (dark: boolean) => {
        if (dark) {
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            document.documentElement.removeAttribute("data-theme");
        }
        localStorage.setItem("theme", dark ? "dark" : "light");
    };

    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);
        applyTheme(newIsDark);
    };

    if (!mounted) return null;

    return (
        <button
            onClick={toggleTheme}
            aria-label="Alternar tema"
            style={{
                position: "fixed",
                bottom: "2rem",
                right: "2rem",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "2px solid var(--border)",
                backgroundColor: "var(--bg-primary)",
                color: "var(--text)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 999,
                transition: "all 0.3s ease",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
                e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
                e.currentTarget.style.transform = "scale(1)";
            }}
        >
            {isDark ? <Sun size={24} /> : <Moon size={24} />}
        </button>
    );
}
