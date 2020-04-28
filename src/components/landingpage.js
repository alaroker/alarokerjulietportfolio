import React, { Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                 <Cell col={12}>
                     <img 
                     src = "https://scontent.fnbo2-1.fna.fbcdn.net/v/t1.0-9/p720x720/90651119_2929119493868991_2646154240401080320_o.jpg?_nc_cat=110&_nc_sid=85a577&_nc_eui2=AeFyjd4nf8ggdx8WdJZcOKPQn5SB8xrNCtWflIHzGs0K1Q3HPoEjVVbKMLjSwiGNwx7fMSV3DDXcb3xQJ_kpXIGI&_nc_ohc=OW3bfLzAoxIAX9FGtr0&_nc_ht=scontent.fnbo2-1.fna&_nc_tp=6&oh=a5beab66e90a0db21a5e5da496f893bd&oe=5EC39D03"
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

                              {/*FreeCodeCamp*/}
                              <a href="https://google.com" rel="noopener moreferrer" target="_blank">
                            <i className="fa fa-free-code-camp" aria-hidden="true" />
                             </a>

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