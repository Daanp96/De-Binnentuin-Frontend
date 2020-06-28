import React from "react";
import './sass/Header.scss';
import {
  Link
} from "react-router-dom";

const Header = () => {
    return(
        <header>
            <Link to="/"><img className="header_logo" src="images/binnentuin_logo.png" href="binnentuin_logo"/></Link>
        </header>
    );
}

export default Header;
