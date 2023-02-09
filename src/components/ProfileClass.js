import React from "react";
import { json } from "react-router-dom";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name:"",
        image:""
      }
    };
    console.log("child-constructor");
  }
  async componentDidMount(){
    console.log("child-componentdidmount");
    const data=await fetch("https://api.github.com/users/aaushi");
    const jsonData=await data.json();
    console.log(jsonData);
    this.setState({userInfo:{
        name:jsonData.name,
        image:jsonData.avatar_url
    }})
    console.log("child-componentdidmount-end");
    }
    componentDidUpdate(){
        console.log("child-componentDidUpdate");
    }
    componentWillUnmount(){
        console.log("child-componentWillUnmount");
    }
  render() {
    console.log("child-render");
    return (
      <>
      
        <h2>Profile class compoenent</h2>
        <h2>{this.state.userInfo.name}</h2>
        <img src={this.state.userInfo.image}></img>
      </>
    );
  }
}

export default Profile;
