import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" >
                        Home
                    </NavLink>
                    <NavLink to="/experience" >
                        Experience
                    </NavLink>
                    <NavLink to="/blog" >
                        Blog
                    </NavLink>
                    <NavLink to="/list" >
                        List
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;
