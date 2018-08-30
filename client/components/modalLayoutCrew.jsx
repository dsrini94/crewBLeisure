import React, { Component } from 'react'
import { Button, Dimmer, Header, Icon, Image, Segment, Card,Grid,Table} from 'semantic-ui-react'

export default class DimmerExampleDimmer extends Component {
constructor(){
  super()
    this.state ={
      // active:true
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
    this.props.method();
  }

  render() {
    // const { active } = this.state

    return (
      <div>

          <Dimmer active={this.props.flag} onClickOutside={this.handleHide} style={{overflow:'hidden'}}>
          <Grid style={{backgroundColor:'rgba(0, 0, 0, 0.5)',border:'none'}}>
            <Grid.Row >
            <Grid.Column width={1}>
            </Grid.Column>
            <Grid.Column width={15} style={{marginLeft: "7px"}}>
              <Card fluid style={{textAlign:'center'}}>
              {/* <Label  floating><Icon  color = 'red' name = "info" size='large'/></Label> */}
                <Card.Content style ={{textColor :"#800000"}}>
                  <Segment  style={{borderRadius:'0px',padding:'7px',backgroundColor:'#800000'}}>
                    <span>Crew Details</span>
                  </Segment>

                  {/* <Grid>
                    <Grid.Row>
                    </Grid.Row>
                  </Grid> */}
                  <Table unstackable style={{fontSize:'13px'}}>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>Role</Table.HeaderCell>
                          <Table.HeaderCell>Name</Table.HeaderCell>
                          <Table.HeaderCell>Originality</Table.HeaderCell>
                          <Table.HeaderCell>Language</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>

                      <Table.Body>
                        <Table.Row>
                          <Table.Cell>Captain</Table.Cell>
                          <Table.Cell>Jenny Hess</Table.Cell>
                          <Table.Cell>France</Table.Cell>
                          <Table.Cell>French</Table.Cell>

                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>First Officer</Table.Cell>
                          <Table.Cell>Elliot James</Table.Cell>
                          <Table.Cell>England</Table.Cell>
                          <Table.Cell>English</Table.Cell>

                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>Stewardess</Table.Cell>
                        <Table.Cell>Catherine Kate</Table.Cell>
                          <Table.Cell>England</Table.Cell>
                        <Table.Cell>English</Table.Cell>

                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>Steward</Table.Cell>
                        <Table.Cell>Christian Bane</Table.Cell>
                          <Table.Cell>England</Table.Cell>
                        <Table.Cell>English</Table.Cell>

                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>Steward</Table.Cell>
                        <Table.Cell>Stevie Feliciano</Table.Cell>
                          <Table.Cell>England</Table.Cell>
                        <Table.Cell>English</Table.Cell>

                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>Stewardess</Table.Cell>
                        <Table.Cell>Jennifer Lawrence</Table.Cell>
                          <Table.Cell>England</Table.Cell>
                        <Table.Cell>English</Table.Cell>

                        </Table.Row>
                      </Table.Body>
                    </Table>
                    <Button fluid color='blue' onClick={this.handleHide.bind(this)}>OK</Button>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={1}>
            </Grid.Column>
            </Grid.Row>
          </Grid>
          </Dimmer>


      </div>
    )
  }
}
