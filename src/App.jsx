import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingReport from './components/FloatingReport'
import Home from './pages/Home'
import Mistakes from './pages/Mistakes'
import Overview from './pages/Overview'
import AboutTSP from './pages/AboutTSP'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mistakes" element={<Mistakes />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/tsp" element={<AboutTSP />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <FloatingReport />
      <Footer />
    </BrowserRouter>
  )
}

export default App
