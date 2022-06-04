import React from 'react'
import './ContentMovie.css'
const IMG_API = 'https://image.tmdb.org/t/p/w500/';


function ContentMovie({ title, name, media_type, poster_path, vote_average, first_air_date, release_date }) {
    return (
        <div className='movie'>
            <img src={poster_path?IMG_API + poster_path : 'https://www.movienewz.com/img/films/poster-holder.jpg' } alt={name} />
            <div className='text-container'>
                <h3>{name || title}</h3>
                <span className='description'>{media_type}
                    <span>{vote_average}</span>
                </span>
                <div className='date'>{first_air_date || release_date}</div>
            </div>
        </div>
    )
}

export default ContentMovie