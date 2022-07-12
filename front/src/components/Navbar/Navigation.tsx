import React from "react";
import {NavBtn} from './NavBtn';
import {Navbar,Nav} from "./style";


export const Navigation:React.FC=()=>{
    return (
        <Navbar className="justify-content-center" fixed="bottom" bg="dark" variant="dark">
            <Nav className="mr-auto" variant="pills">
                <NavBtn to="/" text="Home" img="/src/assets/home-svgrepo-com.svg" />
                <NavBtn to="ctfs" text = "Ctfs" img="/src/assets/flag-svgrepo-com.svg" />
                <NavBtn to="users" text = "Users" img="/src/assets/user-svgrepo-com.svg" />
                <NavBtn to="rank" text = "Rank" img="/src/assets/trophy-svgrepo-com.svg" />
            </Nav>
        </Navbar>
    )
}
