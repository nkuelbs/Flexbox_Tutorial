import React, { Component } from "react";
// import logo from './logo.svg';
import "../src/styles2.css";

class FlexGrid extends Component {
  render() {
    return (
      <div class="main">
        <div class="item">
          <em>I have some text</em>
        </div>

        <div class="item">
          <em>
            But I have more text which used to make our heights awkward, but not
            with flexbox. It just works how we want it to.
          </em>
        </div>

        <div class="item">
          <em>I have some text</em>
        </div>
      </div>
    );
  }
}

export default FlexGrid;
