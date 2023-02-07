import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("child-constructor");
  }
  componentDidMount(){
    console.log("child-componentdidmount");
    }
  render() {
    console.log("child-render");
    return (
      <>
        <h2>Profile class compoenent</h2>
        <h3>{this.props.name}</h3>
        <h3>count:{this.state.count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: 1,
            });
          }}
        >count1</button>
      </>
    );
  }
}

export default Profile;
