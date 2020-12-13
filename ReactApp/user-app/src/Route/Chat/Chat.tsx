import { listenerCount } from "process";
import React, { Component } from "react";
import {io} from "socket.io-client";
import State from './State';


export default class Chat extends Component<any, State> {

    constructor(props: any) {
        super(props);
        this.state = {message: '', list:['dooa']};
    }

    socket = io('http://localhost:3000',{transports: ['websocket', 'polling', 'flashsocket']})
   
    componentDidMount(){
      this.receiveMessage()
    }

    
    render() {
        return (
            <div>
            <p>Enter Message</p>
            <input
              type='text'
              onChange={this.setMessage}
            />
            <div>
                {this.state.list}
            </div>
            <button onClick={this.sendMessage}>
              Send Message
            </button>
            </div>
        )
    }

    sendMessage = () => {
        this.socket.emit('sendMessage', this.state.message, () => this.setState({message: ''}) ); 
    }

    receiveMessage = () => {
        this.socket.on('message', (message) => {
            console.log(message)
            this.setState({list: [...this.state.list, message]})
        });
    }

    setMessage = (event: any) => {
        this.setState({message: event.target.value});
    }
}