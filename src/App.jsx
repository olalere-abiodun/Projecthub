import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Index from './pages/Index'
import Signup from './pages/Signup'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
