import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Home/Navbar";
import Footer from "./Pages/Shared/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from "./Pages/Auth/Signup.js";
import Purchase from "./Pages/Home/Purchase";
import RequireAuth from "./Pages/Auth/RequireAuth";
import Dashboard from "./Pages/Dasboard/Dashboard";
import MyOrders from "./Pages/Dasboard/MyOrders";
import AddReview from "./Pages/Dasboard/AddReview";
import MyProfile from "./Pages/Dasboard/MyProfile";
import AllUsers from "./Pages/Dasboard/AllUsers";
import RequireAdmin from "./Pages/Auth/RequireAdmin";


function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/purchase/:id" element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }></Route>
          <Route path='/dashboard' element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }>
            <Route path="my-orders" element={<MyOrders></MyOrders>}></Route>
            <Route path="addReview" element={<AddReview></AddReview>}></Route>
            <Route path="my-profile" element={<MyProfile></MyProfile>}></Route>
            <Route path="all-users" element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
          </Route>
        </Routes>
        <Footer></Footer>
        <ToastContainer />
      </Navbar>
    </div>

  );
}

export default App;
