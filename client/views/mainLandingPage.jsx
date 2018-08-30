import React from 'react';

import {Doughnut} from 'react-chartjs-2';
import SwipeableViews from 'react-swipeable-views';
import {Grid,Image,Icon,Divider,Segment,Header,Sidebar,Menu,Dropdown,Button} from 'semantic-ui-react';
import ModalCrew from '../components/modalLayoutCrew.jsx';
import PeopleLayout from '../components/peopleLayout.jsx';
import AppbarCrew from '../components/appbarCrew.jsx';
import SidebarMenu from '../components/sidebarMenu.jsx';
import CrewChatBox from '../components/crewchatbox.jsx';
import {HashRouter, Route, Link} from 'react-router-dom';

const square = { width: 130, height: 130 }
const data = {
  labels: [
  		'AVML',
  		'SVML',
  		'NVML',
      'HVML'
  	],
datasets: [{
data: [150, 50, 100, 40],
backgroundColor: [
'#f44336',
'#2196F3',
'#FFCE56',
    '#8BC34A'
],
hoverBackgroundColor: [
'#f44336',
'#36A2EB',
'#FFCE56',
    '#8BC34A'
]
}]
};
const data1 = {
  labels: [
  		'VIP',
  		'CIP',
  		'VVIP'

  	],
datasets: [{
data: [10, 7, 3],
backgroundColor: [
'#f44336',
'#2196F3',
"TEAL"

],
hoverBackgroundColor: [
'#f44336',
'#36A2EB',
'#FFCE56'

]
}]
};
const legendOpts = {
  display: true,
  position: 'right',
  fullWidth: true,
  reverse: true,
  labels: {
    fontColor: 'rgb(255, 99, 132)'
  }
}

export default class CrewPage extends React.Component {
  constructor(){
    super()
    this.state = {
       totalBusinessClassSeat :399,
       seatBClass:[],
       colum1:[],
       seatArray:[],
       flag:false,
       colors:['#f44336',
       '#2196F3',
       '#FFCE56',
       '#8BC34A'],
       sidebarVisiblity: false,
       toggleIcon: 'content',
       date: "",
       month:['Jan','Feb',"Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    }
  }

  handleSiderbarVisiblity(){
    if (this.state.sidebarVisiblity)
      this.setState({
        sidebarVisiblity: !this.state.sidebarVisiblity,
        toggleIcon: 'content'
      })
    else
      this.setState({
        sidebarVisiblity: !this.state.sidebarVisiblity,
        toggleIcon: 'remove'
      })
  }

  componentWillMount(){
    var d = new Date();

    console.log("date0 ",d.toDateString());
    this.setState({date: d.toDateString().substr(4,6)});
  }

  handleClick(){
  this.setState({flag:true});
  }

  handleClick1(){
  console.log("inside handle click 1");
  this.setState({flag:false});
  }
  render(){
    return(
      <div style={{overflow:'hidden'}}>
        <div>
         <Sidebar.Pushable as={Segment}>
           <Sidebar as={Menu} animation='push'  width='thin' visible={this.state.sidebarVisiblity} icon='labeled' vertical >
             <SidebarMenu />
           </Sidebar>
           <Sidebar.Pusher>
             <Segment basic style={{
                padding:"14px 0px",background:"url('./../../images/app1.jpg')",backgroundSize: 'cover'}}>
                  <AppbarCrew toggleIcon={this.state.toggleIcon} handleSiderbarVisiblity={this.handleSiderbarVisiblity.bind(this)}/>
                <Segment  inverted style={{borderRadius:'0px',padding:'3px',marginTop:'-12px',backgroundColor:'rgba(0, 0, 0, 0.2)'}}>
                    <Grid>
                      <Grid.Row style={{color:'white',fontSize:'11px'}}>
                        <Grid.Column width={6} style={{marginTop:'10px'}}>
                          <center>
                            XX123
                          </center>
                        </Grid.Column>
                        <Grid.Column width={4} style={{marginTop:'10px'}}>
                          <center>
                            LHR->JFK
                          </center>
                        </Grid.Column>
                        <Grid.Column width={6}>
                          <center>
                          <Grid.Row>
                            Dep - {this.state.date} 16.00
                          </Grid.Row>
                          <Grid.Row>
                            Arr - {this.state.date} 19:10
                          </Grid.Row>
                          </center>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Segment>
                  <Segment inverted style={{borderRadius:'0px',padding:'3px',marginTop:'-12px',backgroundColor:'rgba(0, 0, 0, 0.2)'}}>
                    <Grid>
                      <Grid.Row style={{color:'white',fontSize:'12px'}}>
                        <Grid.Column width={6} >
                          <center>
                            <Grid.Row>
                              LHR - Cloudy 56°F
                            </Grid.Row>
                            <Grid.Row>
                              Wind Speed 7 mph
                            </Grid.Row>
                          </center>
                        </Grid.Column>
                        <Grid.Column width={4}>
                          <center>
                            8hrs 20mins to dest
                          </center>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <center>
                              <Grid.Row>
                                JFK - Cloudy 50°F
                              </Grid.Row>
                              <Grid.Row>
                                Wind Speed 11 mph
                              </Grid.Row>
                            </center>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Segment>

                  <Header as='h4' block inverted style ={{borderWidth:'0px',backgroundColor:'black',margin:'5px',backgroundColor:'rgba(0, 0, 0, 0.4)'}} >
                    <Grid><Grid.Row style={{color:'white'}}>
                      <Grid.Column width = {2}></Grid.Column>
                      <Grid.Column width = {12}>
                        <center>
                           Total Number Of Seats : 360
                         </center>
                        </Grid.Column>
                          <Grid.Column width = {2}>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row style={{color:'white'}}>
                          <Grid.Column width = {2}></Grid.Column>
                        <Grid.Column width = {12} style = {{marginTop:'-22px'}}>
                        <center>
                       Total Number Of Passengers : 340
                     </center>
                   </Grid.Column>
                       <Grid.Column width ={2}>
                     </Grid.Column>
                   </Grid.Row>
                   </Grid>
                  </Header>
                  <Grid style={{marginTop:'4px'}}>
                    <Grid.Row>
                      <Grid.Column width={1}></Grid.Column>
                      <Grid.Column width={7} as={Link} to='/tierLayout'>
                        <Segment inverted color='grey' style={{background:"url('../../images/back2.jpg')"}}>
                          <center>
                          <Header as='h2' inverted>
                             <Icon name='star' style={{paddingTop:'10px'}}/>
                             <span style={{fontSize:'12px'}}>
                               Tier Layout
                             </span>
                          </Header>
                          </center>
                        </Segment>
                        </Grid.Column>
                      <Grid.Column width={7} as={Link} to='/peopleLayout'>
                        <Segment inverted color='grey' style={{background:"url('../../images/back1.jpg')"}}>
                          <center>
                          <Header as='h2' inverted>
                             <Icon name='users' style={{paddingTop:'10px'}}/>
                             <span style={{fontSize:'12px'}}>
                              Service Bay
                             </span>
                          </Header>
                          </center>
                        </Segment>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column width={1}></Grid.Column>
                      <Grid.Column width={7} as={Link} to='/mealLayout'>
                      {/* style={{background:"url('./../../images/food.jpg')"}} */}
                        <Segment inverted color='grey' style={{background:"url('../../images/food.jpg')",backgroundRepeat:'none'}}>
                          <center>
                          <Header as='h2' inverted>
                             <Icon name='food' style={{paddingTop:'10px'}}/>
                              <span style={{fontSize:'12px'}}>
                                Meals Layout
                              </span>
                          </Header>
                          </center>
                        </Segment>
                      </Grid.Column>
                      <Grid.Column width={7} as={Link} to='/notification'>
                        <Segment inverted color='grey' style={{background:"url('../../images/back3.png')"}}>
                          <center>
                          <Header as='h2' inverted>
                             <Icon name='bell outline' style={{paddingTop:'10px'}}/>
                             <span style={{fontSize:'12px'}}>
                                Notifications
                             </span>
                          </Header>
                          </center>
                        </Segment>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  <center>
                  <Button color='black' style={{width:'90%',margin:'20px',backgroundColor:'rgba(0, 0, 0, 0.5)'}} onClick={this.handleClick.bind(this)}>Crew Details</Button>
                  </center>
                  <center>
                  <Button color='black' style={{width:'90%',margin:'20px',marginTop:'-10px',backgroundColor:'rgba(0, 0, 0, 0.5)'}} as={Link} to='/seatLayout'>Seat Layout</Button>
                  </center>
                  <Segment inverted style={{borderRadius:'0px',padding:'20px',backgroundColor:'rgba(0, 0, 0, 0.5)'}}>
                      <Grid>
                        <Grid.Row style={{color:'white',fontSize:'13px'}}>
                          <Grid.Column width={4}>
                            <center>
                              Duty 1
                            </center>
                          </Grid.Column>
                          <Grid.Column width={2}>
                            <Icon name='chevron right' />
                          </Grid.Column>
                          <Grid.Column width={4}>
                            <center>
                              Duty 2
                            </center>
                          </Grid.Column>
                          <Grid.Column width={2}>
                            <Icon name='chevron right' />
                          </Grid.Column>
                          <Grid.Column width={4}>
                            <center>
                              Duty 3
                            </center>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Segment>
            </Segment>
           </Sidebar.Pusher>
         </Sidebar.Pushable>
         <ModalCrew method={this.handleClick1.bind(this)} flag={this.state.flag}/>
        </div>


      </div>
    )
  }
}
