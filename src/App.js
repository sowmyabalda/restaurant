import Home from './Home'
import Orders from './Orders'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PagenotFound from './Pagenotfound';

function App() {
  return (
    <>
    <div className="App">
     <center>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Orders' element={<Orders />}></Route>
        <Route path='*' element={<PagenotFound />}></Route>
      </Routes>
      </BrowserRouter>
     </center>
     </div>
    </>
  );
}

export default App;
