import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroeList = ({ publisher }) => {

    //El memo es utilizado para guardar los resultados
    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ])

    return (
        <div className="card-columns animate_animated animate__fadeIn">
            {
                heroes.map( hero =>(
                    <HeroCard 
                        key={ hero.id }
                        {...hero}
                    />
                ))
            }
        </div>
    )
}
