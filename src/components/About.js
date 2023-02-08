import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import ProfileFunctional from "./Profile";
import Profile2 from "./ProfileClass2";


//functional based component
/* const About=()=>{
    return (
        <div>
            <h1> About US Page</h1>
            <p> This is namste react course</p>
            
            <ProfileFunctional name={"Aaushi function"}/>
            <ProfileClass name={"Aaushi class"}/>
        </div>
    )
} */

//class based component
class About extends Component{
    constructor(props){
        super(props);
        console.log("parent-constructor");
    }
    componentDidMount(){
        console.log("parent-componentdidmount");
    }
    render(){
        console.log("parent-render");
        return (
            <div>
                <h1> About US Page</h1>
                <p> This is namste react course</p>
                
                
                <ProfileClass name={"child1"}/>
                {/* <Profile2 name={"child2 "}/> */}
            </div>
        )
    }
}

export default About;