import React from "react";
import {Navbar,Nav} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navigation() {
    return (
        <Navbar className="justify-content-center" fixed="bottom" bg="dark" variant="dark">
            <Nav className="mr-auto">
                <Nav.Link >Home</Nav.Link>
                <Nav.Link >Features</Nav.Link>
                <Nav.Link >Pricing</Nav.Link>
            </Nav>
        </Navbar>
    )
}