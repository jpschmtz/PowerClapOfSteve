import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import "../signup.css";

class LoginForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			redirectTo: null
		}
		// this.googleSignin = this.googleSignin.bind(this)
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
		console.log('handleSubmit')
		this.props._login(this.state.username, this.state.password)
		this.setState({
			redirectTo: '/'
		})
	}

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<div class="row mt-5">
        <div class="col-md-6 m-auto">
          <div class="card card-body">
            <h1 class="text-center mb-3"><i class="fas fa-user-astronaut"></i>  Login</h1>
             <form action="/users/login" method="POST">
              <div class="form-group">
                <label for="username">User Name</label>
                <input
				 className = "formInput"
                  type="username"
                //   id="username"
                  name="username"                  
				  placeholder="Enter User Name"
				  value={this.state.username}
							onChange={this.handleChange}
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
				 className = "formInput"
                  type="password"
                //   id="password"
                  name="password"                  
                  placeholder="Enter Password"
                />
              </div>
              <button type="submit" class="btn btn-primary btn-block">Login</button>
            </form>
            <p class="lead mt-4">
              No Account? <a href="#">Register</a>
            </p>
          </div>
        </div>
      </div>
			)
		}
	}
}

export default LoginForm
