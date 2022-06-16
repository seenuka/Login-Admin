
import './App.css';
import Signup from './Pages/Signup'
import {Routes,Route} from "react-router-dom"
import Alert from './Pages/Alert';
import Login from './Pages/Login';
import Home from './Pages/Home'
function App() {
  return (
    <div>
      <Alert/>
      <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>

            </Routes>
      <Routes>
        <Route path='/home' element={<Home/>}/>
      </Routes>
  
    </div>
  
    )}

export default App;
