import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header';
import Home from './Page/Home/Home'
import Movies from './Page/Movies/Movies'
import NotFound from './Page/NotFound/NotFound';
import Search from './Page/Search/Search';
import Series from './Page/Series/Series'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/movies' element={<Movies />} />
          <Route path='/series' element={<Series />} />
          <Route path='/search' element={<Search />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
