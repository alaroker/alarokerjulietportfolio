import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Alaroker Juliet</h2>
            <img
              src="https://scontent.fnbo2-1.fna.fbcdn.net/v/t1.0-9/90651119_2929119493868991_2646154240401080320_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=_lX696uQ6icAX-SAJps&_nc_ht=scontent.fnbo2-1.fna&oh=e114bcba85f8400a3fcf0dd52802c90f&oe=5EEC0C2D"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s, when an unknown printer
               took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries.</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    +256 78558101
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    +256 703395312
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    julietalaroker@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-linkedin" aria-hidden="true"/>
                    My Linkedin
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;