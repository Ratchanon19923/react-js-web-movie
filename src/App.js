import logo from './logo.svg';
import './App.css';
import {Route, Router, Routes} from 'react-router-dom'
import Header from './Component/Header';
import Home from './Component/Home';
import Search from './Component/Search';
import Footer from './Component/Footer';

function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        {/* <Route path='/Header' element={<Header/>}></Route> */}
        <Route path='/Search/:text' element={<Search/>}></Route>
      </Routes>
      <Footer/>
    </div>
    
  );
}


export default App;
