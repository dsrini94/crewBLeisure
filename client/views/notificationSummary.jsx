import React from 'react';
import { Accordion, Icon,Segment,Menu,Popup , Button ,Sidebar,Header} from 'semantic-ui-react';
import AppbarCrew from '../components/appbarCrew.jsx';
import SidebarMenu from '../components/sidebarMenu.jsx';
import {HashRouter, Route, Link} from 'react-router-dom';

export default class NotificationSummary extends React.Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 15,
      sidebarVisiblity: false,
      toggleIcon: 'content'
    }
  }
  handleClick(e, titleProps) {
   const { index } = titleProps
   const { activeIndex } = this.state
   const newIndex = activeIndex === index ? -1 : index
   this.setState({ activeIndex: newIndex })
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
  render(){
    return(
      <div style={{overflow:'hidden'}}>
        <div className = "sidebar" >
         <Sidebar.Pushable as={Segment}>
           <Sidebar as={Menu} animation='push'  width='thin' visible={this.state.sidebarVisiblity} icon='labeled' vertical >
             <SidebarMenu />
           </Sidebar>
           <Sidebar.Pusher>
             <Segment basic className= "main" style={{
                padding:"14px 0px",background:"url('./../../images/blur.jpg')",backgroundSize: 'cover'}}>
                  <AppbarCrew toggleIcon={this.state.toggleIcon} handleSiderbarVisiblity={this.handleSiderbarVisiblity.bind(this)}/>
                <Header as='h3' block inverted style ={{margin:'5px',borderWidth:'0px',backgroundColor:'rgba(72, 68, 67, 0.6)'}} >
                    <Menu.Item as={Link} to='/MainLandingPage'>
                      <Icon name='reply' style={{float:'left',color:'#FFF'}}  />
                    </Menu.Item>
                  <center>
                   Notification   Summary
                   </center>
                  </Header>

                  <Segment style={{margin:'10px',borderWidth:'0px',backgroundColor:'rgba(0, 0, 0, 0)'}}>
                  <Accordion styled exclusive={false} >
                    <Accordion.Title active={this.state.activeIndex === 0} index={0} onClick={this.handleClick.bind(this)}>
                      <Icon color='teal' name='dropdown' />
                    Customer Delight
                    </Accordion.Title>
                  <Accordion.Content active={this.state.activeIndex === 0}>
                    <Segment><Popup basic trigger ={<Button  fluid content ="Seat No 3F & 3G : Newly wed."></Button>}
                  content = {<div style={{width:'40vh'}}>
                    <span> Action : </span> <br/>
                  <Segment><span>1. Offer a couple spa discount coupon with Oxygen. </span></Segment>  <br/>
                <Segment style={{marginTop:'-20px'}}><span>2. Wish them with a box of cookies. </span></Segment>
                    </div>
                }
                postion = 'top center'/></Segment>
              <Segment><Popup basic trigger ={<Button  fluid content ="Seat No 22D : Birthday"></Button>}
              content = {<div style={{width:'40vh'}}>
                <span> Action : </span> <br/>
              <Segment><span>1. Wish him with a box of chocolates.</span></Segment>
                </div>
            }
            postion = 'top center'/></Segment>
                  </Accordion.Content>

                  <Accordion.Title active={this.state.activeIndex === 1} index={1} onClick={this.handleClick.bind(this)}>
                    <Icon color='teal' name='dropdown' />
                  Service Recovery
                </Accordion.Title>
                <Accordion.Content active={this.state.activeIndex === 1}>
                  <Segment><Popup basic trigger ={<Button  fluid content ="Seat No 21C : Coffee spill"></Button>}
                content = {<div style={{width:'40vh'}}>
                  <span> Action : </span> <br/>
                <Segment ><span>1. Apologize with a box of chocolates.</span></Segment><br/>
              <Segment style={{marginTop:'-20px'}}><span>2. $25 discount with Hershey's.</span></Segment>
                  </div>

            }
              postion = 'top center'/></Segment>
            <Segment><Popup basic trigger ={<Button  fluid content ="Seat No 2F : Unhappy passenger"></Button>}
            content = {<div style={{width:'40vh'}}>
              <center>
              <span> Seat malfunctioned in last leg/journey.</span> <br/>
              </center>
              <span> Action : </span> <br/>
              <Segment><span>1. Offer an upgrade to better seat if available.</span></Segment>
              </div>
          }
          postion = 'top center'/></Segment>
                </Accordion.Content>
                <Accordion.Title active={this.state.activeIndex === 2} index={2} onClick={this.handleClick.bind(this)}>
                  <Icon color='teal' name='dropdown' />
                Cross Sell
              </Accordion.Title>
              <Accordion.Content active={this.state.activeIndex === 2}>
                <Segment><Popup basic trigger ={<Button  fluid content ="Seat No 26K : Special day."></Button>}
              content = {<div style={{width:'40vh'}}>
                <center>
                  <span> His wife's birthday falls tomorrow.</span> <br/>
                </center>
                <span> Action : </span> <br/>
              <Segment><span>1. Suggest him to gift her Gucci perfume.</span></Segment>
                </div>
            }
            postion = 'top center'/></Segment>
          <Segment><Popup basic trigger ={<Button  fluid content ="Seat No 24H : He is a big fan of souvenirs."></Button>}
          content = {<div style={{width:'40vh'}}>
            <span> Action : </span> <br/>
          <Segment><span>1. Show him the catalog.</span></Segment>
            </div>
        }
        postion = 'top center'/></Segment>
              </Accordion.Content>
              <Accordion.Title active={this.state.activeIndex === 3} index={3} onClick={this.handleClick.bind(this)}>
                <Icon color='teal' name='dropdown' />
              Up Sell
            </Accordion.Title>
            <Accordion.Content active={this.state.activeIndex === 3}>
              <Segment><Popup basic trigger ={<Button  fluid content ="Seat No 22B : Became a gold member after his recent trip"></Button>}
            content = {<div style={{width:'40vh'}}>
              <span> Action : </span> <br/>
            <Segment><span>1. Offer him seat upgrade if available.</span></Segment>
              </div>
        }
          postion = 'top center'/></Segment>
        <Segment><Popup basic trigger ={<Button  fluid content ="Seat No 23C : He is 500 points away from his gold tier."></Button>}
        content = {<div style={{width:'40vh'}}>
          <span> Action : </span> <br/>
        <Segment><span>1. Offer him a lounge access gift coupon.</span></Segment>
          </div>
      }
      postion = 'top center'/></Segment>
            </Accordion.Content>
            <Accordion.Title active={this.state.activeIndex === 4} index={4} onClick={this.handleClick.bind(this)}>
              <Icon color='teal' name='dropdown' />
            Short Connection
          </Accordion.Title>
          <Accordion.Content active={this.state.activeIndex === 4}>
            <Segment><Popup basic trigger ={<Button  fluid content ="Seat No 25A : Short Connection for next flight."></Button>}
          content = {<div style={{width:'40vh'}}>
            <span> Action : </span> <br/>
          <Segment><span>Accommodate to front rows if seats are available.</span></Segment>
            </div>
        }
        postion = 'top center'/></Segment>
        <Segment><Popup basic trigger ={<Button  fluid content ="Seat No 25F : Short Connection for next flight."></Button>}
      content = {<div style={{width:'40vh'}}>
        <span> Action : </span> <br/>
      <Segment><span>Accommodate to front rows if seats are available.</span></Segment>
        </div>
    }
    postion = 'top center'/></Segment>
          </Accordion.Content>
              </Accordion>
              </Segment>
            </Segment>
           </Sidebar.Pusher>
         </Sidebar.Pushable>
        </div>


      </div>
    )
  }
}
