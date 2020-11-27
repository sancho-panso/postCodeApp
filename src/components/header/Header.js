import './header.scss';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Header extends Component{ 

    constructor(props) {
        super(props);
      }
    
    render(){
        return(
            <Container> 
                <Row>
                    <Col>
                        <h1>
                            Pašto kodo paieškos aplikacija
                        </h1>
                    </Col>
                </Row>
            </Container>

        )
    }
 }

 export default Header;