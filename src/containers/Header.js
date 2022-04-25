import React from "react";


const Header = () => {
  return (
    <>
    <div className="ui fixed menu">
        <div className="ui container center">
          <div class="ui secondary menu">
            <a class="active item" href="/">
              Home 
            </a>
            <a class="item" href="login">
              Login
            </a>
            <a class="item" href="registration">
              Registration
            </a>
            <a>Logout</a>
          </div>
        </div>
      </div></>
  );
};





export default Header;