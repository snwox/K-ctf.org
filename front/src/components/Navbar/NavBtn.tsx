import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {LinkWrapper} from "./style";
export const NavBtn: React.FC<{
    to?: string,
    text?: string,
    img?: string
}> = ({ to, text, img }) => {
    return (
        <LinkWrapper>
            <img style={{width: "30px",height:"30px"}} src={img || ""} />
            <Link to={to || "/"}>{text || "Error"}</Link>
        </LinkWrapper>
    )
}



