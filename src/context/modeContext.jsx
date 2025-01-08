import { createContext, useState, useEffect } from "react";

export const ModeContext = createContext();

export const ModeContextProvider = ({ children }) => {
  // Ambil mode dari localStorage, default 'light'
  const [mode, setMode] = useState(
    localStorage.getItem("themeMode") || "light"
  );

  // Toggle mode
  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("themeMode", newMode); // Simpan mode ke localStorage

    // Ubah CSS Variables sesuai mode
    if (newMode === "dark") {
      document.documentElement.style.setProperty("--background-light", "#121212");
      document.documentElement.style.setProperty("--text-light", "#ffffff");
    } else {
      document.documentElement.style.setProperty("--background-light", "#ffffff");
      document.documentElement.style.setProperty("--text-light", "#000000");
    }
  };

  // Efek untuk menerapkan mode dari localStorage saat aplikasi dimuat
  useEffect(() => {
    const storedMode = localStorage.getItem("themeMode") || "light";
    setMode(storedMode);

    // Terapkan mode ke body
    document.body.className = storedMode === "light" ? "light-mode" : "dark-mode";
  }, []);

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeContext;
