import React from "react";
import pic from "../images/StaffPic.jpg";
import Gpic from "../images/gympic.jpg";
import Container from "react-bootstrap/Container";

function WebImage(){

 return (
    <Container>
    <div className="aboutImgs">
    <img src={pic} /> 
    <img src={Gpic} />
    </div>
    </Container>
 )
}
export default WebImage