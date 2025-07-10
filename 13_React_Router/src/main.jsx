import { StrictMode, useState, useEffect } from "react";
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
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div>
      <div>
        <ul>
          {post.map((post) => (
            <NavLink to={`/post/${post.id}`} key={post.id}>
              {post.title}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h2>About Kaka Shree</h2>
    </div>
  );
};

const Profile = () => {
  return (
    <div>
      <h1>Profile is Rahul Kaka</h1>
    </div>
  );
};

const Setting = () => {
  return (
    <div>
      <h1>Setting to set</h1>
    </div>
  );
};

const Userme = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>Your name is {params.userId}</h1>
    </div>
  );
};

const PostPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);
  const params = useParams();
  console.log(params);

  if (data === null) return <h1>Loading....</h1>;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="post/:postId" element={<PostPage />} />
        <Route path="user/:userId" element={<Userme />} />
        <Route path="account">
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
