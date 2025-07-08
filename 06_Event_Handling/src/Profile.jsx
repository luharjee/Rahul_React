import React, { useState } from "react";

const Profile = () => {
  const profilePic = "/src/assets/rahul.png";
  const [set, setChange] = useState("");

  const handleProfile = (e) => {
    e.target.style.display = "none";
  };

  const handleAll = (e) => {
    setChange(e.target.value);
  };
  return (
    <div>
      <img
        src={profilePic}
        alt="ad"
        onClick={(e) => handleProfile(e)}
        style={{ width: "700px" }}
      />
      <input type="text" onChange={handleAll} />
      <h2>Set : {set}</h2>
    </div>
  );
};

export default Profile;
