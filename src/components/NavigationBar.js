import React from 'react';
import {Nav , Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`

    .navbar{
        background-color: #222;
       
    }

    .navbar-brand, .navbar-nav .nav-link {

        color: #bbb;
    
        &:hover{
            color: white;
        }

    }

`;

export const NavigationBar = () => (

     <Styles>
         <Navbar expand="lg">
             <Navbar.Brand href="/">GAGOUM CONSULTING</Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav"/>
             <Navbar.Collapse id="basic-navbar-nav">
                 <Nav className="ml-auto">
                     <Nav.Item><Nav.Link href="/">Accueil</Nav.Link></Nav.Item>
                     <Nav.Item><Nav.Link href="/service">Service</Nav.Link></Nav.Item>
                     <Nav.Item><Nav.Link href="/cabinet">Cabinet</Nav.Link></Nav.Item>
                     <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                 </Nav>
             </Navbar.Collapse>
         </Navbar>
     </Styles>

)
