import React from "react";
import styled from "styled-components";

const NavBar = styled.nav`
    background: #006400;
    width: 100%;
    height: 50px;
    display: flex;
    align-content: center;
    h1 {
        font-family: "FredokaOne-Regular";
        margin-top: 0;
        font-size: 35px;
        margin-left: 900px;
        
    }
`

const Header = () => {
    return (
        <NavBar>
            <h1>Friends</h1>
        </NavBar>
    )
}

export default Header; 