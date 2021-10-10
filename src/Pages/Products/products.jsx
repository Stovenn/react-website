import React from 'react'
import { useHistory, useLocation } from "react-router-dom";

export const Products = () => {
    let history = useHistory()

    return (
        <div>
            Product page <button onClick={()=>{ 
                console.log('history', history)
                history.push('/about-us')
                }}>go to about page</button>
        </div>
    )
}

