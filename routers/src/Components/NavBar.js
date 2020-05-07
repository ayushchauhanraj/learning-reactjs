import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
// a href is not used in react ,,to prevent page load we use {Link ,NavLink}
//NavLink add active class i.e {class='active'} to the link ,in which we can apply
//different style over the active link via the active className
//withRouter provide all properties to props which i automatically provided to the about,contact,home propos bcz they were in Route tag
const NavBar = (props) => {
  // setTimeout(() => {
  //   props.history.push("/contact");
  // }, 3000);
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">Poke' Times</a>
        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default withRouter(NavBar);
