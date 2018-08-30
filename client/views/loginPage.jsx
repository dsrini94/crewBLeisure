import React from 'react'
import {Input,Grid,Button,Icon,Segment,Header,Checkbox,Form} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';

export default class NewLogin extends React.Component
{
  render()
  {
    return(
      <div className="imgHeight vhsidebar" style={{overflow:'hidden',backgroundImage:"url(./../../images/blur.jpg)"}}>
      <div >
        <Grid >
          <Grid.Row only='mobile'>
            <Grid.Column width={2}></Grid.Column>
            <Grid.Column width={12}>
              <center >
                <br/>
                <br/>
                <br/>
                <br/>
                <span className="LoginPageCompanyName">BLeisure</span>
                <br/>
                <br/>
                <Header as='h3' className="UserLogin" inverted style={{
                    marginTop:"30%"
                  }}>User Login</Header>
                <br/>
                <Input fluid  icon='user' iconPosition='left'  placeholder='User Id' style={{opacity:"0.6"}}/>
                <br/>
                <Input fluid type='password' icon='lock' iconPosition='left' placeholder='Password' style={{opacity:"0.6"}}/>
                <br/>
                {/* <br/> */}
                </center>
                {/* <Form> */}
                  <Form.Field style={{opacity:"0.6"}}>
                    <Checkbox style={{display:"inline"}}/>
                    <label style={{display:"block",color:"white",marginTop:"0px",marginLeft:'25px'}}>Remember Me</label>
                  </Form.Field>
                {/* </Form> */}
                <center>
                <br/>
                <br/>
              <Link to='/MainLandingPage'><Button inverted circular icon='arrow right'/></Link>
                <br/>
                <br/>
              </center>
            </Grid.Column>
            <Grid.Column width={2}></Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      </div>
    )
  }
}
