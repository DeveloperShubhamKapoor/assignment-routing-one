
import './App.css';
import {Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import AllProducts from './components/AllProducts';
import Products from './components/Products';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Home/>}></Route>
        <Route path='/products' element ={<AllProducts/>}></Route>
        <Route path='/products/:id' element ={<Products/>}></Route>
        <Route path='/error404' element={<Error/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
