import React from 'react';
import { Accordion, Icon,Segment,Menu,Sidebar,Header,Input,Button,Modal,Image,Form,TextArea,Grid} from 'semantic-ui-react';
import AppbarCrew from '../components/appbarCrew.jsx';
import SidebarMenu from '../components/sidebarMenu.jsx';
import {HashRouter, Route, Link} from 'react-router-dom';

export default class ComplaintRegister extends React.Component {
  constructor() {
    super();
    this.state = {
      sidebarVisiblity: false,
      toggleIcon: 'content',
      confirmation: false,
      photo: false
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
 handlePhoto(){
   this.setState({
     photo: !this.state.photo
   })
 }
 handleHide()
 {
   this.setState({
     confirmation: !this.state.confirmation
   })
 }
  render(){
    return(
      <div style={{overflow:'hidden'}}>
        <div className = "sidebar">
         <Sidebar.Pushable as={Segment}>
           <Sidebar as={Menu} animation='push'  width='thin' visible={this.state.sidebarVisiblity} icon='labeled' vertical >
             <SidebarMenu />
           </Sidebar>
           <Sidebar.Pusher>
             <Segment className='main' basic style={{
                padding:"14px 0px",background:"url('./../../images/app1.jpg')",backgroundSize: 'cover'}}>
                  <AppbarCrew toggleIcon={this.state.toggleIcon} handleSiderbarVisiblity={this.handleSiderbarVisiblity.bind(this)}/>
                  <Header as='h3' block inverted style ={{margin:'5px',borderWidth:'0px',backgroundColor:'black',opacity:'0.5'}} >
                    <Menu.Item as={Link} to='/MainLandingPage'>
                      <Icon name='reply' style={{float:'left',color:'#FFF'}}  />
                    </Menu.Item>
                  <center>
                    <span style ={{marginLeft:'-20px'}}>
                      Issues
                   </span>
                   </center>
                  </Header>
                  <Segment secondary  style={{margin:'10px',backgroundColor:'rgba(0, 0, 0, 0.5)'}}>
                  <Input  fluid
                    placeholder='Issue'
                    style={{width:'90%',margin:'20px'}}/>
                    <Form style={{width:'90%',margin:'20px'}}>
                      <Grid>
                        <Grid.Row>
                          <Grid.Column width={13}>
                      <TextArea fluid  placeholder='Description'/>
                      </Grid.Column>
                      <Grid.Column width={2}>
                      <Icon name="camera" color='blue' size='big' style={{marginTop:'20px'}} onClick={this.handlePhoto.bind(this)} />
                      </Grid.Column>
                      <Grid.Column width={1}/>
                      </Grid.Row>
                      </Grid>
                    </Form>
                      <Input  fluid
                        placeholder='Seat No.'
                        style={{width:'40%',margin:'20px'}}/>
                  <center>
                  <Button primary  style={{backgroundColor:'red',width:'90%',margin:'20px',marginTop:'0px'}} onClick={this.handleHide.bind(this)}>Submit</Button>
                  </center>
                </Segment>
                  <Modal open={this.state.confirmation}  size='small'>
                    <Header content='Thank you'/>
                    <Modal.Content>
                      <p> Issue is registered and sent to the ground crew.</p>
                    </Modal.Content>
                    <Modal.Actions>
                      <center>
                      <Button color='green' fluid inverted="inverted" style={{marginBottom:'10px'}} onClick={()=>{this.setState({confirmation:!this.state.confirmation})}}  as={Link} to='./MainLandingPage'>
                        <Icon name='checkmark'/>
                        Close window
                      </Button>
                      </center>
                    </Modal.Actions>
                  </Modal>
                  <Modal open={this.state.photo}  size='small'>
                    <Modal.Content>
                      <Image src='./../../images/chair.jpg' size='medium' centered />
                    </Modal.Content>
                    <Modal.Actions>
                      <center>
                      <Button color='green' fluid inverted="inverted" style={{marginBottom:'10px'}} onClick={this.handlePhoto.bind(this)}>
                        <Icon name='checkmark'/>
                        Close window
                      </Button>
                      </center>
                    </Modal.Actions>
                  </Modal>
                </Segment>
           </Sidebar.Pusher>
         </Sidebar.Pushable>
        </div>
      </div>
    )
  }
}
