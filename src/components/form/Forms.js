import './forms.scss';
import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';


class Forms extends Component{

    constructor(props) {
        super(props);
        this.state = {options:[],
                      city:' ',
                      street:' ',
                      building:' '
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {this.setState({[event.target.name]: event.target.value});  }
      handleSubmit(event) {
        let address= {city:this.state.city,
                      street:this.state.street,
                      building:this.state.building,
        }
        this.props.inputSubmit(address)
        event.preventDefault();
      }

      async componentDidMount() {
        let res = await fetch("https://api.meteo.lt/v1/places")
        let data = await res.json()
        let listOptions = data;
        this.setState({options: listOptions})
    } 
    
      render() {
        const options = this.state.options.map((item, index)=>
        <option key={index} id={item.code}>{item.name}</option>) 
        return (
          <div>
          <Container>
                  <Form inline onSubmit={this.handleSubmit} >
                      <Form.Control as="select" name ="city" onChange={this.handleChange} className=" mr-sm-2">
                        <option>Pasirinkti miestą...</option>
                        {options}
                      </Form.Control>
                      <FormControl type="text" name = "street" onChange={this.handleChange} placeholder="Gatvė" className=" mr-sm-2" />
                      <FormControl type="text" name = "building" onChange={this.handleChange} placeholder="Namo Nr." className=" mr-sm-2" />
                      <Button type="submit" variant="primary">Paiėška</Button>
                  </Form>
          </Container>
          </div>
        );
      }
    }

 export default Forms;