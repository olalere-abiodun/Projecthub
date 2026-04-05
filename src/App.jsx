import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Index from './pages/Index'
import Signup from './pages/Signup'
import Studentloginn from './pages/Studentloginn'
import Adminlogin from './pages/Adminlogin'
import Admindashboard from './pages/Admindashboard'
import Submission from './pages/Submission'
import Review from './pages/Review'
import Reviews from './pages/Reviews'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Studentloginn />} />
        <Route path="/admin" element={<Adminlogin />} />
        <Route path="/dashboard" element={<Admindashboard />} />
        <Route path="/submission" element={<Submission />} />
        <Route path="/review" element={<Review />} />
        <Route path="/reviews" element={<Reviews/>} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
