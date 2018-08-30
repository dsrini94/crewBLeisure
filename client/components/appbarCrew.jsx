import React from 'react';
import {Menu,Icon,Dropdown,Label,Grid,Header} from 'semantic-ui-react';
import CrewChatBox from '../components/crewchatbox.jsx';
import {HashRouter, Route, Link} from 'react-router-dom';

const trigger = (
  <Menu.Item as='a' >
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Grid.Row>
            <center>
            <span style={{paddingRight:'5px',float:'right'}}>Catherine</span>
            </center>
          </Grid.Row>
          <Grid.Row>
            <span style={{paddingRight:'5px',fontSize:'10px', float:'right'}}> E - Stewardess</span>

          </Grid.Row>

        </Grid.Column>
      </Grid.Row>
    </Grid>
    <img className="ui avatar image" src="./../../images/avatar.jpg" />
    <span style={{padding:'7px'}}><CrewChatBox/></span>
  </Menu.Item>
)

const options = [
  { key: 'user', text: 'My Profile', icon: 'user' },
  { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
]

export default class AppbarCrew extends React.Component
{
  constructor(props)
  {
     super(props);
     this.state= {
       sidebarVisiblity: false,
       toggleIcon: 'content'
     }
  }
  handleParentToggle()
  {
    this.props.handleSiderbarVisiblity();
  }
  render()
  {
    return(
      <Menu secondary className='appbar' inverted>
        <Menu.Item name='submit'>
          <Icon name={this.props.toggleIcon} inverted style={{
            marginLeft: '0px'
          }} onClick={this.handleParentToggle.bind(this)}/>
        <Header as={Link} to='/MainLandingPage' style={{padding:'0px',margin:'0px',border:'none',fontWeight:'normal'}}><span className='companyName'>BLeisure</span></Header>
        </Menu.Item>
        <Menu.Menu position='right' style={{paddingRight:'10px'}}>
          <Dropdown  trigger={trigger} options={options} pointing='top right' icon={null}/>
        </Menu.Menu>
      </Menu>
    );
  }
}
