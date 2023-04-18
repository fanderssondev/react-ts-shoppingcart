import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Store from './pages/Store';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <>
      <Navbar />
      <Container className='mb-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Container>
    </>
  );
}
