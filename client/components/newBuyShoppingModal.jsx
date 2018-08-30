import React from 'react'
import {
  Divider,
  Statistic,
  Button,
  Icon,
  Modal,
  Radio,
  Image,
  Header,
  Input
} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';


export default class NewBuyShoppingModal extends React.Component {

  constructor()
  {
    super();
    this.state={confirmation:false}
    this.handleConfirmationDialouge = this.handleConfirmationDialouge.bind(this);

  }

  handleConfirmationDialouge()
  {
    this.props.buyModalClose();
    this.setState({confirmation:!this.state.confirmation})
  }

  render() {
    return (<div>
      <Modal open={this.props.openState} basic>
        <Modal.Header>
        <Icon name='cart'/>
          <span className="subheaders">Purchase</span>
        </Modal.Header>
        <Modal.Content image="image">
          <Image src={this.props.selectedProduct.image} size='tiny'/>
          <Statistic size={'mini'}>
            <Statistic.Value style={{
                color: '#800000',
                marginBottom: '5px'
              }}><span className="subheaders">{this.props.selectedProduct.price}</span></Statistic.Value>
            <Statistic.Label style={{
                color: '#800000'
              }}><span className="subheaders">{this.props.selectedProduct.name}</span></Statistic.Label>
          </Statistic>
          <Modal.Description>
            <center><Header as='h4' style={{color:'#800000'}}><span className="subheaders">Buy at our Store</span></Header></center>
          </Modal.Description>
          <Header as='h5' style={{
              border: 'none',
              margin: '10px',
              padding: '0px',
              color: 'white'
            }}>Enter card details</Header>
          <Input fluid={true} iconPosition='left' placeholder='Card Number'>
            <Icon name='credit card alternative'/>
            <input/>
          </Input>
          <Header as='h5' style={{
              border: 'none',
              margin: '10px',
              padding: '0px',
              color: 'white'
            }}>Enter Seat Number</Header>
          <Input fluid={true} iconPosition='left' placeholder='Seat No.'>
            <input/>
          </Input>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' onClick={() => this.props.buyModalClose()}>
            <Icon name='close'/>
            Close
          </Button>
          <Button color='green' onClick={this.handleConfirmationDialouge.bind(this)}>
            <Icon name='map'/>
              Buy
          </Button>
        </Modal.Actions>
      </Modal>
      <Modal open={this.state.confirmation}  size='small'>
        <Header icon='credit card alternative' content='Payment Successfull'/>
        <Modal.Content>
          <p>Thank you for purchasing. The invoice will be sent to your email.</p>
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


    </div>);
  }
}
