import { useState, useEffect } from 'react';

function useDebounce(value: string, delay: number | undefined) {
    const [debouncedValue, setDebouncedValue] = useState<string>(value);

    useEffect(() => {
        // Set a timer to update the debounced value after the delay
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Cleanup the timer if the value changes or the component unmounts
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}

export default useDebounce;

