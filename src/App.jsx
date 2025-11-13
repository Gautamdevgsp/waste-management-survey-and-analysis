import { useState } from 'react'
import './App.css'
import Home from './Home';
 import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Hostel from './Hostel';
import Dept from './Dept';
import Campus from './Campus';
import Res from './Res';
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/hostel' element={<Hostel/>}></Route>
      <Route path='/dept' element={<Dept/>}></Route>
      <Route path='/campus' element={<Campus/>}></Route>
      <Route path='/res' element={<Res/>}></Route>
    </Routes>
    </BrowserRouter>
       
    </>
  )
}

export default App
