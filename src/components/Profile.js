import { useState } from "react";

const Profile = (props) => {
    const [count1,setCount1]=useState(0);
  return (
    <>
      <h2>Profile Component</h2>
      <h3> {props.name}</h3>
      <h3>count:{count1}</h3>
      <button onClick={()=>setCount1(1)}>count1</button>
    </>
  );
};
export default Profile;
