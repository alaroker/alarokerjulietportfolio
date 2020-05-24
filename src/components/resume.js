import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://scontent.fnbo2-1.fna.fbcdn.net/v/t1.0-9/90651119_2929119493868991_2646154240401080320_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=z3l8aD18k8YAX_-g1kt&_nc_ht=scontent.fnbo2-1.fna&oh=7658011dc6787657b4ac4af8f224a14f&oe=5EF000AD"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Alaroker Juliet</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Kampala, Uganda</p>
            <h5>Phone</h5>
            <p>+256 703395312</p>
            <h5>Email</h5>
            <p>julietalaroker@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2001}
              endYear={2007}
              schoolName="My Primary School"
              schoolDescription="Greenhill Academy Kampala"
               />

            <Education
              startYear={2008}
              endYear={2011}
              schoolName="My O'Level"
              schoolDescription="Mt. St. Mary's College Namagunga"
               />


            <Education
              startYear={2012}
              endYear={2013}
              schoolName="My A'Level"
              schoolDescription="St. Mary's Senior Secondary School Kitende"
               />

               <Education
                 startYear={2014}
                 endYear={2020}
                 schoolName="My University"
                 schoolDescription="Bsc. Software Engineering, Makerere University"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2019}
              endYear={2020}
              jobName="First Job"
              jobDescription="Python and Javascript developer at Tunga"
              />

              <Experience
                startYear={2020}
                endYear={2020}
                jobName="Second Job"
                jobDescription="IT Intern at Bayport Financial Services"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Javascript"
                progress={100}
                />
                <Skills
                  skill="Python"
                  progress={80}
                  />
                  <Skills
                    skill="PHP"
                    progress={50}
                    />
                    <Skills
                      skill="Java"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;