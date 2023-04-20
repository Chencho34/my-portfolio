import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}
