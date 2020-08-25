import React, { useState, useEffect } from 'react';

// Get dimensions of window
const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height} = window;
    return {
        width: width,
        height: height
    }
}

/**
 * Update dimensions value if handler event resize
 * This allows our dimensions below to always het lates handler
 */
export const  useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    })

    return windowDimensions;
}

export default useWindowDimensions;