import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import './announcements.css'
import Post from './announcementsposts/component/posts'
import '../../Assets/css/hover.css';
// TODO - add proptypes

class general extends Component {
    constructor(props) {
        super(props)

		this.state = {
            posts: [""],
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
                        <h2 className="postHeading">General Chat</h2>
                        <span className="postInfo"> <strong>Admin</strong> May 10, 2019, 11:47 AM</span>
                    </div>
                    <div className="postContent">
                        <p>It's a free for all in here! Talk about whatever you want! But please... Keep it appropriate!</p>
                    </div>
                </div>

                <div className="extraPosts">
                <div className="postHeader">
                <h4 className="postHeading">RE: General Chat</h4>
                    <span className="postInfo"> <strong>Kyle Style</strong> May 12, 2019, 11:47 PM</span>
                    </div>
                    <div className="postContent">
                        <p>Lorem ipsum dolor sit amet, duo luptatum evertitur ut, nam in rebum discere offendit, quem posse feugait ad ius. Id vel facer contentiones, ut liber ornatus has, qui te inermis menandri. No has volumus erroribus torquatos. Facer solet albucius vis ei, id eos aliquam minimum postulant.</p>
                    </div>
                </div>

                <div className="extraPosts">
                <div className="postHeader">
                <h4 className="postHeading">RE: General Chat</h4>
                    <span className="postInfo"> <strong>Kyle Style</strong> May 12, 2019, 11:47 PM</span>
                    </div>
                    <div className="postContent">
                        <p>Lorem ipsum dolor sit amet, duo luptatum evertitur ut, nam in rebum discere offendit, quem posse feugait ad ius. Id vel facer contentiones, ut liber ornatus has, qui te inermis menandri. No has volumus erroribus torquatos. Facer solet albucius vis ei, id eos aliquam minimum postulant.</p>
                    </div>
                </div>


                <div className="extraPosts">
                <div className="postHeader">
                <h4 className="postHeading">RE: General Chat</h4>
                    <span className="postInfo"> <strong>Kyle Style</strong> May 12, 2019, 11:47 PM</span>
                    </div>
                    <div className="postContent">
                        <p>Lorem ipsum dolor sit amet, duo luptatum evertitur ut, nam in rebum discere offendit, quem posse feugait ad ius. Id vel facer contentiones, ut liber ornatus has, qui te inermis menandri. No has volumus erroribus torquatos. Facer solet albucius vis ei, id eos aliquam minimum postulant.</p>
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


export default general;
