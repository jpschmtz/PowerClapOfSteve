import React from 'react'
// import { render } from "react-dom";
import Meetups from "react-meetup-meetups";
import Image from '../Assets/Meetup2.jpg';
import '../Assets/css/hover.css';
import "./news.css";

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

		<div className="datesCard">
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

<div id="bannerDiv">
						<div id="intro">
						  <img className="bannerImage" alt="welcomeImage" src={Image}/>
						</div>

						<div id="introCard">
						  <h1>Chicago Based</h1>
						  <h2>Tech Meetups</h2>
						</div>
					</div>

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

          <div id="bannerDiv">
						<div id="intro">
						  <img className="bannerImage" alt="welcomeImage" src={Image}/>
						</div>

						<div id="introCard">
						  <h1>Chicago Based</h1>
						  <h2>Tech Meetups</h2>
						</div>
					</div>
					<div className="datesWrapper">
						<h2>Tech Meetups in Chicago:</h2>
						<p>It's extremely important to meet individuals with similar intrests and hobbies. This will give you a chance to grow your network, which is crucial to succeeding in this industry. </p>
						<code>
						<Meetups
							apiKey={apiKey}
							meetupsIds={meetupsIds}
							render={renderMeetups}
							loading={() => <div>Loading...</div>}
						/>				</code>
					</div>
			</div>
		)
	}
}

export default Calendar
