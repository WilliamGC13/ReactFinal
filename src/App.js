// import { useState, useEffect } from 'react'
// import Form from "./pages/Form";
// import UpdateForm from "./pages/UpdateForm";
// import AlbumForm from "./pages/AlbumForm";
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Members from "./pages/Members";
import Error from "./pages/Error";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  <Home />
  // const [albums, setAlbums] = useState([])

  // const fetchAlbums = async () => {
  //   const res = await fetch(`https://jsonplaceholder.typicode.com/albums?_limit=10`)
  //   const data = await res.json()
  //   setAlbums(data)
  //   console.log('rendering')
  // }

  // const deleteAlbum = async (id) => {
  //   const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
  //     method: 'DELETE'
  //   })
  //   console.log(res)
  // }

  // useEffect(() => {
  //   fetchAlbums();
  // }, [])

  return (
    <>
      <Router>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to={'/'}>GymFit</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to={'/about'}>About</Nav.Link>
              <Nav.Link as={Link} to={'/contact'}>Contact</Nav.Link>
              <Nav.Link as={Link} to={'/info'}>Founding Members</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/info" element={<Members />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>

      {/* <div className='App'>
        <AlbumForm />
        <Form />
        <UpdateForm />
        {albums.map(album => <p key={album.id} onClick={() => deleteAlbum(album.id)}>{album.title}</p>)}
      </div> */}
    </>
  );

}

// export default App;

// function App() {
// const [albums, setAlbums] = useState([])

// const fetchAlbums = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/albums?_limit=10`)
//   const data = await res.json()
//   setAlbums(data)
//   console.log('rendering')
// }

// const deleteAlbum = async (id) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
//     method: 'DELETE'
//   })
//   console.log(res)
// }

// useEffect(() => {
//   fetchAlbums();
// },[])

// return (
//   <div className='App'>
//     <AlbumForm />
//     <Form />
//     <UpdateForm />
//     {albums.map(album => <p key={album.id} onClick={()=> deleteAlbum(album.id)}>{album.title}</p>)}
//   </div>
// );
// }

export default App;