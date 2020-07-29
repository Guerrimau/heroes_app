import React, { useMemo } from 'react'

import queryString from 'query-string'

import { HeroCard } from '../heroes/HeroCard'

import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );

    const [ formValues, handleInputChange ] = useForm( {
        searchText: ''
    } );

    const { searchText } = formValues;

    const heroesFiltered = useMemo(() => getHeroesByName( q ), [q]);
    
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`)
    }
    
    return (
        <div>
            <h1>Search</h1>
            <hr />
            
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4> 
                    <hr/>

                    <form onSubmit={ handleSearch }>
                        <input
                            type="text"
                            placeholder="Busca a tu heroe"
                            className="form-control"
                            name="searchText"
                            value={ searchText }
                            onChange={handleInputChange}
                            autoComplete="off"
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Buscar
                        </button>

                    </form>
                </div>

                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr/>

                    {
                        (q ==='') 
                            &&
                        <div className="alert alert-info">
                            Busca un Heroe
                        </div>
                        
                    }
                    {
                        (q ==='' && heroesFiltered.length === 0) 
                            &&
                        <div className="alert alert-danger">
                            No hay heroe con el nombre { q }
                        </div>
                        
                    }
                    {
                        heroesFiltered.map( hero => (
                            <HeroCard
                                key= { hero.id }
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
