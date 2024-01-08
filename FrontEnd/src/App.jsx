import SignUp from './components/SignUp'
import Login from './components/Login'
import Home from './components/Home'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
