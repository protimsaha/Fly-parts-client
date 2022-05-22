import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Home/Navbar";


function App() {
  return (
    <div>
      <Navbar>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>

        </Routes>
      </Navbar>
    </div>

  );
}

export default App;
