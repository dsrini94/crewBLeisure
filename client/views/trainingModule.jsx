import React, {Component} from 'react';
import { Accordion, Icon,Segment,Menu,Sidebar,Header,Input,Button,Modal,Image,Form,TextArea,Grid,Embed} from 'semantic-ui-react';

import SidebarMenu from '../components/sidebarMenu.jsx';
import AppbarCrew from '../components/appbarCrew.jsx';

export default class TrainingModule extends Component
{
  constructor() {
    super();
    this.state = {
      sidebarVisiblity: false,
      toggleIcon: 'content',
      confirmation: false,
      photo: false,
      modalOpen:false,
      vidId:'',
      source:'youtube',
      imageSrc:''
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

  render()
  {
    return(
      <div style={{overflow:'hidden'}}>
        <div >
         <Sidebar.Pushable as={Segment}>
           <Sidebar as={Menu} animation='push'  width='thin' visible={this.state.sidebarVisiblity} icon='labeled' vertical >
             <SidebarMenu />
           </Sidebar>
           <Sidebar.Pusher>
             <Segment className='main' basic style={{padding:"14px 0px",background:"url('./../../images/app1.jpg')",backgroundSize: 'cover',backgroundAttachment:'fixed',overflowX:'hidden'}}>
                <AppbarCrew toggleIcon={this.state.toggleIcon} handleSiderbarVisiblity={this.handleSiderbarVisiblity.bind(this)}/>

                <Header as='h3' block inverted style ={{borderWidth:'0px',backgroundColor:'black',margin:'5px',backgroundColor:'rgba(0, 0, 0, 0.4)'}} >
                  <center><span >Training Modules</span></center>
                </Header>

                <Grid padded >
                  <Grid.Row columns={2} style={{marginTop:'-30px'}}>
                    <Grid.Column style={{marginTop:'20px'}}>

                        <Image src='./../../images/passenger.jpg' style={{height:100,width:200}} onClick={()=>this.setState({modalOpen:true,vidId:'eCVZjLbhOck',imageSrc:'./../../images/passenger.jpg'})}/>

                        <div style={{marginTop:10}}>
                        <Button onClick={()=>this.setState({modalOpen:true,vidId:'Yj2zxtOaQZ4',imageSrc:'./../../images/meal.jpg'})} icon='play' style={{float:'left',backgroundColor:'black',backgroundColor:'rgba(0, 0, 0, 0.4)',color:'white'}}/>
                          <center style={{marginTop:2,justifyContent:'center'}}><span style={{fontSize:14,fontWeight:'bold',color:'white'}}>Managing Passenger Interactions</span></center>
                        </div>
                    </Grid.Column>

                    <Grid.Column style={{marginTop:'20px'}}>

                      <Image src='./../../images/safety.jpg' style={{height:100,width:200}} onClick={()=>this.setState({modalOpen:true,vidId:'5OpvT0Q3BYA',imageSrc:'./../../images/safety.jpg'})}/>

                      <div style={{marginTop:10}}>
                      <Button icon='play' style={{float:'left',backgroundColor:'black',backgroundColor:'rgba(0, 0, 0, 0.4)',color:'white'}} onClick={()=>this.setState({modalOpen:true,vidId:'5OpvT0Q3BYA',imageSrc:'./../../images/safety.jpg'})}/>
                        <center style={{marginTop:2,justifyContent:'center'}}><span style={{fontSize:14,fontWeight:'bold',color:'white'}}>Flight Safety Refresher Course</span></center>
                      </div>

                    </Grid.Column>

                    <Grid.Column style={{marginTop:'20px'}}>
                      <Image src='./../../images/emergency.jpeg' style={{height:100,width:200}} onClick={()=>this.setState({modalOpen:true,vidId:'kxPjj20pQ4Y',source:'youtube',imageSrc:'./../../images/emergency.jpeg'})}/>

                      <div style={{marginTop:10}}>
                      <Button icon='play' style={{float:'left',backgroundColor:'black',backgroundColor:'rgba(0, 0, 0, 0.4)',color:'white'}} onClick={()=>this.setState({modalOpen:true,vidId:'kxPjj20pQ4Y',source:'youtube',imageSrc:'./../../images/emergency.jpeg'})}/>
                        <center style={{marginTop:2,justifyContent:'center'}}><span style={{fontSize:14,fontWeight:'bold',color:'white'}}>Emergency & Safety Procedures</span></center>
                      </div>

                    </Grid.Column>

                    <Grid.Column style={{marginTop:'20px'}}>
                      <Image src='./../../images/seat.jpeg' style={{height:100,width:200}} />

                      <div style={{marginTop:10}}>
                      <Button icon='file word outline' style={{float:'left',backgroundColor:'black',backgroundColor:'rgba(0, 0, 0, 0.4)',color:'white'}}/>
                        <center style={{marginTop:2,justifyContent:'center'}}><span style={{fontSize:14,fontWeight:'bold',color:'white'}}>Seat Layout Refresher Course</span></center>
                      </div>

                    </Grid.Column>

                    <Grid.Column style={{marginTop:'20px'}}>
                      <Image src='./../../images/a350.jpeg' style={{height:100,width:200}} />

                      <div style={{marginTop:10}}>
                      <Button icon='file word outline' style={{float:'left',backgroundColor:'black',backgroundColor:'rgba(0, 0, 0, 0.4)',color:'white'}} />
                        <center style={{marginTop:2,justifyContent:'center'}}><span style={{fontSize:14,fontWeight:'bold',color:'white'}}>A350 Layout Course</span></center>
                      </div>


                    </Grid.Column>

                    <Grid.Column style={{marginTop:'20px'}}>
                      <Image src='./../../images/quality.jpeg' style={{height:100,width:200}} onClick={()=>this.setState({modalOpen:true,vidId:'gbTZSHwpS2g',imageSrc:'./../../images/quality.jpeg'})}/>

                      <div style={{marginTop:10}}>
                      <Button icon='file word outline' style={{float:'left',backgroundColor:'black',backgroundColor:'rgba(0, 0, 0, 0.4)',color:'white'}} />
                        <center style={{marginTop:2,justifyContent:'center'}}><span style={{fontSize:14,fontWeight:'bold',color:'white'}}>Quality and Audit Training Courses</span></center>
                      </div>

                    </Grid.Column>
                  </Grid.Row>
                </Grid>

                <Modal open={this.state.modalOpen} basic size='small'>
                   <Modal.Content>
                     <Embed
                          autoplay={true}
                          id={this.state.vidId}
                          placeholder={this.state.imageSrc}
                          source={this.state.source}
                        />
                   </Modal.Content>
                   <Modal.Actions>
                     <Button basic color='red' inverted onClick={()=>this.setState({modalOpen:false})}>
                       <Icon name='remove' /> Close
                     </Button>
                   </Modal.Actions>
                 </Modal>

            </Segment>
           </Sidebar.Pusher>
         </Sidebar.Pushable>
        </div>
      </div>
    );
  }
}
