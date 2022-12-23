import React from "react";
import styled from "styled-components";

const Item = styled.div`
    background: black; color: white; width: 100%;

    .container{display: flex; justify-content: space-between; min-height: 70px; align-items: center; padding: 10px 30px;}
    nav{display: flex; gap: 30px}
`

const Header = () => {
    return(
        <Item className="header-main">
            <div className="container">
                <img src="ethnh" alt="logo" />
                <nav>
                    <a href="#">home</a>
                    <a href="#">about</a>
                    <a href="#">contact us</a>
                    <a href="#">services</a>
                </nav>
            </div>
        </Item>
    )
}

export default Header;