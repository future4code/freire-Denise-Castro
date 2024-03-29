import React from "react"
import axios from "axios"

import { createContext, useEffect, useState } from "react"
import { BASE_GENRE_URL } from "../constants/BASE_URL"
import { BASE_URL } from "../constants/BASE_URL"
import { API_KEY } from "../constants/BASE_URL"

export const MoviesContext = createContext([])

export default function MoviesProvider(params) {

    const [movies, setMovies] = useState([])
    const [genres, setGenres] = useState([])
    const [filters, setFilters] = useState([])
    const [filteredMovies, setFilteredMovies] = ([])
    const [page, setPage] = useState(1)


    useEffect(()=>{
        try {
            axios

                .get(`${BASE_URL}popular?${API_KEY}&language=pt-BR&page=${page}`)
                .then(response => setMovies(response.data.results))

            axios

                .get(`${BASE_GENRE_URL} list? ${API_KEY} &language=pt-BR`)
                .then(response => setGenres(response.data.genres))

        } catch (error) {
            console.log(error)
        }
    },
    [page]
    )

    useEffect(()=>{
        try {
            let filteredMovies = []

            movies.forEach (movie => {
                for (let filter of filters) {
                    if (movie.genre_ids.includes(filter)) {
                        filteredMovies = [...filteredMovies, movie]
                        break
                    }
                }
            })
            setFilteredMovies(filteredMovies)

        } catch (error) {
            console.log (error)
        }
    },
    [filters]
    )

    function handleFilterGenres(genre) {
        if (filters.includes(genre)) {
            const index = filters.indexOf(genre)

        if (index === 0) {
            setFilters([...filters.slice(index +1)])
        } else {
            setFilters([...filters.slice(0, index), ...filters.slice(index + 1)])
        }

        } else {
            setFilters([...filters, genre])
        }
    }

    return (
        <MoviesContext.Provider
          value={{
            genres,
            movies,
            filters,
            filteredMovies,
            setPage,
            handleFilterGenres
          }}
        >
          {params.children}
        </MoviesContext.Provider>
    )
        
}