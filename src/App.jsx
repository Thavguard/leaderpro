
import Home from './pages/Home/Home';
import './style.scss'
import { Routes, Route } from 'react-router-dom'
import PersonSearch from './pages/PersonSearch/PersonSearch';

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/person' element={<PersonSearch />} />
      </Routes>
    </div>
  );
}

export default App;
