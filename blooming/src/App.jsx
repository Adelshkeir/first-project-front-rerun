import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage'
import AdminPage from './pages/admin/AdminPage.jsx'
import Category from './pages/admin/CategoryPage.jsx'
// import Product from './pages/admin/ProductPage.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<HomePage />}></Route>
        <Route path="/admin" element={<AdminPage />}></Route>
        <Route path="/category" element={<Category />}></Route>
        {/* <Route path="/product" element={<Product />}></Route> */}

      </Routes>
    </BrowserRouter>
  )
}

export default App
