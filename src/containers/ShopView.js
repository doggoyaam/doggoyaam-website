import React, { Component } from 'react';
import '../App.css';
import {
  Button,
  Container,
  Header,
  Segment,
  Item,
  Label,
  Image
} from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';


class ShopView extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    curMsg: "",
    value: "",
    message: "",
    gloatCount: 0,
    gloatList: [],
    loading: false,
    roundNum: null,
    accountsAvailable: false,
    accountList: []
  };


  componentDidMount() {
    // this.initPageData();

  }

  render() {
    let userLayout;


    userLayout = (
      <div  >
        <Segment
          inverted
          textAlign='center'
          style={{ minHeight: 100, padding: '1em 0em' }}
          vertical
        >
          <Container text >
            <Header
              as='h1'
              inverted
              style={{
                fontWeight: 'normal',
                marginBottom: '1em',
                marginTop: '1em',
              }}
            >
              Shop Doggyaam
            </Header>
          </Container>

        </Segment>

        <Segment
          style={{ margin: '3em', padding: '1em 0em' }}
          vertical
          size="small"
        >
          <Image src="" />
        </Segment>
      </div>
    );


    return (
      <div>
        {userLayout}
      </div>
    );
  }

}

export default withRouter(ShopView);

