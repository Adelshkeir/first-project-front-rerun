import HomePage from './pages/homepage'
import Categoriespage from './pages/categoriespage'
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
