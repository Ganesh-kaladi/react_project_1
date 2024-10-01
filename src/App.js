// import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import { Home } from './pages/home';
import { Archive } from './pages/archive';
import { Binnote } from './pages/bin';

function App() {
  return (
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/archive' element={<Archive />} />
        <Route path='/bin'  element={<Binnote />} />
      </Routes>
    
  );
}

export default App;
