import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import CreateProduct from './pages/CreateProduct';
import HomePage from './pages/HomePage';
import EditProduct from './pages/EditProduct';
import Favorites from './pages/Favourites';
import {HomePageProvider} from './helper/HomePageProvider';
import {CreatePageProvider} from './helper/CreatePageProvider';
import ProfileButton from './Components/ProfileButton/ProfileButton';






function App() {
 
  return (
    <Router>
      <nav>
      <Link to='/'>Home</Link>
        <Link to='/create'>New Product</Link>   
        <Link to='/edit'>Edit</Link> 
         <div className='ProfileButton'>
          <ProfileButton />
         </div>
         <Link to='/favrt'>favrt</Link>
      
         
      </nav>
      
      <Routes>
      
        <Route path='/' element={<HomePageProvider><HomePage /></HomePageProvider>} />
        <Route path='/create' element={<CreatePageProvider><CreateProduct /></CreatePageProvider>} />
        <Route path='/edit' element={<EditProduct />} />
        <Route path='/favrt' element={<Favorites />} />
        
      </Routes>
    </Router>
  )
}

export default App;
