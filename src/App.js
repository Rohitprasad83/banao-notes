import './App.css'
import { Routes, Route } from 'react-router-dom'
import Mockman from 'mockman-js'
import {
  Home,
  Signup,
  Login,
  Archive,
  LandingPage,
  Trash,
  Label,
  Profile,
} from 'pages/index'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />{' '}
        <Route path="/signup" element={<Signup />} />{' '}
        <Route path="/login" element={<Login />} />{' '}
        <Route path="/home" element={<Home />} />{' '}
        <Route path="/archive" element={<Archive />} />{' '}
        <Route path="/trash" element={<Trash />} />{' '}
        <Route path="/label" element={<Label />} />{' '}
        <Route path="/profile" element={<Profile />} />{' '}
        <Route path="/mock" element={<Mockman />} />{' '}
      </Routes>{' '}
    </div>
  )
}

export default App
