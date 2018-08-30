import React, { Component } from 'react'
import { Button, Dimmer, Header, Icon, Image, Segment, Card,Grid,Label,Divider} from 'semantic-ui-react'
// import SwipeableViews from 'react-swipeable-views';

export default class DimmerExampleDimmer extends Component {
constructor(){
    super()
    // this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
}
  // handleShow() {
  //   this.setState({ active: true })
  // }
  //
  handleHide()
  {
    // this.setState({ active: false })
    // this.setState({
    //   slideIndex : 0,
    //   confirmation: !this.state.confirmation
    // })
    this.props.method();
  }
  // handleChange(){
  //   var i = this.state.slideIndex + 1;
  //   this.setState({
  //     slideIndex: i
  //   });
  // };

// componentWillMount (){
//
//   var day = new Date ();
//
//
//  this.state.date = day.getDate() + "  " + this.state.month[day.getMonth()] + "  "+ this.state.dayArray[day.getDay()];
//
//
// }
  render() {
    // const { active } = this.state

    return (
      <div>

          <Dimmer active={this.props.flag} onClickOutside={this.handleHide}>
          <Grid >
            <Grid.Row >
            <Grid.Column width={2}>
            </Grid.Column>
            <Grid.Column width={12} >
              <Card style={{textAlign:'center'}}>
              <Label  floating><Icon  color = 'red' name = "info" size='large'/></Label>
                <Card.Content style ={{textColor :"#800000", backgroundColor :"lightgrey"}}>
                  <Grid>
                    <Grid.Row>
                      <Grid.Column centered = {'true'}>
                        {/* <img className="ui avatar image" style={{'fontSize':42}} src="./../../images/christopher.jpg" /> */}
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column centered = {'true'} style={{color:'#800000'}}>{this.props.name}</Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column centered = {'true'} style={{color:'#800000'}}>Seat No: {this.props.seat}, Passenger has a short connection for next flight. </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column centered = {'true'} style={{color:'#800000'}}>Accommodate to front rows if seats are available.</Grid.Column>
                    </Grid.Row>
                    {/* <Grid.Row>
                      <Grid.Column centered = {'true'} style={{color:'#800000'}}>
                        <SwipeableViews
                          index={this.state.slideIndex}>
                          <div>
                            <Segment>
                              <Grid.Row>
                                <Grid.Column>
                                  Wish him with a box of chocolates
                                </Grid.Column>
                                <Divider hidden />
                                <Grid.Column>
                                  <Button.Group>
                                    <Button negative onClick={this.handleHide.bind(this)}>Declined</Button>
                                    <Button.Or />
                                  <Button positive onClick={this.handleHide.bind(this)}>Accepted</Button>
                                  </Button.Group>
                                </Grid.Column>
                              </Grid.Row>
                            </Segment>
                          </div>
                        </SwipeableViews>
                      </Grid.Column>
                    </Grid.Row> */}

                  </Grid>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={2}>
            </Grid.Column>
            </Grid.Row>
          </Grid>
          </Dimmer>


      </div>
    )
  }
}
