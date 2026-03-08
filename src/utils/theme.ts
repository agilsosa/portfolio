const THEME_KEY = "theme";

function getInitialTheme(): "dark" | "light" {
    const stored = localStorage.getItem(THEME_KEY) as "dark" | "light" | null;
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: "dark" | "light") {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
    localStorage.setItem(THEME_KEY, theme);
}

export function toggleTheme() {
    const current = localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light";
    applyTheme(current === "dark" ? "light" : "dark");
}

export function getCurrentTheme() {
    return localStorage.getItem(THEME_KEY)
}

applyTheme(getInitialTheme());