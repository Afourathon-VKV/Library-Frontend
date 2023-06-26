import { Routes, Route } from "react-router-dom"
import AdminLibrarian from "./Components/AdminLibrarian";
import { AdLibDetails } from "./Components/AdminLibrarian/AdLibDetails";
import Home from './Components/Home';
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/adminlibrarian" element={<AdminLibrarian/>} />
        <Route path="/addlibrarian" element={<AdLibDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
