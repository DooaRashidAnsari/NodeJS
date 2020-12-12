import React, { Component } from "react";
import State from './State';
import axios from 'axios';
import history from '../Histroy';
import { CsvToHtmlTable } from 'react-csv-to-table';


export default class Update extends Component<any, State> {
    
    constructor(props: any) {
        super(props);
        this.state = { firstName: this.props.location.state.user.FirstName , lastName: this.props.location.state.user.LastName, cnic: this.props.location.state.user.CNIC, title: '', desc: '',list: ''};
    }

    submitHandler = (event: any) => {
        event.preventDefault();

        const todo = {
            title : this.state.title,
	        desc : this.state.desc,
	        CNIC: this.state.cnic,
        };
        axios.post(`http://localhost:3000/addTodo`,todo, {headers: {'Authorization' : `Bearer ${this.props.location.state.token}`}})
          .then(res => {
            console.log('Todo add response'+ JSON.stringify(res.data));
            this.setState({list: res.data.list})
             
          }).catch(error => {
            console.log('error:'+error);
          })
    }
    setTitle = (event: any) => {
        this.setState({title: event.target.value});
    }

    setDesc = (event: any) => {
        this.setState({desc: event.target.value});
    }
      
    render() {
        return (
            <div>
            <h1>Hello {this.state.firstName + ' ' +this.state.lastName}</h1>
            <p>Enter Title</p>
            <input
              type='text'
              onChange={this.setTitle}
            />
             <p>Enter description</p>
            <input
              type='text'
              onChange={this.setDesc}
            />
            
            <button onClick={this.submitHandler}>
              Add
            </button>
            <CsvToHtmlTable
             data={this.state.list}
             csvDelimiter=","
             /> 
            </div>
        )
    }
}