import {Routes, Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar';
import Home from './Routes/Home';
import Menu from './Routes/Menu';
import Services from './Routes/Services';
import Contacts from './Routes/Contacts'
import MealsDetails from './Routes/MealsDetails';
import AllMeals from './Routes/AllMeal';
import Cookies from './Routes/Cookies';
import { Fragment } from 'react';


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
    <Cookies/>
    </Fragment>
    
  );
}

export default App;
