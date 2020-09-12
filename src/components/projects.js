/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable consistent-return */
import React, { Component } from 'react';
import {
  Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton,
} from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }}>Calculator</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <a href="https://github.com/mbabaliiryn/react-calculator" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>

              </a>
              <a href="#" rel="noopener noreferrer" target="_blank">
                <Button colored>Live Demo</Button>

              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }} />
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }}>React Project #2</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <a href="#" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>

              </a>

              <a href="#" rel="noopener noreferrer" target="_blank">
                <Button colored>Live Demo</Button>

              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }} />
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }}>React Project #3</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <a href="#" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>

              </a>
              <a href="#" rel="noopener noreferrer" target="_blank">
                <Button colored>Live Demo</Button>

              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }} />
          </Card>
        </div>

      );
    } if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpWBI4m4qlRG0fTzLLd_JjxBxOmP0YD6m_sw&usqp=CAU) center / cover' }}>React Project #1</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <a href="#" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>

              </a>

              <a href="#" rel="noopener noreferrer" target="_blank">
                <Button colored>Live Demo</Button>

              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }} />
          </Card>

        </div>
      );
    } if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid rails">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '100', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVFv-D-O_Vlat3wB6P0VaP59iao_vlJ2H8kw&usqp=CAU) center / cover' }}>Gossip App</CardTitle>
            <CardText>
              An app that allows registered users to create posts. Only a registered user can see the name of the post creator. The app allows all registered members to comment on posts. Only the post creator can delete their posts.
            </CardText>
            <CardActions border>
              <a href="#" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>

              </a>
              <a href="#" rel="noopener noreferrer" target="_blank">
                <Button colored>Live Demo</Button>

              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }} />
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '100', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVFv-D-O_Vlat3wB6P0VaP59iao_vlJ2H8kw&usqp=CAU) center / cover' }}>Private Events App</CardTitle>
            <CardText>
              An app that works like Eventribe. Registered users can create events and invite other registered users to attend their events. The invited member receives the invitation via email and accepts the invite from the website.
            </CardText>
            <CardActions border>
              <a href="#" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>

              </a>
              <a href="#" rel="noopener noreferrer" target="_blank">
                <Button colored>Live Demo</Button>

              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }} />
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: '100', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVFv-D-O_Vlat3wB6P0VaP59iao_vlJ2H8kw&usqp=CAU) center / cover' }}>Software Engineer Platform</CardTitle>
            <CardText>
              An app that allows developers and managers to create tasks and projects. The app includes external tasks that belong to a projects and all tasks created by the logged in user
            </CardText>
            <CardActions border>
              <a href="#" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>

              </a>
              <a href="#" rel="noopener noreferrer" target="_blank">
                <Button colored>Live Demo</Button>

              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }} />
          </Card>

        </div>
      );
    } if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRai2Iuz8EhUPnFUMaL4MxXn4NlbGIkcbmCNA&usqp=CAU) center / cover' }}>Weather App</CardTitle>
            <CardText>
              App an that allows all users to search for the the Weather details by cities or countries. The user can get else get weaher details in celcius or Fahreinheit by clicking the toggle.
            </CardText>
            <CardActions border>
              <a href="#" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>

              </a>
              <a href="#" rel="noopener noreferrer" target="_blank">
                <Button colored>Live Demo</Button>

              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }} />
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRai2Iuz8EhUPnFUMaL4MxXn4NlbGIkcbmCNA&usqp=CAU) center / cover' }}>Phaser Game</CardTitle>
            <CardText>
              The game is intended to determine how fast a player can collect enough coins against the man-eater fishes in the next level. Press the up, dowm, right and left to move the guy.
            </CardText>
            <CardActions border>
              <a href="#" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>

              </a>
              <a href="#" rel="noopener noreferrer" target="_blank">
                <Button colored>Live Demo</Button>

              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }} />
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRai2Iuz8EhUPnFUMaL4MxXn4NlbGIkcbmCNA&usqp=CAU) center / cover' }}>TodoList App</CardTitle>
            <CardText>
              An app that allow users to create, edit and delete tasks, which organized into projects.
            </CardText>
            <CardActions border>
              <a href="#" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>

              </a>
              <a href="#" rel="noopener noreferrer" target="_blank">
                <Button colored>Live Demo</Button>

              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={tabId => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>React Redux</Tab>
          <Tab>Ruby on Rails</Tab>
          <Tab>JavaScript</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>

      </div>
    );
  }
}

export default Projects;
