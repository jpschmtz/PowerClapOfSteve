import React from 'react'
// Grab the articles as a json
import Scrape from './scrape'

const News = props => {
	if (props.user) {
		return (
			<div className="News">
				<p>Current User:</p>
				<code>
				{/* <Article/>
				<Note/> */}
				</code>
			</div>
		)
	} else {
		return (
			<div className="News">
				<p>Current User:</p>
				<code>
					<Scrape/>
				</code>
			</div>
		)
	}
}

export default News
