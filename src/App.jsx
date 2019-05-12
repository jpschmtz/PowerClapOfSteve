import React, { Component } from 'react'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import './App.css'
import LoginForm from './components/Login/LoginForm'
import SignupForm from './components/SignupForm'
//import Header from './components/Header'
import Home from './components/Home'
import Forum from './components/forumpages/Forum'
import announcements from './components/forumpages/announcements'
import general from './components/forumpages/general'
import Calendar from './components/Calendar'
import News from './components/News.jsx'

const DisplayLinks = props => {
		return (
			<nav className="navbar">
				<ul className="nav">
					<li className="nav-item">
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/news" className="nav-link">
							News
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/calendar" className="nav-link">
							Events Calendar
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/forum" className="nav-link">
							Forum
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/login" className="nav-link">
							Login
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/signup" className="nav-link">
							Sign Up
						</Link>
					</li>
				</ul>
			</nav>
		)
	}


class App extends Component {
	constructor() {
		super()
		this.state = {
			loggedIn: false,
			user: null
		}
		this._logout = this._logout.bind(this)
		this._login = this._login.bind(this)
	}
	// componentDidMount() {
	// 	axios.get('/auth/user').then(response => {
	// 		console.log(response.data)
	// 		if (!!response.data.user) {
	// 			console.log('THERE IS A USER')
	// 			this.setState({
	// 				loggedIn: true,
	// 				user: response.data.user
	// 			})
	// 		} else {
	// 			this.setState({
	// 				loggedIn: false,
	// 				user: null
	// 			})
	// 		}
	// 	})
	// }

	_logout(event) {
		event.preventDefault()
		console.log('logging out')
		axios.post('/auth/logout').then(response => {
			console.log(response.data)
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_login(username, password) {
		axios
			.post('/', {
				username,
				password
			})
			.then(response => {
				console.log(response)
				if (response.status === 200) {
					// update the state
					this.setState({
						loggedIn: true,
						user: response.data.user
					})
				}
			})
	}

	render() {
		return (
			<div className="App">			
				<DisplayLinks _logout={this._logout} loggedIn={this.state.loggedIn} />
				
				<Route exact path="/" component={Home} />

				<Route
					exact
					path="/login"
					render={() =>
						<LoginForm
							_login={this._login}							
						/>}
				/>
				<Route exact path="/signup" component={SignupForm} />
				<Route exact path="/calendar" component={Calendar} />
				<Route exact path="/news" component={News} />
				<Route exact path="/forum" component={Forum} />
				<Route exact path="/announcements" component={announcements} />
				<Route exact path="/general" component={general} />
				{/* <LoginForm _login={this._login} /> */}

			</div>
		)
	}
}

export default App
