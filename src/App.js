import "./App.css";
import React from "react";
import { Component } from "react";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header"></header>
      <Form />
    </div>
  );
}

export default App;

/* NAVBAR */
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Edit
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

/* FORM CLASS*/
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.resetA = this.resetA.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  resetA(event) {
    this.setState({
      input: "",
    });
  }
  render() {
    return (
      <form className="form-container">
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label my-form"
          >
            Enter student names
          </label>
          <textarea
            value={this.state.input}
            onChange={this.handleChange}
            className="form-control textarea"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label my-form"
          >
            Enter classroom responsibilities
          </label>

          <textarea
            value={this.state.input}
            readOnly
            className="form-control textarea"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <div onClick={this.resetA}>
            <Button />
          </div>
        </div>
      </form>
    );
  }
}

/* BUTTON */
function Button() {
  return (
    <div className="my-button">
      <button type="submit" className="btn btn-primary button">
        Start
      </button>
    </div>
  );
}
