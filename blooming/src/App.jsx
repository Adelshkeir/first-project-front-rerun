import HomePage from './pages/homepage/homepage.jsx'
import Categoriespage from './pages/categories/categoriespage.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Singleproductpage from './pages/singleproductpage/singleproductpage.jsx'
import Aboutus from './pages/about-us/about-us.jsx'
import Productspage from './pages/productspage/productspage.jsx'
import './main.css'


function App() {


  return (
<BrowserRouter>
<Routes>

<Route path="/" element={<HomePage />}></Route>
<Route path='/Categories' element={<Categoriespage />}></Route>
<Route path="/Singleproductpage" element={<Singleproductpage />}></Route>
<Route path='/about' element={<Aboutus/>}></Route>
<Route path='/products' element={<Productspage />}></Route>
</Routes>
</BrowserRouter>
  )
}

export default App
