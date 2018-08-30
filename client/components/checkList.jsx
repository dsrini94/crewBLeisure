import React, { Component } from 'react';
// import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
// import Reveal from 'react-reveal';
import { Input, Menu, Segment,Header,Feed,Button,Form,Dropdown,Modal,Label,Icon,Grid ,Divider,Image,Sidebar,Card,Checkbox} from 'semantic-ui-react'
import Appbar from './../components/appbarCrew.jsx';
import SidebarMenu from './../components/sidebarMenu.jsx';

export default class MessageTabs extends Component {

  constructor()
  {
    super();
    this.state = {
      sidebarVisiblity: false,
      toggleIcon: 'content',
      activeItem: 'checkin',
      pdtDetails: []
    }
  }
  handleSiderbarVisiblity() {
    if (this.state.sidebarVisiblity) {
      this.setState({
        sidebarVisiblity: !this.state.sidebarVisiblity
      });
      this.setState({toggleIcon: 'content'});
    } else {
      this.setState({
        sidebarVisiblity: !this.state.sidebarVisiblity
      });
      this.setState({toggleIcon: 'remove'});
    }
  }

  render() {
    const { activeItem } = this.state

    return (
      <div style={{overflow:'hidden'}}>
        <div className = "sidebar">
        <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='push' width='thin' visible={this.state.sidebarVisiblity} icon='labeled' vertical >
          <SidebarMenu/>
        </Sidebar>
        <Sidebar.Pusher>
          <Segment className='main' basic style={{
             padding:"14px 0px",background:"url('./../../images/app1.jpg')",backgroundSize: 'cover'}}>
            <Appbar toggleIcon={this.state.toggleIcon} handleSiderbarVisiblity={this.handleSiderbarVisiblity.bind(this)}/>
          <div >
            <Header as='h3' block inverted style ={{borderWidth:'0px',backgroundColor:'black',margin:'5px',opacity:'0.5'}} >
              <center>
                 CheckList
               </center>
            </Header>
          <Grid>
              <Grid.Row style={{margin:'18px'}}>
                <Grid.Column>
                  <Card.Group>
                  <Card fluid color='red' style={{margin:'5px',backgroundColor:'rgba(255, 255, 255, 0.5)'}}>
                    <Card.Content>
                      <Feed>
                        <Feed.Event>
                          <Feed.Content>
                            <Feed.Summary>
                            Pre Boarding Checks
                            </Feed.Summary>
                          </Feed.Content>
                        <Checkbox  />
                        </Feed.Event>
                      </Feed>
                    </Card.Content>
                  </Card>
                  <Card fluid color='red' style={{margin:'5px',backgroundColor:'rgba(255, 255, 255, 0.5)'}} >
                    <Card.Content>
                      <Feed>
                        <Feed.Event>
                          <Feed.Content>
                            <Feed.Summary>
                            Meal Count Checks
                            </Feed.Summary>
                          </Feed.Content>
                        <Checkbox   />
                        </Feed.Event>
                      </Feed>
                    </Card.Content>
                  </Card>
                  <Card fluid color='red' style={{margin:'5px',backgroundColor:'rgba(255, 255, 255, 0.5)'}} >
                    <Card.Content>
                      <Feed>
                        <Feed.Event>
                          <Feed.Content>
                            <Feed.Summary>
                              First aid kit sealed
                            </Feed.Summary>
                          </Feed.Content>
                        <Checkbox   />
                        </Feed.Event>
                      </Feed>
                    </Card.Content>
                  </Card>
                  <Card fluid color='red' style={{margin:'5px',backgroundColor:'rgba(255, 255, 255, 0.5)'}} >
                    <Card.Content>
                      <Feed>
                        <Feed.Event>
                          <Feed.Content>
                            <Feed.Summary>
                              Official Weather Briefing
                            </Feed.Summary>
                          </Feed.Content>
                          <Checkbox  />
                        </Feed.Event>
                      </Feed>
                    </Card.Content>
                  </Card>
                  <Card fluid color='red' style={{margin:'5px',backgroundColor:'rgba(255, 255, 255, 0.5)'}} >
                    <Card.Content>
                      <Feed>
                        <Feed.Event>
                          <Feed.Content>
                            <Feed.Summary>
                              Pre Take-Off Check
                            </Feed.Summary>
                          </Feed.Content>
                        <Checkbox  />
                        </Feed.Event>
                      </Feed>
                    </Card.Content>
                  </Card>
                    <Card fluid color='red' style={{margin:'5px',backgroundColor:'rgba(255, 255, 255, 0.5)'}} >
                      <Card.Content>
                        <Feed>
                          <Feed.Event>
                            <Feed.Content>
                              <Feed.Summary>
                              Pre Landing Check
                              </Feed.Summary>
                            </Feed.Content>

                            <Checkbox  />

                          </Feed.Event>
                        </Feed>
                      </Card.Content>
                    </Card>




                    <Card fluid color='red' style={{margin:'5px',backgroundColor:'rgba(255, 255, 255, 0.5)'}} >
                      <Card.Content>
                        <Feed>
                          <Feed.Event>
                            <Feed.Content>
                              <Feed.Summary>
                              Post Landing Check
                              </Feed.Summary>
                            </Feed.Content>
                          <Checkbox   />
                          </Feed.Event>
                        </Feed>
                      </Card.Content>
                    </Card>
                    <Card fluid color='red' style={{margin:'5px',backgroundColor:'rgba(255, 255, 255, 0.5)'}} >
                      <Card.Content>
                        <Feed>
                          <Feed.Event>
                            <Feed.Content>
                              <Feed.Summary>
                                LogBook Check
                              </Feed.Summary>
                            </Feed.Content>
                            <Checkbox  />
                          </Feed.Event>
                        </Feed>
                      </Card.Content>
                    </Card>
                  </Card.Group>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
      </div>
    </div>
    )
  }
}
