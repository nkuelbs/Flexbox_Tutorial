import React, { Component } from "react";
// import logo from './logo.svg';
import "../src/styles3.css";

class WebLayout extends Component {
  render() {
    return (
      <div>
        <body>
          <header class="page-header">
            <h1>Header</h1>
          </header>

          <main class="page-content">
            <nav class="content-navigation">
              <h1>Navigation</h1>
            </nav>
            <article class="content-article">
              <h1>Main Content</h1>
            </article>
            <aside class="content-sidebar">
              <h1>Sidebar</h1>
            </aside>
          </main>

          <footer class="page-footer">
            <h1>Footer</h1>
          </footer>
        </body>
      </div>
    );
  }
}

export default WebLayout;
