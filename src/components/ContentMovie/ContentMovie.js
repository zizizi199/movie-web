import React from 'react'
import './ContentMovie.css'
const IMG_API = 'https://image.tmdb.org/t/p/w500/';


function ContentMovie({ ...movie}) {
    return (
        <div className='movie'>
            <img src={movie.poster_path?IMG_API + movie.poster_path : 'https://www.movienewz.com/img/films/poster-holder.jpg' } alt={movie.name} />
            <div className='text-container'>
                <h3>{movie.name || movie.title}</h3>
                <span className='description'>{movie.media_type}
                    <span>{movie.vote_average}</span>
                </span>
                <div className='date'>{movie.first_air_date || movie.release_date}</div>
            </div>
        </div>
    )
}

export default ContentMovie