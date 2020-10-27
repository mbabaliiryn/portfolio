/* eslint-disable react/self-closing-comp */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable consistent-return */
import React, { Component } from 'react';
import {
  Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton,
} from 'react-mdl';
import Footer from './footer';

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
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://user-images.githubusercontent.com/44978186/93586073-758da980-f9b0-11ea-9fe1-460336885c80.png) center / cover' }}></CardTitle>
            <CardText>
              The app allows users to perform mathematical calculations with plus, divide, add and subtract.
              A user can clear details and restart again.
            </CardText>
            <CardActions border>
              <a href="https://github.com/mbabaliiryn/react-calculator" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>

              </a>
              <a href="https://mbabaliiryn.github.io/react-calculator/" rel="noopener noreferrer" target="_blank">
                <Button colored>Live Demo</Button>

              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }} />
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://user-images.githubusercontent.com/44978186/94404646-023a2380-0178-11eb-92fc-76c5909f4c56.png) center / cover' }}></CardTitle>
            <CardText>
              A user can filter a group of the commodities by their company name for example. A user can view each commodity in details by clicking a details button.
            </CardText>
            <CardActions border>
              <a href="https://github.com/mbabaliiryn/react-capstone" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>

              </a>

              <a href="https://mbabaliiryn.github.io/react-capstone/" rel="noopener noreferrer" target="_blank">
                <Button colored>Live Demo</Button>

              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }} />
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://user-images.githubusercontent.com/44978186/96592907-97e94e80-12f1-11eb-9117-74a159145c23.png) center / cover' }}></CardTitle>
            <CardText>
              User can create various activities and monitor his or her progress.
            </CardText>
            <CardActions border>
              <a href="https://github.com/mbabaliiryn/final_capstone_frontend" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>

              </a>
              <a href="https://gracious-blackwell-9534ef.netlify.app/" rel="noopener noreferrer" target="_blank">
                <Button colored>Live Demo</Button>

              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }} />
          </Card>
        </div>

      );
    }
    if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid rails">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '100', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://user-images.githubusercontent.com/44978186/93582762-99022580-f9ab-11ea-811b-39d208da52ad.png) center / cover' }}>Gossip App</CardTitle>
            <CardText>
              An app that allows registered users to create posts. Only a registered user can see the name of the post creator. The app allows all registered members to comment on posts. Only the post creator can delete their posts.
            </CardText>
            <CardActions border>
              <a href="https://github.com/nyatindopatrick/members-only" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>

              </a>
              <a href="https://members-gossips.herokuapp.com" rel="noopener noreferrer" target="_blank">
                <Button colored>Live Demo</Button>

              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }} />
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '100', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://user-images.githubusercontent.com/44978186/93583044-fbf3bc80-f9ab-11ea-929b-f283343c64eb.png) center / cover' }}></CardTitle>
            <CardText>
              An app that works like Eventribe. Registered users can create events and invite other registered users to attend their events. The invited member receives the invitation via email and accepts the invite from the website.
            </CardText>
            <CardActions border>
              <a href="https://github.com/mbabaliiryn/Private-events" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>

              </a>
              <a href="https://private-events-lotr.herokuapp.com" rel="noopener noreferrer" target="_blank">
                <Button colored>Live Demo</Button>

              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }} />
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: '100', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://user-images.githubusercontent.com/44978186/93583697-e59a3080-f9ac-11ea-9a65-37b9af59f1c7.png) center / cover' }}></CardTitle>
            <CardText>
              An app that allows developers and managers to create tasks and projects. The app includes external tasks that belong to projects and all tasks created by the logged-in user
            </CardText>
            <CardActions border>
              <a href="https://github.com/mbabaliiryn/developer_platform" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>

              </a>
              <a href="https://engineerplatform.herokuapp.com" rel="noopener noreferrer" target="_blank">
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
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://user-images.githubusercontent.com/44978186/93584124-8ab50900-f9ad-11ea-9ccf-5a1c4dca8bdd.png) center / cover' }}></CardTitle>
            <CardText>
              An app that allows all users to search for the Weather details by cities or countries. The user can get else get weather details in Celcius or Fahrenheit by clicking the toggle.
            </CardText>
            <CardActions border>
              <a href="https://github.com/mbabaliiryn/Weather_App" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>

              </a>
              <a href="https://raw.githack.com/mbabaliiryn/Weather_App/feature/dist/index.html" rel="noopener noreferrer" target="_blank">
                <Button colored>Live Demo</Button>

              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }} />
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://user-images.githubusercontent.com/44978186/93585753-f0a29000-f9af-11ea-968e-8517af6d8ace.png) center / cover' }}></CardTitle>
            <CardText>
              The game is intended to determine how fast a player can collect enough coins against the man-eater fishes in the next level. Press the up, down, right and left to move the guy.
            </CardText>
            <CardActions border>
              <a href="https://github.com/mbabaliiryn/Phaser_Game" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>

              </a>
              <a href="https://mbabaliiryn.github.io/Phaser_Game/" rel="noopener noreferrer" target="_blank">
                <Button colored>Live Demo</Button>

              </a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }} />
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://user-images.githubusercontent.com/44978186/93585445-7ffb7380-f9af-11ea-827e-8f1df1fd5c8b.png) center / cover' }}></CardTitle>
            <CardText>
              An app that allows users to create, edit and delete tasks, which organized into projects.
            </CardText>
            <CardActions border>
              <a href="https://github.com/mbabaliiryn/TodoList" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>

              </a>
              <a href="https://rawcdn.githack.com/mbabaliiryn/TodoList/4631000974757b74c239e014a42b637663c112d5/dist/index.html" rel="noopener noreferrer" target="_blank">
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
          <Tab></Tab>
          <Tab>Ruby on Rails</Tab>
          <Tab>JavaScript</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>

        <Footer />

      </div>
    );
  }
}

export default Projects;
