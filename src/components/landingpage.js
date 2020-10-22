/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Footer from './footer';

class Landing extends Component {
  render() {
    return (
      <div>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://avatars2.githubusercontent.com/u/44978186?s=460&u=8a6a14f942da268b526bd8f7783934348e448b27&v=4"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr />
            <p>HTML/CSS | Bootstrap | JavaScript | React | React Redux | Ruby | Ruby on Rails | Django Rest Framework</p>

              <div className="social-links">

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/mbabali-iryn/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="https://github.com/mbabaliiryn" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

              </div>
            </div>
          </Cell>
        </Grid>
      </div>
      <div className="footer-main-page">
        <Footer />
      </div>
      </div>
    );
  }
}

export default Landing;
