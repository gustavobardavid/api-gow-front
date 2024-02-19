import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Games from './pages/Games';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/characters" element={<Characters />} />
        <Route exact path="/games" element={<Games />} />

      </Routes>
    </Router>
    </>
  )
}

export default App
