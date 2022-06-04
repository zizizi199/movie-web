import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ContentMovie from '../../components/ContentMovie/ContentMovie'
import Pagination from '../../components/Pagination/Pagination'


function Movies(){
    const [page, setPage] = useState(1)
    const [movies, setMovies] = useState([])
   
    
    useEffect(() => {
        const fetchHome = async () => {
            const fetchData = await axios.get(`
            https://api.themoviedb.org/3/discover/movie?api_key=41644fe1a73197eae351ccc0e705d6f0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`)
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
                Movies
            </div>
            <div className='movie-container'
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around'
                }}
            >
                {movies.map((movie) => (
                    <ContentMovie key={movie.id} {...movie} />
                ))}
            </div>
           <Pagination setPage={setPage}/>
        </div>
    )
}

export default Movies