import Hamburger from "hamburger-react";
import React from "react";
import "./Header.css";
class Header extends React.Component {
  state = {
    isOpen: false,
  };
  //handle click
  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return <header></header>;
  }
}
export default Header;
