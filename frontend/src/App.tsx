import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/search" element={<>search page</>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
