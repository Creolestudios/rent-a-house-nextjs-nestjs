import { useEffect, useState } from 'react';
import useDebounce from './useDebounce';

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<{
        width: number;
        height: number;
    }>({
        width: 0,
        height: 0,
    });

    const debouncedValue = useDebounce(windowSize);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return debouncedValue;
};
export default useWindowSize;