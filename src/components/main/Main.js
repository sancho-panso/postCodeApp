import'./main.scss'

import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Main extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
            code:'Prašom suvesti pašto adresą',
        }
    }


async componentDidUpdate(prevProps, prevState) {
        if(prevProps.address != this.props.address ){
        if(this.props.address != "empty"){
            let path = "https://api.postit.lt/?term=" + this.props.address.street + "+" + this.props.address.building + ",+" + this.props.address.city + "&key=postit.lt-examplekey";
            console.log(path);
            let res = await fetch(path);
            let data = await res.json();
            if(data.data.length != 0){
               this.setState({code: "Jūsų pašto kodas: " + data.data[0].post_code});
            }
            else{
                this.setState({code: 'Prašom suvesti galiojanti pašto adresą'});
            }
        }
    }
} 

        
   render() {
        const postCode = this.state.code;                            
        return(
            <Container>
                <Row>
                    <Col>
                        <p>{this.state.code}</p>
                    </Col>
                </Row>  
            </Container>
        )
       
    }
}


export default Main;

