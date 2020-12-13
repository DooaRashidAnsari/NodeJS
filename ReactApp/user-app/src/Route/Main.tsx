import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import history from './Histroy';
import State from './State';
import axios from 'axios';

export default class Main extends Component<any, State> {

    constructor(props: any) {
        super(props);
        this.state = { cnic: '', user: {}};
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
              history.push({pathname: '/Update', state: {token: res.data.token, user: res.data.user[0]}}) 
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
               <Button variant="btn btn-success" onClick={() => history.push('/Chat')}>Chat</Button>
            </div>
        

        )
    }
}