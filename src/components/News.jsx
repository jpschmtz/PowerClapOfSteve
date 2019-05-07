import React, { Component } from 'react';
import axios from 'axios';
// Grab the articles as a json
// import Scrape from './Scrape'

class News extends Component {
	constructor(){
		super();
		this.state ={
			scrape : {},
		}
	}
	// 	state = {
	// 	response: '',
	// 	post: '',
	// 	responseToPost: '',
	//   };
	  
	componentDidMount() {
		// this.callApi()
		console.log('in here')
		// fetch('http://localhost:8080/scrape')
		// .then(response => 
		// 	{ console.log("response")
		// 		response.json()
		// 	})
		// .then(data => this.setState({ data }));

		axios.get('http://localhost:8080/scrape').then((res)=>{
			console.log(res)
		})
	}

	callApi = async () => {
		const response = await fetch('http://localhost:8080/scrape');
		const body = await response.json();
		if (response.status !== 200) throw Error(body.message);
		return body;
	};

	render(){
	if (this.props) {
		return (
			<div className="articles">
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
	} else {

		return (
			<div className="articles">
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
