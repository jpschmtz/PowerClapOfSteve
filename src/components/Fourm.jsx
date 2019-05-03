import React from 'react'
// TODO - add proptypes

const Fourm = props => {
	if (props.user) {
		return (
			<div className="Fourm">
				<p>Current User:</p>
				<code>
					{JSON.stringify(props)}
				</code>
			</div>
		)
	} else {
		return (
			<div className="Fourm">
				<p>Current User:</p>
				<code>
					{JSON.stringify(props)}
				</code>
			</div>
		)
	}
}

export default Fourm
