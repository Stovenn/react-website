import React from 'react'
import { useLocation } from "react-router-dom";

export const PageNotFound = () => {
    let location = useLocation()

    return (
        <div>
            The page {location.pathname} doesn't exist 
        </div>
    )
}
