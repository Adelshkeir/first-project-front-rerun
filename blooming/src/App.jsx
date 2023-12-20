import HomePage from './pages/homepage/homepage.jsx'
import Categoriespage from './pages/categories/categoriespage.jsx'
import Productspage from './pages/productspage/productspage.jsx'
import Aboutus from './pages/about-us/about-us.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'



function App() {


  return (
<BrowserRouter>
<Routes>

<Route path="/" element={<HomePage />}></Route>
<Route path='/Categories' element={<Categoriespage />}></Route>
<Route path='/Products' element={< Productspage/>}></Route>
<Route path='/Aboutus' element={< Aboutus/>}></Route>
</Routes>
</BrowserRouter>
  )
}

export default App
