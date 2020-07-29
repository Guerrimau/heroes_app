import React from 'react'
import { HeroeList } from '../heroes/HeroeList'

export const MarvelScreen = () => {
    
    return (
        <div>
            <h1 className="animate__animated animate__bounce">Marvel</h1>
            <HeroeList publisher = 'Marvel Comics'/>
        </div>
    )
}
