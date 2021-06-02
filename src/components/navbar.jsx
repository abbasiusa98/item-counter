//import React, { Component } from "react";

// Stateless Functional Components
// We can't use lifecycle Hooks in Stateless Functional Components

const NavBar = ({ counters }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a href="http://www.google.com" className="navbar-brand">
        Navbar
      </a>
      <span className="badge badge-pill badge-light badge-lg">
        {counters.filter((c) => c.value > 0).length}
      </span>
    </nav>
  );
};

// class NavBar extends Component {
//   state = {};
//   render() {
//     return (
//       <nav className="navbar navbar-dark bg-dark">
//         <a href="http://www.google.com" className="navbar-brand">
//           Navbar
//         </a>
//         <span className="badge badge-pill badge-light badge-lg">
//           {this.props.counters.filter((c) => c.value > 0).length}
//         </span>
//       </nav>
//     );
//   }
// }

export default NavBar;
