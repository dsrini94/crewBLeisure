import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import {Grid,Image,Icon,Divider,Segment,Header,Sidebar,Menu,Dropdown,Label} from 'semantic-ui-react';
import ModalDesign from '../components/modalDesign.jsx';
import AppbarCrew from '../components/appbarCrew.jsx';
import SidebarMenu from '../components/sidebarMenu.jsx';
import CrewChatBox from '../components/crewchatbox.jsx';
import {HashRouter, Route, Link} from 'react-router-dom';

const square = { width: 130, height: 130 }
const data = {
  labels: [
      'NVML - 150',
      'HNML - 50',
      'AVML - 75',
      'SPML - 50',
      'UNKNOWN -15',
      'UNOCCUPIED - 20'
  	],
datasets: [{
  data: [150, 50, 75, 50,15, 20],
  backgroundColor: [
  '#f44336',
  '#2196F3',
  '#FFCE56',
  '#8BC34A',
  "black",
  '#8c3682',
  ],
  hoverBackgroundColor: [
  '#f44336',
  '#36A2EB',
  '#FFCE56',
  '#8BC34A',
  "black",
  '#8c3682',
  ]
}]
};

const legendOpts = {
  display: true,
  position: 'right',
  fullWidth: false,
  reverse: false,
  labels: {
    fontColor: 'black'
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
       colors:[
       '#f44336',
       '#36A2EB',
       '#FFCE56',
       '#8BC34A',
       'BLACK'
     ],
       sidebarVisiblity: false,
       toggleIcon: 'content'
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


    this.state.seatArray.push(<Grid.Row key ={"E"+1} stackable='true' only='mobile'>

      <Grid.Column key ={"space"} style={{color:'#000'}} width ={1}>{20}</Grid.Column>

    <Grid.Column  key ={"a"} centered = {"true"} width ={1}>  <i style ={{color:this.state.colors[0]}} className="material-icons">event_seat</i></Grid.Column>
  <Grid.Column  key ={"b"} centered = {"true"} width ={1}>  <i style ={{color:this.state.colors[0]}} className="material-icons">event_seat</i></Grid.Column>
<Grid.Column  key ={"i"} centered = {"true"} width ={1}>  <i style ={{color:this.state.colors[1]}} className="material-icons">event_seat</i></Grid.Column>
    <Grid.Column key ={"e"} width={1}></Grid.Column>

  <Grid.Column key ={"c"} centered = {"true"} width ={1}>   <i style ={{color:this.state.colors[0]}}  className="material-icons ">event_seat</i></Grid.Column>

<Grid.Column key ={"l"} centered = {"true"} width ={1}>    <i style ={{color:this.state.colors[3]}} className="material-icons ">event_seat</i></Grid.Column>
      <Grid.Column key ={"k"} centered = {"true"} width ={1}>    <i style ={{color:this.state.colors[0]}} className="material-icons ">event_seat</i></Grid.Column>
    <Grid.Column key ={"f"} centered = {"true"} width ={1}>    <i style ={{color:this.state.colors[0]}} className="material-icons ">event_seat</i></Grid.Column>
  <Grid.Column key ={"m"} width={1}></Grid.Column>
    <Grid.Column key ={"g"} centered= {"true"}  width ={1}>    <i style ={{color:this.state.colors[0]}} className="material-icons">event_seat</i></Grid.Column>
    <Grid.Column key ={"h"} centered= {"true"}  width ={1}> <i style ={{color:this.state.colors[0]}} className="material-icons ">event_seat</i></Grid.Column>
  <Grid.Column key ={"j"} centered= {"true"}  width ={1}> <i style ={{color:this.state.colors[4]}} className="material-icons ">event_seat</i></Grid.Column>

    </Grid.Row>)
    this.state.seatArray.push( <Grid.Row key ={"E"+2}  only='mobile'>

     <Grid.Column key ={"space"} style={{color:'#000'}} width={1}> {21}</Grid.Column>

   <Grid.Column  key ={"a"} centered = {"true"} width ={1}>  <i style ={{color:this.state.colors[2]}} className="material-icons">event_seat</i></Grid.Column>
 <Grid.Column  key ={"b"} centered = {"true"} width ={1}>  <i style ={{color:this.state.colors[0]}} className="material-icons">event_seat</i></Grid.Column>
    <Grid.Column  key ={"i"} centered = {"true"} width ={1}>  <i style ={{color:this.state.colors[0]}} className="material-icons">event_seat</i></Grid.Column>
  <Grid.Column key ={"e"} width={1}></Grid.Column>

<Grid.Column key ={"c"} centered = {"true"} width ={1}>   <i  style ={{color:this.state.colors[4]}}  className="material-icons ">event_seat</i></Grid.Column>

     <Grid.Column key ={"l"} centered = {"true"} width ={1}>    <i style ={{color:this.state.colors[0]}} className="material-icons ">event_seat</i></Grid.Column>
   <Grid.Column key ={"k"} centered = {"true"} width ={1}>    <i style ={{color:this.state.colors[3]}} className="material-icons ">event_seat</i></Grid.Column>
 <Grid.Column key ={"f"} centered = {"true"} width ={1}>    <i style ={{color:this.state.colors[4]}} className="material-icons ">event_seat</i></Grid.Column>
   <Grid.Column key ={"m"} width={1}></Grid.Column>
 <Grid.Column key ={"g"} centered= {"true"}  width ={1}>    <i style ={{color:this.state.colors[0]}} className="material-icons">event_seat</i></Grid.Column>
     <Grid.Column key ={"h"} centered= {"true"}  width ={1}> <i style ={{color:this.state.colors[1]}} className="material-icons ">event_seat</i></Grid.Column>
   <Grid.Column key ={"j"} centered= {"true"}  width ={1}> <i style ={{color:this.state.colors[0]}} className="material-icons ">event_seat</i></Grid.Column>

    </Grid.Row>)

    this.state.seatArray.push(  <Grid.Row key ={"E"+3}  only='mobile'>

    <Grid.Column key ={"space"} style={{color:'#000'}} width={1}> {22}</Grid.Column>

  <Grid.Column  key ={"a"} centered = {"true"} width ={1}>  <i style ={{color:this.state.colors[0]}} className="material-icons">event_seat</i></Grid.Column>
<Grid.Column  key ={"b"} centered = {"true"} width ={1}>  <i style ={{color:this.state.colors[3]}} className="material-icons">event_seat</i></Grid.Column>
    <Grid.Column  key ={"i"} centered = {"true"} width ={1}>  <i style ={{color:this.state.colors[1]}} className="material-icons">event_seat</i></Grid.Column>
  <Grid.Column key ={"e"} width={1}></Grid.Column>

<Grid.Column key ={"c"} centered = {"true"} width ={1}>   <i   className="material-icons ">event_seat</i></Grid.Column>

    <Grid.Column key ={"l"} centered = {"true"} width ={1}>    <i style ={{color:this.state.colors[0]}} className="material-icons ">event_seat</i></Grid.Column>
  <Grid.Column key ={"k"} centered = {"true"} width ={1}>    <i style ={{color:this.state.colors[1]}} className="material-icons ">event_seat</i></Grid.Column>
<Grid.Column key ={"f"} centered = {"true"} width ={1}>    <i style ={{color:this.state.colors[4]}} className="material-icons ">event_seat</i></Grid.Column>
  <Grid.Column key ={"m"} width={1}></Grid.Column>
<Grid.Column key ={"g"} centered= {"true"}  width ={1}>    <i style ={{color:this.state.colors[0]}} className="material-icons">event_seat</i></Grid.Column>
    <Grid.Column key ={"h"} centered= {"true"}  width ={1}> <i style ={{color:this.state.colors[1]}} className="material-icons ">event_seat</i></Grid.Column>
  <Grid.Column key ={"j"} centered= {"true"}  width ={1}> <i style ={{color:this.state.colors[4]}} className="material-icons ">event_seat</i></Grid.Column>

    </Grid.Row>);

    this.state.seatArray.push( <Grid.Row key ={"E"+4}  only='mobile'>

    <Grid.Column key ={"space"} style={{color:'#000'}} width={1}> {23}</Grid.Column>

  <Grid.Column  key ={"a"} centered = {"true"} width ={1}>  <i style ={{color:this.state.colors[0]}} className="material-icons">event_seat</i></Grid.Column>
<Grid.Column  key ={"b"} centered = {"true"} width ={1}>  <i style ={{color:this.state.colors[0]}} className="material-icons">event_seat</i></Grid.Column>
    <Grid.Column  key ={"i"} centered = {"true"} width ={1}>  <i style ={{color:this.state.colors[1]}} className="material-icons">event_seat</i></Grid.Column>
  <Grid.Column key ={"e"} width={1}></Grid.Column>

<Grid.Column key ={"c"} centered = {"true"} width ={1}>   <i  style ={{color:this.state.colors[1]}}  className="material-icons ">event_seat</i></Grid.Column>

  <Grid.Column key ={"l"} centered = {"true"} width ={1}>    <i onClick={this.handleClick.bind(this)} style ={{color:this.state.colors[2],borderStyle:'solid', borderWidth: '1px'}} className="material-icons ">event_seat</i></Grid.Column>
<Grid.Column key ={"k"} centered = {"true"} width ={1}>    <i style ={{color:this.state.colors[0]}} className="material-icons ">event_seat</i></Grid.Column>
    <Grid.Column key ={"f"} centered = {"true"} width ={1}>    <i style ={{color:this.state.colors[4]}} className="material-icons ">event_seat</i></Grid.Column>
  <Grid.Column key ={"m"} width={1}></Grid.Column>
<Grid.Column key ={"g"} centered= {"true"}  width ={1}>    <i style ={{color:this.state.colors[0]}} className="material-icons">event_seat</i></Grid.Column>
    <Grid.Column key ={"h"} centered= {"true"}  width ={1}> <i style ={{color:this.state.colors[0]}} className="material-icons ">event_seat</i></Grid.Column>
  <Grid.Column key ={"j"} centered= {"true"}  width ={1}> <i style ={{color:this.state.colors[4]}} className="material-icons ">event_seat</i></Grid.Column>

    </Grid.Row>);
    this.state.seatArray.push(<Grid.Row key ={"E"+5}  only='mobile'>

    <Grid.Column key ={"space"} style={{color:'#000'}} width={1}> {24}</Grid.Column>

  <Grid.Column  key ={"a"} centered = {"true"} width ={1}>  <i style ={{color:this.state.colors[0]}} className="material-icons">event_seat</i></Grid.Column>
<Grid.Column  key ={"b"} centered = {"true"} width ={1}>  <i style ={{color:this.state.colors[0]}} className="material-icons">event_seat</i></Grid.Column>
    <Grid.Column  key ={"i"} centered = {"true"} width ={1}>  <i style ={{color:this.state.colors[1]}} className="material-icons">event_seat</i></Grid.Column>
  <Grid.Column key ={"e"} width={1}></Grid.Column>

<Grid.Column key ={"c"} centered = {"true"} width ={1}>   <i  style ={{color:this.state.colors[1]}}  className="material-icons ">event_seat</i></Grid.Column>

    <Grid.Column key ={"l"} centered = {"true"} width ={1}>    <i style ={{color:this.state.colors[0]}} className="material-icons ">event_seat</i></Grid.Column>
  <Grid.Column key ={"k"} centered = {"true"} width ={1}>    <i style ={{color:this.state.colors[4]}} className="material-icons ">event_seat</i></Grid.Column>
<Grid.Column key ={"f"} centered = {"true"} width ={1}>    <i style ={{color:this.state.colors[0]}} className="material-icons ">event_seat</i></Grid.Column>
  <Grid.Column key ={"m"} width={1}></Grid.Column>
<Grid.Column key ={"g"} centered= {"true"}  width ={1}>    <i style ={{color:this.state.colors[0]}} className="material-icons">event_seat</i></Grid.Column>
    <Grid.Column key ={"h"} centered= {"true"}  width ={1}> <i style ={{color:this.state.colors[0]}} className="material-icons ">event_seat</i></Grid.Column>
  <Grid.Column key ={"j"} centered= {"true"}  width ={1}> <i style ={{color:this.state.colors[3]}} className="material-icons ">event_seat</i></Grid.Column>
    </Grid.Row>);

    this.state.seatArray.push(  <Grid.Row key ={"E"+6}  only='mobile'>

    <Grid.Column key ={"space"} style={{color:'#000'}} width={1}> {25}</Grid.Column>

  <Grid.Column  key ={"a"} centered = {"true"} width ={1}>  <i style ={{color:this.state.colors[4]}} className="material-icons">event_seat</i></Grid.Column>
<Grid.Column  key ={"b"} centered = {"true"} width ={1}>  <i style ={{color:this.state.colors[0]}} className="material-icons">event_seat</i></Grid.Column>
    <Grid.Column  key ={"i"} centered = {"true"} width ={1}>  <i style ={{color:this.state.colors[1]}} className="material-icons">event_seat</i></Grid.Column>
  <Grid.Column key ={"e"} width={1}></Grid.Column>

<Grid.Column key ={"c"} centered = {"true"} width ={1}>   <i  style ={{color:this.state.colors[0]}}  className="material-icons ">event_seat</i></Grid.Column>

    <Grid.Column key ={"l"} centered = {"true"} width ={1}>    <i style ={{color:this.state.colors[0]}} className="material-icons ">event_seat</i></Grid.Column>
  <Grid.Column key ={"k"} centered = {"true"} width ={1}>    <i style ={{color:this.state.colors[4]}} className="material-icons ">event_seat</i></Grid.Column>
<Grid.Column key ={"f"} centered = {"true"} width ={1}>    <i style ={{color:this.state.colors[4]}} className="material-icons ">event_seat</i></Grid.Column>
  <Grid.Column key ={"m"} width={1}></Grid.Column>
<Grid.Column key ={"g"} centered= {"true"}  width ={1}>    <i style ={{color:this.state.colors[0]}} className="material-icons">event_seat</i></Grid.Column>
    <Grid.Column key ={"h"} centered= {"true"}  width ={1}> <i style ={{color:this.state.colors[0]}} className="material-icons ">event_seat</i></Grid.Column>
  <Grid.Column key ={"j"} centered= {"true"}  width ={1}> <i style ={{color:"#8c3682"}} className="material-icons ">event_seat</i></Grid.Column>

    </Grid.Row>);

    this.setState({colum1:this.state.seatArray},function(){
      console.log(this.state.seatArray);
    })
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
        <div className = "sidebar">
         <Sidebar.Pushable as={Segment} >
           <Sidebar as={Menu} animation='push'  width='thin' visible={this.state.sidebarVisiblity} icon='labeled' vertical >
             <SidebarMenu />
           </Sidebar>
           <Sidebar.Pusher>
             <Segment basic style={{
                  padding:"14px 0px",background:"url('./../../images/blur.jpg')",backgroundSize: 'cover'}}>
                  <AppbarCrew toggleIcon={this.state.toggleIcon} handleSiderbarVisiblity={this.handleSiderbarVisiblity.bind(this)}/>
                    <div>
                    <Header as='h3' block inverted style ={{margin:'5px',borderWidth:'0px',backgroundColor:'rgba(72, 68, 67, 0.6)'}} >
                      <Menu.Item as={Link} to='/MainLandingPage'>
                        <Icon name='reply' style={{float:'left',color:'#FFF'}}  />
                      </Menu.Item>
                    <center>
                     Meal Preference
                     </center>
                    </Header>
                    <Segment secondary  style={{margin:'10px',backgroundColor:'rgba(255, 255, 255, 0.5)'}}>
                      <Doughnut data={data} legend={legendOpts}/>
                  </Segment>
                  <Header as='h3' block  inverted style ={{margin:'5px',borderWidth:'0px',backgroundColor:'rgba(72, 68, 67, 0.6)'}} >
                   <Grid>
                     <Grid.Row>
                        <Grid.Column>
                          <center>
                          Meal Preference Seating Layout
                        </center>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{marginTop:'-23px'}}>
                      <Grid.Column>
                        <center>
                          <Label as='a' style = {{color:"#800000",fontSize:"12px", fontWeight: "bold"}}>
                          Snacks
                            <Label.Detail>60</Label.Detail>
                          </Label>
                          <Label as='a'  style = {{color:"#800000",fontSize:"12px", fontWeight: "bold"}}>
                            Meals
                            <Label.Detail>60</Label.Detail>
                          </Label>
                          <Label as='a'  style = {{color:"#800000",fontSize:"12px", fontWeight: "bold"}}>
                            Dinner
                            <Label.Detail>60</Label.Detail>
                          </Label>
                        </center>
                    </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Header>
                    <div><Segment  style={{margin:'0px',borderRadius:'0px',backgroundColor:'rgba(255, 255, 255, 0.5)',fontSize:'12px'}}>

                      <ModalDesign method={this.handleClick1.bind(this)} flag={this.state.flag}/>

                    <Grid>
                    <Grid.Row style={{marginLeft:'6px',color:'#000'}}>
                      <Grid.Column width={1}></Grid.Column>
                      <Grid.Column width={1}>A</Grid.Column>
                      <Grid.Column width={1}>B</Grid.Column>
                      <Grid.Column width = {1}>C</Grid.Column>
                      <Grid.Column width={1}></Grid.Column><Grid.Column width={1}>D</Grid.Column><Grid.Column width={1}>E</Grid.Column>
                  <Grid.Column width={1}>F</Grid.Column><Grid.Column width={1}>G</Grid.Column><Grid.Column width={1}></Grid.Column><Grid.Column width={1}>H</Grid.Column><Grid.Column width={1}>I</Grid.Column><Grid.Column width={1}>J</Grid.Column></Grid.Row>
                    {this.state.colum1}

                    </Grid>
                    </Segment>
                    </div>
                    </div>
              </Segment>
           </Sidebar.Pusher>
         </Sidebar.Pushable>
        </div>


      </div>
    )
  }
}
