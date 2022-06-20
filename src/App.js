import './App.css';
import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button,InputGroup } from 'react-bootstrap'
import styled from 'styled-components'
import {Search} from '@styled-icons/boxicons-solid/Search'

function App() {
  return (
    <div  style={{ backgroundColor:"whitesmoke", height:"95vh"}}>
      
      <div  style={{ backgroundColor:"whitesmoke"}}>
                <div className="row">
                    <div className="col-md-12">
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="#home" style={{marginLeft:"10%", fontSize:28, wordSpacing:"10px"}}>WILSMAIL</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav" style={{marginLeft:"40%"}}>
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/" >Home</Nav.Link>
                                    <Nav.Link href="/about-us">Contact</Nav.Link>
                                    <Nav.Link href="/contact-us">About</Nav.Link>
                                    </Nav>
                                    <Form inline style={{display:"flex"}}>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{width:"75%"}}/>
                                    <Search style={{width:30, color:"whitesmoke", marginLeft:10 }} />
                                    </Form>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                    </div>
                </div>
            </div>


            <div style={{width:"70%", margin:"0 auto", backgroundColor:"whitesmoke" }}>

            <InputGroup className="mb-3"  style={{boxShadow:"1px 2px 5px rgba(0, 0, 0, 0.4)"}}>
    <InputGroup.Text id="basic-addon1">Nom d'utilisateur</InputGroup.Text>
    <FormControl
      placeholder="Entrez votre nom"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

  <InputGroup className="mb-3"  style={{boxShadow:"1px 2px 5px rgba(0, 0, 0, 0.4)"}}>
    <FormControl
      placeholder="Entrez votre adresse E-mail"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Text id="basic-addon2">@gomycode.co</InputGroup.Text>
  </InputGroup>

  <InputGroup  style={{boxShadow:"1px 2px 5px rgba(0, 0, 0, 0.4)"}}>
    <InputGroup.Text>Inserer votre commentaire ici</InputGroup.Text>
    <FormControl as="textarea" aria-label="With textarea" style={{height:100}} />
  </InputGroup>
            </div>
    </div>
  );
}
export default App;
