import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Index from './pages/Index'
import Signup from './pages/Signup'
import Studentloginn from './pages/Studentloginn'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Studentloginn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
