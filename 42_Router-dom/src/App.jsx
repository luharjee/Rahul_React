import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import ParamComp from "./components/ParamComp";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />{" "}
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <About />
        <Navbar />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Dashboard />
        <Navbar />
      </div>
    ),
  },

  {
    path: "/student/:id",
    element: (
      <div>
        <ParamComp />
        <Navbar />
      </div>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
