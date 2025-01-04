import Navbar from "./Component/Navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages1/Home";
import Mens from "./Pages1/Mens";
import Womens from "./Pages1/Womens";
import Kids from "./Pages1/Kids";
import Login from "./Pages1/Login";
import Cart from "./Pages1/Cart";
import Footer from "./Component/Footer";
import SingleProduct from "./Component/SingleProduct";


const router=createBrowserRouter([
  {
    path:"/",
    element:<><Navbar/><Home/><Footer/></>
  },
  {
    path:"/mens",
    element:<><Navbar/><Mens/><Footer/></>
  },
  {
    path:"/womans",
    element:<><Navbar/><Womens/><Footer/></>
  },
  {
    path:"/kids",
    element:<><Navbar/><Kids/><Footer/></>
  },
  {
    path:"/login",
    element:<><Navbar/><Login/><Footer/></>
  },
  {
    path:"/cart",
    element:<><Navbar/><Cart/><Footer/></>
  },
  {
    path:"/products/:productId",
    element:<><Navbar/><SingleProduct/><Footer/></>
  }
])

function App() {
  return (
    <div className="App">
      
     <RouterProvider router={router}/>

    </div>
  );
}

export default App;
