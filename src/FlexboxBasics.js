import React, { Component } from "react";
// import logo from './logo.svg';
import "../src/styles.css";

class FlexboxBasics extends Component {
  render() {
    return (
      <div class="flex-container">
        <div class="flex-item flex-item-01">
          <em>Flex Item</em>
          <strong>01</strong>
        </div>

        <div class="flex-item flex-item-02">
          <em>Flex Item</em>
          <strong>02</strong>
        </div>

        <div class="flex-item flex-item-03">
          <em>Flex Item</em>
          <strong>03</strong>
        </div>

        {/* <div class="flex-item flex-item-04">
          <em>Flex Item</em>
          <strong>04</strong>
        </div>

        <div class="flex-item flex-item-05">
          <em>Flex Item</em>
          <strong>05</strong>
        </div>

        <div class="flex-item flex-item-06">
          <em>Flex Item</em>
          <strong>06</strong>
        </div>

        <div class="flex-item flex-item-07">
          <em>Flex Item</em>
          <strong>07</strong>
        </div>

        <div class="flex-item flex-item-08">
          <em>Flex Item</em>
          <strong>08</strong>
        </div> */}
      </div>
    );
  }
}

export default FlexboxBasics;
