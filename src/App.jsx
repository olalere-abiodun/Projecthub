import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Index from './pages/Index'
import Signup from './pages/Signup'
import Studentloginn from './pages/Studentloginn'
import Adminlogin from './pages/Adminlogin'
import Userdashboard from './pages/Userdashboard'
import Submission from './pages/Submission'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Studentloginn />} />
        <Route path="/admin" element={<Adminlogin />} />
        <Route path="/dashboard" element={<Userdashboard />} />
        <Route path="/submission" element={<Submission />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
