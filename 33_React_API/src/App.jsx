import { useEffect, useState } from "react";
import "./App.css";
import { getPost, getRandomUser } from "./api/api";
import PostCards from "./components/PostCards";
import UserCard from "./components/UserCard";

function App() {
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getPost().then((post) => setData(post));
  }, []);

  useEffect(() => {
    getRandomUser().then((user) => setUserData(user.results[0]));
  }, []);

  console.log(userData);

  const changeUser = () => {
    getRandomUser().then((user) => setUserData(user.results[0]));
  };

  return (
    <>
      {userData && <UserCard userData={userData} />}
      <button style={{ border: "2px solid green" }} onClick={changeUser}>
        Change User
      </button>
      <h1>Kaka Shree learnig API</h1>
      {data ? (
        data.map((e) => <PostCards title={e.title} body={e.body} id={e.id} />)
      ) : (
        <p>No Data</p>
      )}
    </>
  );
}

export default App;
