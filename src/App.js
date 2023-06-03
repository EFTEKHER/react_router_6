
import './App.css';
import About from './pages/About';
import BookRoutes from './pages/BookRoutes';

import Contact from './pages/Contact';
import Home from './pages/Home';
import NewBook from './pages/NewBook';
import NotFound from './pages/NotFound';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
  
    <nav>
    <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/books">Books</Link></li>
    </ul>
    </nav>

    <Routes>
    
    <Route path="/" element={<Home/>}/>


    <Route path="/books/*" element={<BookRoutes/>}/>
   {
    // <Route path="/books" element={<BookList/>}/>
    // <Route path='books/:id' element={<Book/>}/>

    // <Route path='books/new' element={<NewBook/>}/>
   }

    <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
  );
}

export default App;
