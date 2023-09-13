import { Fragment, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar';
import Home from './Routes/Home';
import Menu from './Routes/Menu';
import Services from './Routes/Services';
import Contacts from './Routes/Contacts'
import MealsDetails from './Routes/MealsDetails';
import AllMeals from './Routes/AllMeal';
import Footer from './Routes/Footer'
import { useLocation } from 'react-router-dom';
import ScrollToTopButton from './Routes/ScrollToTopButton';

function App() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0,0)
  }, [location])
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
    <ScrollToTopButton/>
    </Fragment>
    
  );
}

export default App;
