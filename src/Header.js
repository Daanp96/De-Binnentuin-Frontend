import React from "react";
import './sass/Header.scss';
import {
  Link
} from "react-router-dom";

const Header = () => {
    return(
        <header>
            <Link to="/">
              <figure>
                <img className="header_logo" src="images/binnentuin_logo.png" href="binnentuin_logo" alt="logo van De Binnentuin"/>
              </figure>
            </Link>
        </header>
    );
}

export default Header;
