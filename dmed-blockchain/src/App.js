import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomeManagement from "./components/HomeManagement";
import Farmer from "./components/Farmer";
import FoodProdure from "./components/FoodProdure";
import Retaler from "./components/Retaler";
import List from "./components/List";
import BuyNow from "./components/BuyNow";

function App() {
  return (

  <>
      {/* <Login />
      <IpfsUpload /> */}
        <BrowserRouter>
         <Navbar/>
         <Routes>
          <Route exact path="/" element={<HomeManagement/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/farmer" element={<Farmer/>} />
          <Route path="/food-producer" element={<FoodProdure/>} />
          <Route path="/distributor" element={<FoodProdure/>} />
          <Route path="/retaler" element={<Retaler/>} />
          <Route path="/list" element={<List/>} />
          <Route path="/buy-now" element={<BuyNow/>} />

          </Routes>
         </BrowserRouter>
      </>
  );
}
export default App;
