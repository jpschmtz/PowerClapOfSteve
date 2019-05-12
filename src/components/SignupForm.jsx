import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
// import './Login/css/boostrap.css'
import "./signup.css";

class SignupForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',		
			redirectTo: null
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		event.preventDefault()
		// TODO - validate!
		axios
			.post('/auth/signup', {
				username: this.state.username,
				password: this.state.password
			})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('youre good')
					this.setState({
						redirectTo: '/login'
					})
				} else {
					console.log('duplicate')
				}
			})
	}
	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
		return (
			<div className="row mt-5">
        <div className="col-md-6 m-auto">
          <div className="card card-body">
            <h1 className="text-center mb-3">
              <i className="fas fa-user-plus"></i> Register
            </h1>
          
            <form action="/users/register" method="POST">
              <div className="form-group">
                <label for="name">First Name</label>
                <input
					className = "formInput"
					name="firstName"
					type="text"
					placeholder="First Name"        
                //   id="name"     
                />
              </div>
			  <div className="form-group">
                <label for="name">Last Name</label>
                <input
					className = "formInput"
					name="lastName"
					type="text" 
					placeholder="Last Name"       
                //   id="name"     
                />
              </div>
              <div className="form-group">
                <label for="email">Email</label>
                <input
				className = "formInput"
				type="text"
				name="email"
				placeholder="Email Address"
				value={this.state.email}
				onChange={this.handleChange}                  
                //   id="email"         
                 />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
				className = "formInput"
				type="password"
				name="password"
				placeholder="Password"
				value={this.state.password}
				onChange={this.handleChange}
				// id="password"                             
                />
              </div>             
			  <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Sign up</button>              
            </form>
            <p className="lead mt-4">Have An Account? <a href="/login">Login</a></p>
          </div>
        </div>
      </div>
      
		)
	}
}

export default SignupForm
