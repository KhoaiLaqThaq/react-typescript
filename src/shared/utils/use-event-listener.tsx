import React, { useRef, useEffect } from 'react';

const useEventListener = (eventName, handler, element = window) => {
    // Create a ref that stores handler
    const saveHandler = useRef<any>();

    // Update ref.current value if handler changes.
    // This allows our effect below to always get lates handler...
    // ... Without us needing to pass it in effect deps arrays...
    // ... and potentially cause to re-run every render
    useEffect(() => {
        saveHandler.current = handler;
    }, [handler]);

    useEffect(() => {
        // Make sure element supports addEventListener
        const isSupported = element && element.addEventListener;
        if (!isSupported) return;

        // Create event listener that calls handler function stored in ref
        const eventListener = event => {
            if (saveHandler && !!saveHandler.current) {
                saveHandler.current(event);
            }
        };

        // Add event listener
        element.addEventListener(eventName, eventListener);

        // Remove event listener on cleanup
        return () => {
            element.removeEventListener(eventName, eventListener);
        }
    }, [eventName, element]);   // Re-run if eventName or element changes
};

export default useEventListener;