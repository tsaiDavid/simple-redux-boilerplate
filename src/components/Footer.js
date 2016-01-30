import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <span id="footer-text-wrap">
        Made in SF with <span id="heart">♥</span> by <a href="http://www.davidtsai.codes">David Tsai</a>.
        </span>
      </footer>
    );
  }
}
