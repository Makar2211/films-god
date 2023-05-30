import { Home } from './pages/Home';
import Container from '@mui/material/Container';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { PopularFilms } from './components/PopularFilms';
import { BookmarksFilms } from './components/BookmarksFilms';
function App() {
  return (
    <>
      <Container>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/popular' element={<PopularFilms />} />
          <Route path='/bookmarks' element={<BookmarksFilms />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
