import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import history from './Histroy';
import State from './State';
import axios from 'axios';

export default class Main extends Component<any, State> {

    constructor(props: any) {
        super(props);
        this.state = { cnic: ''};
    }

    setCnic = (event: any) => {
        this.setState({cnic: event.target.value});
      }

    submitHandler = (event: any) => {
        event.preventDefault();
  
          axios.get(`http://localhost:3000/user/${this.state.cnic}`)
            .then(res => {
              console.log(res);
              console.log(res.data);
            }).catch(error => {
              console.log('error:'+error);
            })
        }

    render() {
        return (
            <div>
            <h1>Login</h1>
            <form onSubmit={this.submitHandler}>
            <p>Enter CNIC</p>
            <input
              type='text'
              onChange={this.setCnic}
            />
            <input
              type='submit'
            />
           
            
            </form>
           
               <Button variant="btn btn-success" onClick={() => history.push('/Register')}>Register</Button>
            </div>
        

        )
    }
}