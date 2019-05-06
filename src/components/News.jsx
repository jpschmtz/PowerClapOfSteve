import React, { Component } from 'react';
// Grab the articles as a json
// import Scrape from './Scrape'

class News extends Component {
		state = {
		response: '',
		post: '',
		responseToPost: '',
	  };
	  
	componentDidMount() {
		// this.callApi()
		fetch('http://localhost:8080/scrape')
		.then(res => {
			this.setState({ response: res.express });
			console.log("Here");
		})
		.catch(err => console.log(err));
	}

	callApi = async () => {
		const response = await fetch('/scrape');
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
