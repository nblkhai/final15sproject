import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

class Navbar extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="d-flex row justify-content-center">
          <Link
            to="/"
            style={{ color: "inherit" }}
            onClick={() => this.setState({ categoryFilter: "" })}
          >
            <h6 className="mx-4 font-weight-bold">ALL CATEGORY</h6>
          </Link>
          <Link
            to="/"
            style={{ color: "inherit" }}
            onClick={() => this.setState({ categoryFilter: "" })}
          >
            <h6 className="mx-4 font-weight-bold">ALL CATEGORY</h6>
          </Link>
          <Link
            to="/"
            style={{ color: "inherit" }}
            onClick={() => this.setState({ categoryFilter: "" })}
          >
            <h6 className="mx-4 font-weight-bold">ALL CATEGORY</h6>
          </Link>
          <Link
            to="/"
            style={{ color: "inherit" }}
            onClick={() => this.setState({ categoryFilter: "" })}
          >
            <h6 className="mx-4 font-weight-bold">ALL CATEGORY</h6>
          </Link>
        </div>
      </div>
    );
  }
}
export default Navbar;
