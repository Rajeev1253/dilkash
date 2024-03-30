import {Routes, Route} from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AddBook from "./pages/AddBook";
import Dashboard from "./pages/Dashboard";



function App() {
  return (
    
    <>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>
      <Route path='/Addbook' element={<AddBook/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>

    </Routes>
    </>

  );
}
export default App;
