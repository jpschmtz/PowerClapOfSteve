import React, { Component } from 'react';
import axios from 'axios';
import Image from '../Assets/news2.jpg'
import "./news.css";
import "../Assets/css/hover.css"
// Grab the articles as a json
// import Scrape from './Scrape'

class News extends Component {
	constructor(props){
		super(props);
		this.state ={
			scrape : [],
			// save : false,
		}
		this.save = this.save.bind(this);
	}

	save(index) {
		console.log(index.value);
		console.log(this.state.scrape);
		this.setState(state => ({
		  save: true
		}));
	  }

	componentDidMount() {

		axios.get('https://powerclap0fsteve.herokuapp.com/api/scrape')
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
					<div className="articleTitle" key= {index.toString()} >
					{/* // <div key= {res.key} > */}
						{/* <p>
						{res.title}
						</p> */}
						<a href={res.link}>{res.title}</a>
						<button onClick={this.save} className="hvr-shutter-out-vertical articleSave">Save</button>
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
							<h5>Stay relevant by catching up on important news in the industry!</h5>
						</div>
					</div>
				</div>
				<p>It's extremely important to stay up-to-date with the latest news - especially in an industry that is contstantly evolving. Here, we bring you
					some of the top headlines in the tech world! 
				</p>
				<div id="articlesWrapper">
				{this.state.scrape}
				</div>
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
				<div id="articlesWrapper">
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
			</div>
			
		)
		}
	}
}
export default News;
