import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import history from './Histroy';

export default class Main extends Component {
    render() {
        return (
            <div>
           <h1>Dooa Rashid Ansari</h1>
           <Button variant="btn btn-success" onClick={() => history.push('/About')}>Click button to view products</Button>
            </div>
        

        )
    }
}