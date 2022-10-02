import React from "react"
import ContactImage from "../components/ContactImage"
import Container from "react-bootstrap/Container"
import Clock from "../components/Clock"

function Contact() {
    return(
        <Container>
  <div>
    <br></br>
  <h5><Clock /></h5>
    <h3>Contact us:   (800)-577-1311</h3>
  </div>
    <br></br>

  <div>
    <ContactImage />
  </div>
      </Container>
   )
}

export default Contact