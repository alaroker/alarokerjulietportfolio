import React, { Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                 <Cell col={12}>
                     <img 
                     src = "https://scontent.fnbo2-1.fna.fbcdn.net/v/t1.0-9/90651119_2929119493868991_2646154240401080320_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=doUI4oUd5AIAX9fRAmX&_nc_oc=AQmVeaeUZ51ztmMA09G6TY6hFtVDVGfg1jAfQ70HghymrqzWI02gw3tklq5NpDzboks&_nc_ht=scontent.fnbo2-1.fna&oh=9b218e4adc33026d7751e1c612c2639a&oe=5F5ACA2D"
                     alt = "avatar"
                     className = "avatar-img"
                     />

                     <div className="banner-text">
                         <h1>Full Stack Web Developer</h1>
                         <hr/>
                         <p>HTML/CSS | Bootstrap | Javascript | React | React Native | NodeJS | Express | MongoDB</p>

                         <div className="social-links">

                             {/*LinkedIn*/}
                             <a href="https://www.linkedin.com/in/juliet-alaroker-a72990143/" rel="noopener moreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                             </a>

                             {/*Github*/}
                             <a href="https://github.com/alaroker" rel="noopener moreferrer" target="_blank">
                            <i className="fa fa-github-square" aria-hidden="true" />
                             </a>

                              {/* FreeCodeCamp
                              <a href="https://google.com" rel="noopener moreferrer" target="_blank">
                            <i className="fa fa-free-code-camp" aria-hidden="true" />
                             </a> */}

                             {/*Medium*/}
                             <a href="https://medium.com/@julietalaroker" rel="noopener moreferrer" target="_blank">
                            <i className="fa fa-medium" aria-hidden="true" />
                             </a>



                         </div>

                     </div>
                 </Cell>

                </Grid>

            </div>
        )
    }
}

export default Landing;
