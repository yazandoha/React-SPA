
import { Route, Routes } from 'react-router-dom'
import About from './component/About/About'
import Content from './component/Content/Content'
import Footer from './component/Footer/Footer'
import Home from './component/Home/Home'
import Navbar from './component/Navbar/Navbar'
import Product from './component/Content/Product'

function App() {
  return (
    <>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/content' element={<Content/>}></Route>
          <Route path='/content/:prodId' element={<Product/>}></Route>
        </Routes>
        <Footer/>
    </>
  )
}

export default App
