import React, { Component } from 'react'
import Image from '../Assets/welcome.jpg'
import "../index.css";

class Home extends Component {
	render() {
		return (
			<div>
				
					<div id="bannerDiv">
						<div id="intro">
						<img className="bannerImage" src={Image}/>
						</div>

						<div id="introCard">
						<h1>Hello Developers!</h1>
						<h2>Welcome to AppName</h2>
						</div>
					</div>



				<div id="introParagraph">
					<p>As Developers, it is important to continuously sharpen your skills. Here at _________ it makes it
						easy for you to stay up-to-date with the latest technologies and tech news.
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
