import React, { useState } from "react";

function Counters({seconds})
{
	return (<div className="" id="clock">

		<i className="fa-regular fa-clock icon" id="relog"></i>
		<p className="one number">{Math.floor(seconds / 100000) % 10}</p>
		<p className="two number">{Math.floor(seconds / 10000) % 10}</p>
		<p className="three number">{Math.floor(seconds / 1000) % 10}</p>
		<p className="four number">{Math.floor(seconds / 100) % 10}</p>
		<p className="five number">{Math.floor(seconds / 10) % 10}</p>
		<p className="six number">{Math.floor(seconds / 1) % 10}</p>

	</div>
	);
}

export default Counters; 