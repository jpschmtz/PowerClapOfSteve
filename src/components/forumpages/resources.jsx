import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import './announcements.css'
import Post from './announcementsposts/component/posts'
import '../../Assets/css/hover.css';
// TODO - add proptypes

class resources extends Component {
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
                        <h2 className="postHeading">Resources</h2>
                        <span className="postInfo"> <strong>Admin</strong> May 10, 2019, 11:47 AM</span>
                    </div>
                    <div className="postContent">
                        <p>Do you have any favorite websites, books, or Youtube Videos? Share them with other members!</p>
                    </div>
                </div>


                <div className="extraPosts">
                <div className="postHeader">
                    <h4 className="postHeading">RE: Resources</h4>
                    <span className="postInfo"> <strong>Thai Bai</strong> May 12, 2019, 1:47 PM</span>
                    </div>
                    <div className="postContent">
                    <p>For frontent work, my favorite books have been Jon Duckett's <i>Web Design with HTML, CSS, JavaScript and jQuery Set.</i> It has been an amazing read to learn the basics of front end development.</p>
                    </div>
                </div>


                <div className="extraPosts">
                <div className="postHeader">
                <h4 className="postHeading">RE: Resources</h4>
                    <span className="postInfo"> <strong>Kyle Style</strong> May 12, 2019, 11:47 PM</span>
                    </div>
                    <div className="postContent">
                        <p>Thanks for the book reccomendation Thai! I'm an aspiring Frontend Developer and these would be great!</p>
                    </div>
                </div>


                <div className="extraPosts">
                <div className="postHeader">
                <h4 className="postHeading">RE: Resources</h4>
                    <span className="postInfo"> <strong>Stan Ham</strong> May 13, 2019, 6:40 AM</span>
                    </div>
                    <div className="postContent">
                    <p>I'm with Thai on this one! Jon's books are great!</p>
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


export default resources
