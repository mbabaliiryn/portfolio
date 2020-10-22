/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
  render() {
    return (
      <Grid>
        <Cell col={12}>
          <div style={{ display: 'flex' }}>
            {this.props.skill}
            {' '}
            <ProgressBar className="progress-bar" style={{ margin: 'auto', width: '75%' }} progress={this.props.progress} />
            {' '}
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Skills;
