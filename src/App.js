import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Experience from './pages/experience';
import Blog from './pages/blog';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/blog' element={<Blog />} />
        </Routes>
    </Router>
);
}

export default App;
