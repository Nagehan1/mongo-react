import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/Register";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return <div>
    <RouterProvider router={router} />
  </div>;
}

export default App;
