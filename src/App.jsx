import React, { Component } from 'react'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import './App.css'
import LoginForm from './components/Login/LoginForm'
import SignupForm from './components/SignupForm'
import Home from './components/Home'
import Forum from './components/forumpages/Forum'
import announcements from './components/forumpages/announcements'
import resources from './components/forumpages/resources'
import thoughts from './components/forumpages/thoughts'
import general from './components/forumpages/general'
import sharework from './components/forumpages/sharework'
import Calendar from './components/Calendar'
import News from './components/News.jsx'
import './Assets/css/hover.css'

const DisplayLinks = props => {
		return (
			<div id="masterhead">

			<div className="navContainer">
				<div>
					<a href="/" id="logo">Continue to Code</a>
				</div>
	
				<div id="navitems">
							<Link to="/" className="nav-link button hvr-bob">
			 				Home
			 			</Link>

						<Link to="/news" className="nav-link hvr-bob">
			 				News
			 			</Link>

			 			<Link to="/calendar" className="nav-link hvr-bob">
			 				Events Calendar
			 			</Link>

			 			<Link to="/forum" className="nav-link hvr-bob">
			 				Forum
			 			</Link>

			 			<Link to="/login" className="nav-link hvr-bob">
			 				Login
			 			</Link>

			 			<Link to="/signup" className="nav-link hvr-bob">
			 				Sign Up
			 			</Link>
				</div>
			</div>
	
		</div>

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
			.post('/auth/login', {
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
				{/* <h1>Code Loop</h1>
				<h2>Developing Developers</h2> */}
				{/* <Header user={this.state.user} /> */}
				{/* LINKS to our different 'pages' */}
				<DisplayLinks _logout={this._logout} loggedIn={this.state.loggedIn} />
				{/*  ROUTES */}
				{/* <Route exact path="/" component={Home} /> */}
				{/* <Route exact path="/" render={() => <Home user={this.state.user} />} /> */}
				<Route exact path="/" component={Home} />

				<Route
					exact
					path="/login"
					render={() =>
						<LoginForm
							_login={this._login}
							_googleSignin={this._googleSignin}
						/>}
				/>
				<Route exact path="/signup" component={SignupForm} />
				<Route exact path="/calendar" component={Calendar} />
				<Route exact path="/news" component={News} />
				<Route exact path="/forum" component={Forum} />
				<Route exact path="/announcements" component={announcements} />
				<Route exact path="/resources" component={resources} />
				<Route exact path="/thoughts" component={thoughts} />
				<Route exact path="/general" component={general} />
				<Route exact path="/sharework" component={sharework} />
				{/* <LoginForm _login={this._login} /> */}

			</div>
		)
	}
}

export default App
