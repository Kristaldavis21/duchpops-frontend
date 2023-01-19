import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './Pages/Shop';
import Main from './Pages/Home';
//import Book from './Pages/Book';
import Contact from './Pages/Contact';
import InlineWidgit from './components/InlineWidgit';
import Blog from './Pages/Blog';

import {
  BrowserRouter as Router,
  Routes,
  Route,
/*   Navigate, */
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Cart from '../src/Pages/Cart';

function App() {
  return (
    <div>
      
      <div className='App'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/book' element={<InlineWidgit />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/blog' element={<Blog />} />
          </Routes>
        </Router>
      </div>
    </div>

  );
}

export default App;