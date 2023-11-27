import LandingPage from './pages/LandingPage'
import TodoPage from './pages/TodoPage'

import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/todo" element={<TodoPage/>}/>
        </Routes>
      </Router>

    </>
  )
}

export default App
