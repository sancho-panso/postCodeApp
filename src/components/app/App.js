import React, { Component } from 'react';
import Header from"../header/Header";
import Footer from"../footer/Footer";
import Main from"../main/Main";
import Forms from"../form/Forms";
import Container from 'react-bootstrap/Container';




class App extends Component {
    constructor(props){
    super(props);
    this.state = {postAddress:{ }} 
    }

    handleSearchChange = (code) => {
        this.setState({postAddress: code});
    }


    render(){
        let validAdd;
        if(isEmpty(this.state.postAddress)){
            validAdd = 'empty';  
        }else{
            if(this.state.postAddress.city != " " && 
               this.state.postAddress.street != " " && 
               this.state.postAddress.building != " " ){
                validAdd = this.state.postAddress;

               }
            else{
                validAdd = 'empty'; 
            }   

        }
        console.log(validAdd)
        return(
            <Container> 
                <div className="app">
                    <Header/>
                    <Forms inputSubmit={this.handleSearchChange}/>
                    <Main address={validAdd}/>
                    <Footer/>
                </div>
            </Container>
        )
    }
}

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

 

export default App;