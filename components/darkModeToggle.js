"use client";

import { useState, useEffect } from "react";

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            setDarkMode(true);
        }
    }, []);


    const toggleDarkMode = () => {
        if (darkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        setDarkMode(!darkMode);
    };

    return (
        <div>
            <button onClick={toggleDarkMode} className=' absolute right-4 top-1/2 -translate-y-1/2'>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>
    )
}

export default DarkModeToggle;