import React from "react";
import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import ProfileFunctional from "./Profile";



const About=()=>{
    return (
        <div>
            <h1> About US Page</h1>
            <p> This is namste react course</p>
            {/* <Outlet/> or*/ }
            <ProfileFunctional name={"Aaushi function"}/>
            <ProfileClass name={"Aaushi class"}/>
        </div>
    )
}

export default About;