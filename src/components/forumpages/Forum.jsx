import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './forum.css'
import Image from '../../Assets/Forum2.jpg'

// TODO - add proptypes

class Forum extends Component {
	render() {
		return (
			<div className="forumWrapper">

				<div id="bannerDiv">
					<div id="intro">
					<img className="bannerImage" alt="forumImage" src={Image}/>
					<div id="introCard">
					<h1>Forum</h1>
					</div>
					</div>
				</div>

				<div id="topicsWrapper">
					<div className="topic">
						<Link to="/Announcements" className="forumTopic">
							Announcements
						</Link>
						<p className = "topicDescription">Check here for any announcements for <strong>Continue to Code</strong></p>
					</div>
					<div className="topic">
						<Link to="/Resources" className="forumTopic">
							Resources
						</Link>
						<p className = "topicDescription">Have any resources that helped you get through a difficult project? Share them with the community!</p>
					</div>
					<div className="topic">
						<Link to="/General" className="forumTopic">
							General
						</Link>
						<p className = "topicDescription">A place for you to talk about whatever you want!</p>
					</div>
					<div className="topic">
						<Link to="/Thoughts" className="forumTopic">
							Thoughts
						</Link>
						<p className = "topicDescription">Share your thoughts regarding anything and everything web development</p>
					</div>
					<div className="topic">
						<Link to="/sharework" className="forumTopic">
							Share Your Work
						</Link>
						<p className = "topicDescription">Need advice or critique on your projects? Post them here and get feedback from the community!</p>
					</div>
				</div>
			</div>
		)
	}
}


export default Forum
