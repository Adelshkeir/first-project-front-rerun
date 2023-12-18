import HomePage from './pages/homepage/homepage.jsx'
import Categoriespage from './pages/categories/categoriespage.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'



function App() {


  return (
<BrowserRouter>
<Routes>

<Route path="/" element={<HomePage />}></Route>
<Route path='/Categories' element={<Categoriespage />}></Route>

</Routes>
</BrowserRouter>
  )
}

export default App
