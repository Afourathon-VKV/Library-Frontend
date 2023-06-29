import { Routes, Route } from "react-router-dom"
import AdminLibrarian from "./Components/AdminLibrarian";
import { AdLibDetails } from "./Components/AdminLibrarian/AdLibDetails";
import Home from './Components/Home';
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import StudentPage from "./Components/StudentPage";
import StudentDetailsPage from "./Components/StudentDetailsPage";
import { AddStudent } from "./Components/StudentsPage/AddStudent";
import BookDetailsPage from "./Components/BookDetailsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/adminlibrarian" element={<AdminLibrarian/>} />
        <Route path="/addlibrarian" element={<AdLibDetails/>} />
        <Route path="/students" element={<StudentPage/>}/>
        <Route path="/studentdetails/:id" element={<StudentDetailsPage/>}/>
        <Route path="/addstudent" element={<AddStudent/>}/>
        <Route path="/bookdetails/:id" element={<BookDetailsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
