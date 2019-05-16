import React, { Component } from 'react'
import Image from '../Assets/welcome2.jpg'
import "../index.css";

class Home extends Component {
	render() {
		return (
			<div>
				
					<div id="bannerDiv">
						<div id="intro">
						<img className="bannerImage" alt="welcomeImage" src={Image}/>
						</div>

						<div id="introCard">
						<h1>Hello <br></br>Developers!</h1>
						</div>
					</div>



				<div id="introParagraph">
					<h1>Welcome to Continue to Code!</h1>
					<p>Unfortunately, a college degree or bootcamp certifiate isn't going to cut it.
						 As Developers, it is important to continuously sharpen your skills. Employers are willing to take a bet on someone who can learn as 
						 they go and can persist through the everyday fustrations of being a developer. Here at <i>Continue to Code</i> we it
						easy for you to stay up-to-date with the latest tech related news, find tech related meetups, and communcate with the <i>Continue to Code </i>
						 team and other developers via our forum.
					</p>
				</div>
			</div>
		)
	}
}


export default Home



// const Home = props => {
// 	if (props.user) {
// 		return (
// 			<div className="Home">
// 				<p>Current User:</p>
// 				<code>
// 					{JSON.stringify(props)}
// 				</code>
// 			</div>
// 		)
// 	} else {
// 		return (
// 			<div className="Home">
// 				<p>Current User:</p>
// 				<code>
// 					{JSON.stringify(props)}
// 				</code>
// 			</div>
// 		)
// 	}
// }

// export default Home
