import React, { Component } from 'react';
import '../App.css';
import {
  Button,
  Container,
  Header,
  Icon,
  Segment,
  Message
} from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

class HomeView extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    curMsg: "",
    value: "",
    message: "",
    accountsAvailable: false,
    accountList: [],
    cRoundStartTime: null,
    userCanCallNext: false,
    loading: false,
  };



  componentDidMount() {
    // this.initPageData();

  }



  render() {
    let userLayout;
    let submitButton = null;
    let callNextButton = null;

    userLayout = (
      <Segment
        inverted
        textAlign='center'
        style={{ padding: '1em 0em', height: '100vh' }}
        vertical
      >
        <Container text>
          <div className="logoText">
            <p>doggo</p>yaam

              </div>
          <Header
            as='h1'
            content='doggoyaam'
            inverted
            style={{
              fontSize: '4em',
              fontWeight: 'normal',
              marginBottom: '1em',
              marginTop: '1em',
            }}
          />
          <Message compact color="blue">
            <h3>Coming soon</h3>
          </Message>
        </Container>
      </Segment>
    );


    return (
      <div>
        {userLayout}
      </div>
    );
  }

}

export default withRouter(HomeView);

