import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ContentMovie from '../../components/ContentMovie/ContentMovie'
import Pagination from '../../components/Pagination/Pagination'

function Series(){
    const [page, setPage] = useState(1)
    const [movies, setMovies] = useState([])
   
    
    useEffect(() => {
        const fetchHome = async () => {
            const fetchData = await axios.get(`
            https://api.themoviedb.org/3/discover/tv?api_key=41644fe1a73197eae351ccc0e705d6f0&language=en-US&sort_by=popularity.desc&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`)
            setMovies(fetchData.data.results);
        }
        fetchHome()
    }, [page])
    return (
        <div>
            <div className='title'
                style={{
                    fontSize: '30px',
                    textAlign: 'center',
                    color: '#1ccfc9',
                    fontWeight: 'bold'
                }}
            >
                Series
            </div>
            <div className='movie-container'
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around'
                }}
            >
                {movies.map((movie) => (
                    <ContentMovie key={movie.id} movie={movie} />
                ))}
            </div>
           <Pagination setPage={setPage}/>
        </div>
    )
}

export default Series