import React, { Component } from 'react';
import { Button, Dimmer, Header, Icon, Image, Segment, Card,Grid,Label, Divider, Modal} from 'semantic-ui-react';
import SwipeableViews from 'react-swipeable-views';

export default class DimmerExampleDimmer extends Component {
constructor(){
  super()
    this.state ={
      // active:true
      slideIndex : 0,
      confirmation: false
    }
    // this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
}
  // handleShow() {
  //   this.setState({ active: true })
  // }
  handleHide()
  {
    // this.setState({ active: false })
    this.setState({
      slideIndex : 0,
      confirmation: !this.state.confirmation
    })
    this.props.method();
  }
  handleClose()
  {
    // this.setState({ active: false })
    this.props.method();
  }
  handleChange(){
    var i = this.state.slideIndex + 1;
    this.setState({
      slideIndex: i
    });
  };


  render() {
    // const { active } = this.state

    return (
      <div>

          <Dimmer active={this.props.flag} onClickOutside={this.handleClose.bind(this)}>
          <Grid >
            <Grid.Row >
            <Grid.Column width={2}>
            </Grid.Column>
            <Grid.Column width={12} >
              <Card style={{textAlign:'center'}}>
              <Label  floating><Icon color = 'red' name = "info" size='small'/></Label>
                <Card.Content style ={{textColor :"#800000", backgroundColor :"lightgrey"}}>
                  <Grid>
                    <Grid.Row>
                      <Grid.Column centered = {'true'} width={0}>
                        {/* <Image src="./../../images/lady.jpeg" size='tiny' circular /> */}
                        {/* <img className="ui md avatar image" style={{'fontSize':42}} src="./../../images/christopher.jpg" /> */}
                      </Grid.Column>
                      <Grid.Column width={16} style={{color:'#800000'}}>Monica Geller</Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column style={{color:'#800000'}}>Seat No: 21C</Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column style={{color:'#800000'}}>Issue : She had a coffee spill in the previous leg</Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column centered = {'true'} style={{color:'#800000'}}>
                        {/* <SwipeableViews
                          index={this.state.slideIndex}> */}
                          <div>
                            <Segment>
                              <Grid.Row>
                                <Grid.Column>
                                  Apologize with a box of chocolates.
                                </Grid.Column>
                                <Grid.Column style={{marginTop:'10px'}}>
                                  <Button.Group>
                                    <Button negative onClick={this.handleClose.bind(this)}>Declined</Button>
                                    <Button.Or />
                                    <Button positive onClick={this.handleHide.bind(this)}>Accepted</Button>
                                  </Button.Group>
                                </Grid.Column>
                              </Grid.Row>
                            </Segment>
                          </div>
                          <div>
                            <Segment style={{marginTop:'5px'}}>
                              <Grid.Row>
                                <Grid.Column>
                                  Offer $25 discount coupon with Hershey's.
                                </Grid.Column>
                                <Grid.Column style={{marginTop:'10px'}}>
                                  <Button.Group>
                                    <Button negative onClick={this.handleClose.bind(this)}>Declined</Button>
                                    <Button.Or />
                                    <Button positive onClick={this.handleHide.bind(this)}>Accepted</Button>
                                  </Button.Group>
                                </Grid.Column>
                              </Grid.Row>
                            </Segment>
                          </div>
                        {/* </SwipeableViews> */}
                      </Grid.Column>
                    </Grid.Row>

                  </Grid>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={2}>
            </Grid.Column>
            </Grid.Row>
          </Grid>
          <Modal open={this.state.confirmation}  size='small'>
            <Header content='Thank you'/>
            <Modal.Content>
              <p> An email is sent to the passenger with the gift voucher.</p>
            </Modal.Content>
            <Modal.Actions>
              <center>
              <Button color='green' fluid inverted={true} style={{marginBottom:'15px'}} onClick={()=>{this.setState({confirmation:!this.state.confirmation})}}>
                <Icon name='checkmark'/>
                Close window
              </Button>
              </center>
            </Modal.Actions>
          </Modal>
          </Dimmer>


      </div>
    )
  }
}
