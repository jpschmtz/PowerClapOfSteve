import React from 'react'
// import { render } from "react-dom";
import Meetups from "react-meetup-meetups";

// TODO - add proptypes

const apiKey = "647a0105a375a4c26542a55153b26";
const meetupsIds = [
  19343175,
  3522192,
  18284921,
  18275393,
 18199684,
 6705342
];

const fmtTime = time => new Date(time).toISOString().substring(0, 10);

const Meetup = ({ time, name, event_url }) => (
	<div>
	  {fmtTime(time)} : <a href={event_url}>{name}</a>
	</div>
  );
  
  const renderMeetups = results => {
	return results.map(Meetup);
  };
  

const Calendar = props => {
	if (props.user) {
		return (
			<div className="Calendar">
				<p>Tech Meetups Near You:</p>
				<code>
				<Meetups
				  apiKey={apiKey}
					meetupsIds={meetupsIds}
					render={renderMeetups}
					loading={() => <div>Loading...</div>}
				/>				</code>
			</div>
		)
	} else {
		return (
			<div className="Calendar">
				<p>Tech Meetups Near You:</p>
				<code>
				<Meetups
				  apiKey={apiKey}
					meetupsIds={meetupsIds}
					render={renderMeetups}
					loading={() => <div>Loading...</div>}
				/>				</code>
			</div>
		)
	}
}

export default Calendar
