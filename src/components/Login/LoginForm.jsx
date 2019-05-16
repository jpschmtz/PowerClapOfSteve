import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
// import googleButton from './google_signin_buttons/web/1x/btn_google_signin_dark_disabled_web.png'
// import googleButton from './google_signin_buttons/web/1x/btn_google_signin_dark_normal_web.png'
import "../signup.css";
import Image from '../../Assets/login2.jpg'
import '../../Assets/css/hover.css';
import { Link } from 'react-router-dom'

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
			<div>
				<div id="bannerDiv">
					<div id="intro">
						<img className="bannerImage" alt="Login Banner" src={Image}/>
					</div>
	
					<div id="introCard">
						<h1>Login</h1>
						<h2>To Your Account Below</h2>
					</div>
				</div>
				
				
				<div className="formWrapper">

					<div className="LoginForm">
						<h1>Login Form</h1>
						<form>
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
							<button className="hvr-bounce-to-right" onClick={this.handleSubmit}>Login</button>
						</form>
						<Link to="/signup" className="forumTopic">
							Not yet registered? Sign up here!
						</Link>
					</div>

				</div>
			</div>
			)
		}
	}
}

export default LoginForm
