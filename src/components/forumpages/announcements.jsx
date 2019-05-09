import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import './announcements.css'
import Post from './announcementsposts/component/posts'
// TODO - add proptypes

class announcements extends Component {
    constructor(props) {
        super(props)

		this.state = {
            posts: ["its connected"],
            newPostBody: '',
		}
        this.addPost = this.addPost.bind(this)
        this.handleChange = this.handleChange.bind(this)
	}

    
    addPost(){
        const newState = Object.assign({}, this.state);
        newState.post.push(this.state.newPostBody);
        newState.newPostBody = '';
        this.setState(newState);
    }
    
    handleChange(event) {
        this.setState({
            newPostBody: event.target.value
        })
	}

    
    render() {
		return (
			<div className="forumWrapper">
                <div className = "topicIntro">
                    <h2>_______ Announcements!</h2>
                    Hello All, 
                    <p>We want to make sure that our community is up to date with the future plans. Over the upcomming months
                        we will be making a few changes to improve your experience with our app.
                    </p>
                    <ul>
                        <li>New Feature</li>
                        <li>New Feature</li>
                        <li>New Feature</li>
                        <li>New Feature</li>
                    </ul>

                    If you have any reccomendations on we can improve out up, please let us know below!
                </div>
				<div className = "forumAnnouncements">

                {this.state.posts.map((postBody, idx) => {
                    return(
                        <Post key = {idx} postBody={postBody} />
                    )
                })}

                <textarea type="text" className="forumPost" value = {this.state.newPostBody} onChange={this.handleChange} name="posts"
                placeholder="Type your message here"></textarea>

				<button className="postbutton" onClick={this.addpost}>Post!</button>
				</div>
			</div>
		)
	}
}


export default announcements
