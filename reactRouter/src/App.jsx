
import { Routes,Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

function App() {
 


  return (
    <>
    <Header/>
    
    <Routes>
      <Route path='/' element = {[<Home/>,<Footer/>]}/>
      <Route path='/about' element = {[<About/>,<Footer/>]}/>
      <Route path='/contact' element = {[<Contact/>,<Footer/>]}/>
    </Routes>
      
    </>
  )
}

export default App
