import React from "react";
import { Outlet } from "react-router-dom";



const About=()=>{
    return (
        <div>
            <h1> About US Page</h1>
            <p> This is namste react course</p>
            <Outlet/>
        </div>
    )
}

export default About;