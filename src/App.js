import { Fragment } from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar';
import Home from './Routes/Home';
import Menu from './Routes/Menu';
import Services from './Routes/Services';
import Contacts from './Routes/Contacts'
import MealsDetails from './Routes/MealsDetails';
import AllMeals from './Routes/AllMeal';
import Footer from './Routes/Footer'


function App() {
  return (
    <Fragment>
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path='/Menu' element={<Menu/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Contacts' element={<Contacts/>}/>
        <Route path='/AllMeals' element={<AllMeals/>}/>
        <Route path='/meals/:mealId' element={<MealsDetails/>}/>
      </Route>
    </Routes>
    <Footer/>
    </Fragment>
    
  );
}

export default App;
