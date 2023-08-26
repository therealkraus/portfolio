import { useState, useEffect } from "react";

function getStorageValue(key: string, defaultValue: boolean) {
    const savedValue = localStorage.getItem(key);
    if (savedValue !== null) {
        const initial = JSON.parse(savedValue);
        return initial;
    } else {
        return defaultValue;
    }
}

function useLocalStorage(key: string, defaultValue: boolean) {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

export default useLocalStorage;