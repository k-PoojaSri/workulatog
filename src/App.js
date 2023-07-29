import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Loginpage } from './components/login page/loginpage.js';
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import { Updateusedt } from './components/updateusrdt/updteusrdt';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={[<Updateusedt/>]}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
