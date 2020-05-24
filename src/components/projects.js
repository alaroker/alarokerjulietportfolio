import React, { Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component {
    constructor(props) {
      super(props);
      this.state = { activeTab: 0};  
    }
    toggleCategories(){
    if(this.state.activeTab === 0){
        return(
            <div className="projects-grid">
             {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
             <CardTitle style = {{color: '#fff', height: '176px', background:
              'url(https://hackernoon.com/hn-images/1*KBGdMaU_emZX4XR1AvkD4A.gif) center / cover'}}>React Project #1</CardTitle>
             <CardText>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...

             </CardText>
             <CardActions border>
        <Button colored>Github</Button>
        {/* <Button colored>CodePen</Button> */}
        <Button colored>LiveDemo</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>

            </Card>

             {/* Project 2 */}
             <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
             <CardTitle style = {{color: '#fff', height: '176px', background:
              'url(https://hackernoon.com/hn-images/1*KBGdMaU_emZX4XR1AvkD4A.gif) center / cover'}}>React Project #2</CardTitle>
             <CardText>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...

             </CardText>
             <CardActions border>
        <Button colored>Github</Button>
        {/* <Button colored>CodePen</Button> */}
        <Button colored>LiveDemo</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>

            </Card>


             {/* Project 3 */}
             <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
             <CardTitle style = {{color: '#fff', height: '176px', background:
              'url(https://hackernoon.com/hn-images/1*KBGdMaU_emZX4XR1AvkD4A.gif) center / cover'}}>React Project #3</CardTitle>
             <CardText>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...

             </CardText>
             <CardActions border>
        <Button colored>Github</Button>
        {/* <Button colored>CodePen</Button> */}
        <Button colored>LiveDemo</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>

            </Card>
            </div>

        
        )
    } else if (this.state.activeTab === 1){
        return(
            <div><h1>This is Python</h1></div>
        )

    } else if (this.state.activeTab === 2){
        return(
            <div><h1>This is PHP</h1></div>
        )

    } 
    else if (this.state.activeTab === 3){
        return(
            <div><h1>This is Java</h1></div>
        )

    }


    }
    

    render(){
        return(
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                 <Tab>Javascript</Tab>
                 <Tab>Python</Tab>
                 <Tab>PHP</Tab>
                 <Tab>Java</Tab>
                 

                </Tabs>
                <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;