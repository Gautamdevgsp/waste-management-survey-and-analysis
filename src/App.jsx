import { useState } from 'react'
import './App.css'
import Home from './Home';
 import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Hostel from './Hostel';
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/hostel' element={<Hostel/>}></Route>
    </Routes>
    </BrowserRouter>
       
    </>
  )
}

export default App
