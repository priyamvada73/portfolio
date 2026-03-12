import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CaseStudyRaqam from './pages/CaseStudyRaqam'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study/raqam" element={<CaseStudyRaqam />} />
      </Routes>
    </HashRouter>
  )
}
