import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

interface Props {
    to: string;
    text?: string;
    img?: string;
}
const NavBtn: React.FC<Props> = ({ to, text, img }) => {
    return (
        <Nav.Link>
            <Link to={to}><img src={img} />{text}</Link>
        </Nav.Link>
    )
}

NavBtn.defaultProps = {
    to: "/",
    text: "Error",
    img: ""
}


export default NavBtn;