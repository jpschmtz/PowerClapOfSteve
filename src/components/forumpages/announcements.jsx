import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import './announcements.css'
import Post from './announcementsposts/component/posts'
// TODO - add proptypes

class announcements extends Component {
    constructor(props) {
        super(props)

		this.state = {
            posts: [],
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
                    <div className="postHeader">
                        <h2 className="postHeading">Continue to Code's Announcements!</h2>
                        <span className="postInfo"> <strong>Admin</strong> May 10, 2019, 11:47 AM</span>
                    </div>
                    <div className="postContent">
                    Hello All, 
                    <p>We want to make sure that our community is up to date with the future plans. 
                        Over the upcomming months we will be making a few changes to improve your experience with our app.
                    </p>
                    <ul>
                        <li>Filter meetups country/worldwide</li>
                        <li>Filter news articles using keywords</li>
                        <li>Upload photos and files in the forum</li>

                    </ul>

                    If you have any reccomendations on we can improve out up, please let us know below!
                    </div>
                </div>



                <div className="extraPosts">
                <div className="postHeader">
                    <h4 className="postHeading">RE: Continue to Code's Announcements!</h4>
                    <span className="postInfo"> <strong>Jon Doe</strong> May 12, 2019, 1:47 PM</span>
                    </div>
                    <div className="postContent">
                    <p>Thanks for keeping us updated! Can't wait to see how everything turns out!</p>
                    </div>
                </div>


                <div className="extraPosts">
                <div className="postHeader">
                <h4 className="postHeading">RE: Continue to Code's Announcements!</h4>
                    <span className="postInfo"> <strong>Jane Doe</strong> May 12, 2019, 11:47 PM</span>
                    </div>
                    <div className="postContent">
                        <p>Thanks Admin for letting us know of future builds! Can you guys potentially create a direct message or instant chat feature?</p>
                    </div>
                </div>


                <div className="extraPosts">
                <div className="postHeader">
                <h4 className="postHeading">RE: Continue to Code's Announcements!</h4>
                    <span className="postInfo"> <strong>Da Doe</strong> May 13, 2019, 6:40 AM</span>
                    </div>
                    <div className="postContent">
                    <p>I'm excited for the file upload feature! It will be so much easier to share code snippets with the rest of the members!</p>
                    </div>
                </div>



				<div className = "forumAnnouncements">

                {this.state.posts.map((postBody, idx) => {
                    return(
                        <Post key = {idx} postBody={postBody} />
                    )
                })}

                <textarea type="text" className="forumPost" value = {this.state.newPostBody} onChange={this.handleChange} name="posts"
                placeholder="Type your message here"></textarea>

				<button className="postbutton hvr-rectangle-out" onClick={this.addpost}>Post!</button> 
				</div>
			</div>
		)
	}
}


export default announcements
