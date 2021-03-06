import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ContentMovie from '../../components/ContentMovie/ContentMovie'
import './Search.css'

function Search() {
    const [search, setSearch] = useState('')
    const [movies, setMovies] = useState([])

    const getMovies = async(API) => {
        const fetchData = await axios.get(API)
        setMovies(fetchData.data.results);
    }

    useEffect(() => {
        getMovies()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (search) {
            getMovies(`
            https://api.themoviedb.org/3/search/movie?api_key=41644fe1a73197eae351ccc0e705d6f0&language=en-US
            &query=` +search)
            setSearch('')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className='search'
                    type='search'
                    placeholder='Search...'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </form>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around'
            }}
            >
                {movies.map((movie) => (
                    <ContentMovie key={movie.id} movie={movie} />
                ))}
            </div>
        </div>

    )
}

export default Search