import React from "react";

const UserCard = ({ userData }) => {
  console.log(userData);

  return (
    <div
      className="user-card"
      style={{
        border: "4px solid red",
        borderRadius: "20px",
        margin: "30px",
        padding: "10px",
        color: "yellow",
        fontSize: "40px",
      }}
    >
      <img className="user-img" />
      <h3>{userData.name.first}</h3>
      <p>{userData.phone}</p>
      <p>
        {userData.location.city}, {userData.location.state}
      </p>
    </div>
  );
};

export default UserCard;
