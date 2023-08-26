import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

function useDarkMode() {
    const [darkTheme, setDarkTheme] = useLocalStorage("dark-mode", true);
    useEffect(() => {
        const root = window.document.documentElement.classList;
        if (darkTheme === true) {
            root.add("dark");
        } else {
            root.remove("dark");
        }
    }, [darkTheme, setDarkTheme]);
    return [darkTheme, setDarkTheme];
}

export default useDarkMode;