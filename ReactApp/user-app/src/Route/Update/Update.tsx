import React, { Component } from "react";
import State from './State';
import axios from 'axios';
import history from '../Histroy';


export default class Update extends Component<any, State> {
    
    constructor(props: any) {
        super(props);
        this.state = { firstName: this.props.location.state.user.FirstName , lastName: this.props.location.state.user.LastName, cnic: this.props.location.state.user.CNIC};
    }

    submitHandler = (event: any) => {
      event.preventDefault();

        const user = {
          FirstName : this.state.firstName,
	        LastName : this.state.lastName,
	        CNIC: this.state.cnic,
        };
        axios.post(`http://localhost:3000/updateUser`,user, {headers: {'Authorization' : `Bearer ${this.props.location.state.token}`}})
          .then(res => {
            console.log('Update response'+ JSON.stringify(res.data));
            if(res.data.rowsUpdate === 1){
              axios.post(`http://localhost:3000/createTodoFile`,{CNIC: this.state.cnic}, {headers: {'Authorization' : `Bearer ${this.props.location.state.token}`}})
              .then(resCreateTodo => {
                if(resCreateTodo.data.success){
                  history.push({pathname: '/Todo', state: {token: this.props.location.state.token, user: res.data.foundUser[0]}})
                }
                
              }).catch(error => {
                console.log('error:'+error);
              })
            }
             
          }).catch(error => {
            console.log('error:'+error);
          })
      }
      setFirstName = (event: any) => {
        this.setState({firstName: event.target.value});
      }

      setLastName = (event: any) => {
        this.setState({lastName: event.target.value});
      }
      
    render() {
        return (
            <form onSubmit={this.submitHandler}>
            <h1>Hello {this.state.firstName}</h1>
            <p>Enter first name</p>
            <input
              type='text'
              onChange={this.setFirstName}
              defaultValue={this.state.firstName}
            />
             <p>Enter last name</p>
            <input
              type='text'
              onChange={this.setLastName}
              defaultValue={this.state.lastName}
            />
            
            <input
              type='submit'
            />
            </form>
        )
    }
}