import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import s from '../css/Dashboard.module.css'
export default class Dashboard extends Component {
  render() {
    return (
      <div>
<Navbar  className={s.navbar} expand="lg">

    <Navbar.Brand href="#home" className={s.navbarlogo}>COMPANY LOGO</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" >
      <Nav  id={s.linklar}>
        <Nav.Link className={s.link} href="#home">Home</Nav.Link>
        <Nav.Link className={s.link} href="#link">Link</Nav.Link>
        <Nav.Link className={s.link} href="#home">Home</Nav.Link>
        <Nav.Link className={s.link} href="#link">Link</Nav.Link>
        <Nav.Link className={s.link} href="#home">Home</Nav.Link>
        <Nav.Link className={s.link} href="#link">Link</Nav.Link>  
      </Nav>
    </Navbar.Collapse>

</Navbar>

      </div>
    )
  }
}
