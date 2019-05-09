import React, { Component } from 'react';
import axios from 'axios';
import Image from '../Assets/news2.jpg'
// Grab the articles as a json
// import Scrape from './Scrape'

class News extends Component {
	constructor(){
		super();
		this.state ={
			scrape : [],
		}
	}
	// 	state = {
	// 	response: '',
	// 	post: '',
	// 	responseToPost: '',
	//   };
	  
	componentDidMount() {

		axios.get('http://localhost:8080/scrape')
		.then(result=>{
			// console.log(result);
			return result;
		})
		.then(data => {
			// console.log(data);
			let index =0;
			let subData = data.data.slice(1,10);
			let scrape = subData.map((res) => {
				index ++ ;
				// console.log(res.title);
				// console.log(res.link);
				// console.log(index);
				return(
					<div key= {index.toString()} >
					{/* // <div key= {res.key} > */}
						{/* <p>
						{res.title}
						</p> */}
						<a href={res.link}>{res.title}</a>
						<button onClick={this.save} className="btn btn-primary">Save</button>
					</div>
				)
			})
			this.setState({scrape: scrape});
			// console.log("state", this.state.scrape);
		})
	}

	render(){
		// console.log("Here", this.state.scrape)

	if (this) {
		// console.log("Here", this.state.scrape);
		return (

			<div className="articles">

				<div id="bannerDiv">
					<div id="intro">
						<img className="bannerImage" alt="forumImage" src={Image}/>
						<div id="introCard">
							<h1>News</h1>
						</div>
					</div>
				</div>


				<p>
					<strong>Latest Coding News Heading:</strong>
				</p>
				
				{this.state.scrape}

			</div>
		)
	} else {

		return (
			<div className="articles">

			<div id="bannerDiv">
				<div id="intro">
					<img className="bannerImage" alt="forumImage" src={Image}/>
					<div id="introCard">
						<h1>News</h1>
					</div>
				</div>
			</div>

				<p>{this.state.response}</p>
				<form onSubmit={this.handleSubmit}>
				<p>
					<strong>Post to Server:</strong>
				</p>
				<input
					type="text"
					value={this.state.post}
					onChange={e => this.setState({ post: e.target.value })}
				/>
				<button type="submit">Submit</button>
				</form>
				<p>{this.state.responseToPost}</p>
			</div>
			
		)
		}
	}
}
export default News;
