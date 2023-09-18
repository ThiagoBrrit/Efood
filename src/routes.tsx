import { Route, Routes } from 'react-router-dom'
import Italiana from './pages/Italiana'
import Home from './pages/Home'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/italiana" element={<Italiana />} />
  </Routes>
)

export default Rotas
