import React, { useEffect, useState } from 'react'
import ContentMovie from '../../components/ContentMovie/ContentMovie'
import axios from 'axios'
import Pagination from '../../components/Pagination/Pagination'


function Home() {
    const [page, setPage] = useState(1)
    const [movies, setMovies] = useState([])
   
    
    useEffect(() => {
        const fetchHome = async () => {
            const fetchData = await axios.get(`
            https://api.themoviedb.org/3/trending/all/week?api_key=41644fe1a73197eae351ccc0e705d6f0&page=${page}`)
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
                Home
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

export default Home