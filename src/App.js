import React from "react";
import Profile from "./Profile/Profile";

const user={
  name:"wael touati",
  bio:"I love coding !",
  src: "/IMG_20220117_180520_675.jpg" 
};


export default function App() {
  const handleName = () => alert(user.name);
  return (
    <div>
      <Profile name={user.name} bio={user.bio} profession={user.profession} src={user.src} handleName={handleName} />
    </div>
  );
}

