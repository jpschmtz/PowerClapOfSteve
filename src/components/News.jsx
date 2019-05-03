import React from 'react'
// TODO - add proptypes

const News = props => {
	if (props.user) {
		return (
			<div className="News">
				<p>Current User:</p>
				<code>
					{JSON.stringify(props)}
				</code>
			</div>
		)
	} else {
		return (
			<div className="News">
				<p>Current User:</p>
				<code>
					{JSON.stringify(props)}
				</code>
			</div>
		)
	}
}

export default News
