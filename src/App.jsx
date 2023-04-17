import './App.css'
import Home from './components/Home'
import Nav from './components/Nav'
import Contact from './components/Contact'
import About from './components/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
    // <body>
    //   <header>
    //     <Nav />
    //   </header>
    //   <main>
    //     <Home />
    //   </main>
    // </body>
  )
}
