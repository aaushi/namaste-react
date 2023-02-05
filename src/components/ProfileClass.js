import React from "react";

class Profile extends React.Component {
  render() {
    return (
      <>
        <h2>Profile class compoenent</h2>
        <h3>{this.props.name}</h3>
      </>
    );
  }
}

export default Profile;
