import React from 'react';

export const useDebounce = function <T>(value: T, delay: number) {
    const [debouncedValue, setDebouncedValue] = React.useState<T>(value)

    React.useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => clearTimeout(handler)
    }, [value])

    return debouncedValue
}
