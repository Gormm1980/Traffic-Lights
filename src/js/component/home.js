import React from "react";

function Home() {
	const [active, setActive] = React.useState("light inactive");
	const [active1, setActive1] = React.useState("light inactive");
	const [active2, setActive2] = React.useState("light inactive");

	function changeRed() {
		setActive("light red");
		setActive1("light inactive");
		setActive2("light inactive");
	}

	function changeYellow() {
		setActive1("light yellow");
		setActive("light inactive");
		setActive2("light inactive");
	}

	function changeGreen() {
		setActive2("light green");
		setActive1("light inactive");
		setActive("light inactive");
	}

	return (
		<div>
			<div className="trafficTop"></div>
			<div className="container">
				<button className={active} onClick={changeRed}></button>
				<button className={active1} onClick={changeYellow}></button>
				<button className={active2} onClick={changeGreen}></button>
			</div>
		</div>
	);
}

export default Home;
