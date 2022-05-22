import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Home/Navbar";
import Footer from "./Pages/Shared/Footer";


function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
        <Footer></Footer>
      </Navbar>
    </div>

  );
}

export default App;
