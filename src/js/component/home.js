import React from "react";
import Red from "./component/Red.js";

function Home() {
	return (
		<div>
			<div className="trafficTop"></div>
			<div className="container">
				<div className="light firstColor">{Red}</div>
				<div className="light firstColor"></div>
				<div className="light firstColor"></div>
			</div>
		</div>
	);
}

export default Home;
