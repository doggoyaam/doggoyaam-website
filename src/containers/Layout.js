import React, { Component } from 'react';
import '../App.css';
import {
  Button,
  Container,
  Icon,
  Menu,
  Segment,
  Label,
} from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

class CustomLayout extends React.Component {

  constructor(props) {
    super(props);
  }


  componentDidMount() {
    // this.initPageData();

  }




  render() {
    // const { children } = this.props
    // const fixed = this.state.fixed;
    let userLayout = null;

    var authMenuItems = null;

    let userWeb3Comp = null;


    userLayout = (
      <div>
        <Segment
          inverted
          textAlign='center'
          vertical
        >
          <Menu
            inverted
            pointing
            secondary
            stackable
          >
            <Container>
              <Menu.Item name="Shop" link>
                <Button inverted>
                  <Link
                    to={{ pathname: "/shop" }}
                  >
                    Shop
                  </Link>
                </Button>
              </Menu.Item>

              <Menu.Item name="Home" link >
                <Link to={{ pathname: "/" }} >
                  Home
                </Link>
              </Menu.Item>

            </Container>
          </Menu>
        </Segment>
        {this.props.children}
      </div>



    );


    return (
      <div>
        {userLayout}
      </div>
    );
  }

}

export default withRouter(CustomLayout);

