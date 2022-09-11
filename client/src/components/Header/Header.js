import React from "react";
import { BrowserRouter, Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/img/header/logo.svg"; // relative path to image
import search from "../../assets/img/header/search.svg"; // relative path to image
import wallet from "../../assets/img/header/wallet.svg"; // relative path to image
import collection from "../../assets/img/header/collection.svg"; // relative path to image
import sell from "../../assets/img/header/sell.svg"; // relative path to image
import explore from "../../assets/img/header/explore.svg"; // relative path to image
class Header extends React.Component {
  state = {
    isOpen: false,
  };
  //handle click
  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <BrowserRouter>
        <header className="header">
          <Link exact to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="header-links">
            <Link to="/explore">
              <img className="header-link" src={explore} alt="explore link" />
            </Link>
            <Link to="/sell">
              <img className="header-link" src={sell} alt="upload page link" />
            </Link>
            <Link to="/collection">
              <img
                className="header-link"
                src={collection}
                alt="collections page link"
              />
            </Link>
            <Link to="/wallet">
              <img
                className="header-link"
                src={wallet}
                alt="wallet page link"
              />
            </Link>
          </div>
          <img className="search" src={search} alt="search bar" />
        </header>
      </BrowserRouter>
    );
  }
}
export default Header;
