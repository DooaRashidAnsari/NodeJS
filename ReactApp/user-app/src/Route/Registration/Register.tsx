import React, { Component } from "react";
import State from './State';
import axios from 'axios';

export default class Register extends Component<any, State> {
    
    constructor(props: any) {
        super(props);
        this.state = { firstName: '' , lastName: '', phoneNo: 0 , email: '', cnic: '', dob:''};
    }

    submitHandler = (event: any) => {
      event.preventDefault();

        const user = {
          FirstName : this.state.firstName,
	        LastName : this.state.lastName,
	        CNIC: this.state.cnic,
	        Email: this.state.email,
	        PhoneNo: this.state.phoneNo,
	        DOB: this.state.dob
        };
        console.log('user:'+JSON.stringify(user)); 
        axios.post(`http://localhost:3000/registerUser`,user)
          .then(res => {
            console.log(res);
            console.log(res.data);
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

      setPhoneNo = (event: any) => {
        this.setState({phoneNo: event.target.value});
      }

      setEmail = (event: any) => {
        this.setState({email: event.target.value});
      }

      setDob = (event: any) => {
        this.setState({dob: event.target.value});
      }
      setCnic = (event: any) => {
        this.setState({cnic: event.target.value});
      }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
            <h1>Hello {this.state.firstName}</h1>
            <p>Enter first name</p>
            <input
              type='text'
              onChange={this.setFirstName}
            />
             <p>Enter last name</p>
            <input
              type='text'
              onChange={this.setLastName}
            />
            <p>Enter CNIC</p>
            <input
              type='text'
              onChange={this.setCnic}
            />
             <p>Enter email</p>
            <input
              type='email'
              onChange={this.setEmail}
            />
              <p>Enter phone number</p>
            <input
              type='text'
              onChange={this.setPhoneNo}
            />
             <p>Enter date of birth</p>
            <input
              type='text'
              onChange={this.setDob}
            />
            
            <input
              type='submit'
            />
           
            
            </form>
        )
    }
}