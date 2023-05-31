//create a simple form to create a user
import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
        name: '',
        email: '',
        password:""
        }
    }
    // handle change event
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    // handle submit event
  
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('The form is submitted');
        const { name, email, password } = this.state;
        axios.post('http://localhost:3000/users', {
            name,
            email,
            password
        })
        .then((result) => {
            console.log(result);
            this.props.history.push("/users")
        })
        .catch((error) => {
            console.log(error);
        });
    }
    render() { return (
        <div className="container">
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
        <label>Name</label>
        <input type="text" name="name" className="form-control" onChange={this.handleChange} />
        <label>Email</label>
        <input type="text" name="email" className="form-control" onChange={this.handleChange} />
        <label>Password</label>
        <input type="password" name="password" className="form-control" onChange={this.handleChange} />
        <br></br>
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        </form>
        </div>
        )
    }
}
export default CreateUser;