import { createRoot } from "react-dom/client";
import "./index.css";

import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

const Kaka = () => {
  return (
    <div>
      <h1>Kaka Shree</h1>
      <NavLink to="/rosi">Ok</NavLink>
    </div>
  );
};

const Name = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h2>Your name is : {params.nameid}</h2>
    </div>
  );
};

const Rosi = () => {
  return (
    <div>
      <h1>She is not in approchable or cannot be got by me</h1>
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Kaka />} />
      <Route path="rosi" element={<Rosi />} />
      <Route path="kali/:nameid" element={<Name />} />
    </Routes>
  </BrowserRouter>
);
