import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, { Component } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import MenuTop from './components/MenuTop';
import ToolsPanel from './components/ToolsPanel';
import DeckMap from './components/DeckMap';

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? 
    [ parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)]
  : null;
}

class Main extends Component {
  state = {
    lineWidth: 2,
    color: [255, 0, 0]
  }
  onChangelineWidthHandler = (val) => {
    this.setState({ lineWidth: val.target.value })
  }



  onChangeColorHandler = (color, event) => {
    this.setState({ color: hexToRgb(color.hex) });
    
  };


  

  render() {
    return (
      <div>
        <DeckMap lineWidth={this.state.lineWidth}
                 color={this.state.color} 
        />
        <MenuTop name="@deck.gl/carto Demo" />
        <Container fluid style={{ paddingTop: 15 + 'px' }}>
          <Row>
            <Col xs={12} md={6} xl={3}>
              <ToolsPanel name="Tools" 
                lineWidth={this.state.lineWidth} onChangelineWidth={this.onChangelineWidthHandler}
                color={this.state.color} onChangeColor={this.onChangeColorHandler}
              />
            </Col> 
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;