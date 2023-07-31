import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Loginpage } from './components/login page/loginpage.js';
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import { Updateusedt } from './components/updateusrdt/updteusrdt';
import { Admin } from './components/menu/admin';
import {Client} from './components/menu/client';
import { Registationfrom } from './components/registration form/registrationfrom';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/profileupdate' element={[<Updateusedt/>]}/>
      <Route path='/' element={[<Loginpage/>]}/>
      <Route path='/admin' element={[<Admin/>]}/>
      <Route path='/client' element={[<Client/>]}/>
      <Route path='/registration form/Registationfrom' element={[<Registationfrom/>]}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
