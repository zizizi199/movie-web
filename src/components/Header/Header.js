import { Link } from 'react-router-dom'

import './Header.css'

function Header() {
  
    return (
        <div className='container'>
            <span className='logo'>
                Phim Mới
            </span>
            <Link to='/' className='menu'>Home</Link>
            <Link to='/movies' className='menu'>Movies</Link>
            <Link to='/series' className='menu'>Series</Link>
            <Link to='/search' className='menu'>Search</Link>
        </div>

    )
}

export default Header