import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';

import HomeScreen from './pages/HomeScreen/HomeScreen';
import Header from './components/Header/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Container className='my-2'>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
