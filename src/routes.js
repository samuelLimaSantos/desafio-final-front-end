
import { BrowserRouter,Routes, Route}from 'react-router-dom'
import Home from './Pages/Home'
import RestaurantForm from './Pages/RestaurantForm'

function Router ()  {
  return(
  <BrowserRouter>
    <Routes>
      <Route exact path="/"  element={<Home/>}/>
      <Route path="/register" element={<RestaurantForm/>}/>
    </Routes>
  </BrowserRouter>
)}

export default Router