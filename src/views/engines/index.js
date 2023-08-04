import React, { useEffect } from 'react'

export default function Engines() {

    useEffect(() => {
        const baseURL =  window.location.origin.replace(':8080', ':3010');
        
    }, [])


    return (
        <div>Engines</div>
    )
}
