import React from "react"
import ReactStars from "react-rating-stars-component";
import Webimage from "../components/Webimage"
// import pic from "./images/mypic.jpg";
import Clock from "../components/Clock"
import Container from "react-bootstrap/Container"


function About() {
    return(
       <Container>
        <div className = "About"><br></br>
            <h5><Clock /></h5><br></br>
             <h3>Satisfaction Rating </h3>
            <ReactStars /><br></br>
            <Webimage />
        </div>
        </Container>
   )
}

export default About

// import React from "react"
// import Webimage from "./WebImage"

// function App() {
//   return <Webimage />
// }
// export default App;