import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import "./signup.css";
import Image from '../Assets/signup2.jpg'

class SignupForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
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
			<div>
								<div id="bannerDiv">
					<div id="intro">
					<img className="bannerImage" alt="forumImage" src={Image}/>
					<div id="introCard">
					<h1>Forum</h1>
					</div>
					</div>
				</div>
			<div className="formWrapper">
				<div className="SignupForm">
					<h1>Signup form</h1>

					<input
						className = "formInput"
						name="firstName"
						type="text"
						placeholder="First Name"
					/>
          			<input
					  	className = "formInput"
						name="lastName"
						type="text"
						placeholder="Last Name"
          			/>
					<input
						className = "formInput"
						type="text"
						name="email"
						placeholder="Email Address"
						value={this.state.email}
						onChange={this.handleChange}
					/>
					<input
						className = "formInput"
						type="password"
						name="password"
						placeholder="Password"
						value={this.state.password}
						onChange={this.handleChange}
					/>
					<button onClick={this.handleSubmit}>Sign up</button>
				</div>
			</div>
			</div>
		)
	}
}

export default SignupForm
