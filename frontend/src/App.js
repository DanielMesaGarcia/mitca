import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;