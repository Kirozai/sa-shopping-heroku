import React from "react";
import { Link } from "react-router-dom";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";

const NwSuccess = () => {
  return (
    <div style={{height: "100vh"}}>
      <Navbar />
      <Announcement />
      <div style={{backgroundColor: "#fcf5f5", height: "100%", paddingTop: "30vh", display: "flex", flexDirection:"column", alignItems: "center"}}>
        <h1 style={{textAlign: "center", color: "black", fontSize: "40px"}}>Thanks for registering to our newsletter !</h1>
        <Link to="/" style={{color: "black", textDecoration: "none"}} >
          <button style={{color: "white", backgroundColor: "teal", border: "none", outline: "none", padding: "20px", fontSize: "20px", marginTop: "20%", cursor: "pointer", borderRadius: "10px"}}>Homepage</button>
        </Link>
      </div>
    </div>
  );
};

export default NwSuccess;
