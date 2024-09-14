import React from "react";
import "./button.css";

const TopBarButton = ({ children }) => {
  return <>

    <div className="btn btn-topbar">

    {children} 
    </div>
  </>
};

export default TopBarButton;
