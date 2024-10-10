import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Header from './components/Header';
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
