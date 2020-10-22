/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Footer from './footer';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src="https://avatars2.githubusercontent.com/u/44978186?s=460&u=8a6a14f942da268b526bd8f7783934348e448b27&v=4"
                alt="avatar"
                style={{ height: '200px' }}
              />
            </div>

            <h2 style={{ paddingTop: '2em' }}>Nanyonjo Irene</h2>
            <h4 style={{ color: 'grey' }}>Programmer</h4>
            <hr style={{ borderTop: '3px solid  olivedrab', width: '50%' }} />
            <p>I'm Nanyonjo Irene,  a software engineer who has mastered advanced programming skills while developing for 2 amount of years working with 3 languages..</p>
            <hr style={{ borderTop: '3px solid  olivedrab', width: '50%' }} />
            <h5>Address</h5>
            <p> Kampala - Uganda</p>
            <h5>Phone</h5>
            <p>(+256) 758-323723</p>
            <h5>Email</h5>
            <p>mbabaliiryn@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{ borderTop: '3px solid  olivedrab', width: '50%' }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2018}
              endYear={2019}
              schoolName="Kampabits(Certificate in ICT and MultiMedia)"
              schoolDescription="Empowering Youth through ICT. Kampabits leverages ICT to give the youth from less previledged communities a chance to be employed."
            />

            <Education
              startYear={2019}
              endYear={2019}
              schoolName="Tunga Women In Tech Program(Certificate in Advanced computer Programming Skills)"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <Education
              startYear={2020}
              endYear={2021}
              schoolName="Micoverse(Certificate in Full Stack Web Development)"
              schoolDescription="A global school for software develpers where students pay nothing until they land a job that pays $1000 and above"
            />
            <hr />

            <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="Intership"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <h2>Skills</h2>
            <Skills
              skill="javascript"
              progress={80}
            />
            <Skills
              skill="HTML/CSS"
              progress={100}
            />
            <Skills
              skill="Ruby"
              progress={100}
            />
            <Skills
              skill="Ruby on Rails"
              progress={90}
            />
            <Skills
              skill="Django Rest Framework"
              progress={60}
            />
            <Skills
              skill="React"
              progress={90}
            />
            <Skills
              skill="React Redux"
              progress={80}
            />
            <hr />
            <h2>Deployment</h2>
            <Skills
              skill="Heroku"
              progress={100}
            />
            <Skills
              skill="Netlify"
              progress={100}
            />
          </Cell>
        </Grid>
        <Footer />

      </div>
    );
  }
}

export default Resume;
