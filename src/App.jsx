import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Characters from './pages/Characters';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/characters" element={<Characters />} />

      </Routes>
    </Router>
    </>
  )
}

export default App
