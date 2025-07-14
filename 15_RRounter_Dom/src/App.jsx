import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import ParamComp from "./components/ParamComp";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Home />
        <Navbar />
      </div>
    ),
  },
  {
    path: "about",
    element: (
      <div>
        <About />
        <Navbar />
      </div>
    ),
  },
  {
    path: "dashboard",
    element: (
      <div>
        <Dashboard />
        <Navbar />
      </div>
    ),
  },

  {
    path: "student/:id",
    element: (
      <div>
        <ParamComp />
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
