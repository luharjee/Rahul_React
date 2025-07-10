import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  NavLink,
} from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <NavLink to={`post/${post.id}`} key={post.id}>
            <h1 className="rosi">{post.title}</h1>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h2>Kaka Shree is here to do something and just standing</h2>
    </div>
  );
};

const Person = () => {
  return (
    <div>
      <h1>Kali is she</h1>
    </div>
  );
};

const Find = () => {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1>My name is: {params.userId} </h1>
    </div>
  );
};

const Khoja = () => {
  const [data, setData] = useState(null);

  const params = useParams();
  console.log(params);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);

  if (data === null) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>{data.title}</h1>
      <h3>{data.body}</h3>
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="post/:postId" element={<Khoja />} />
        <Route path="about" element={<About />} />
        <Route path="rohan/:userId" element={<Find />} />
        <Route path="kali">
          <Route path="rosi" element={<Person />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
