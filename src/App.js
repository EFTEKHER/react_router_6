
import './App.css';
import About from './pages/About';
import BookRoutes from './pages/BookRoutes';

import Contact from './pages/Contact';
import Home from './pages/Home';
import NewBook from './pages/NewBook';
import NotFound from './pages/NotFound';

import { BrowserRouter, Routes, Route, Link, useRoutes,NavLink,useLocation } from "react-router-dom";
function App() {
const location=useLocation();
console.log(location);
let element=useRoutes([
{
  path:"/",
  
  element:<Home/>
},
{
  path:"/books/*",
  element:<BookRoutes/>
},
{
  path:"*",
  
  element:<NotFound/>
}

])

  return (
    <>
  
    <nav>
    <ul>
    <li><NavLink to="/" style={({isActive})=>{
      return isActive?{color:'red'}:{}
    }}  state="HI">{({isActive})=>{

      return isActive?"Active Home":"Home"
    }}</NavLink></li>
    <li><NavLink to="/books">Books</NavLink></li>
    </ul>
    </nav>
    {
      location.state
    }
{element}
   {
  //   <Routes>
    
  //   <Route path="/" element={<Home/>}/>


  //   <Route path="/books/*" element={<BookRoutes/>}/>
  //  {
  //   // <Route path="/books" element={<BookList/>}/>
  //   // <Route path='books/:id' element={<Book/>}/>

  //   // <Route path='books/new' element={<NewBook/>}/>
  //  }

  //   <Route path="*" element={<NotFound/>}/>
  //   </Routes>
   }
    </>
  );
}

export default App;
