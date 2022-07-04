import './App.css'
import { Routes, Route } from 'react-router-dom'
import Mockman from 'mockman-js'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  Home,
  Signup,
  Login,
  Archive,
  LandingPage,
  Trash,
  Label,
  Profile,
  Error404,
} from 'pages/index'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/label" element={<Label />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mock" element={<Mockman />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="text__md"
      />
    </div>
  )
}

export default App
