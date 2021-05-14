import React from "react";

//create your first component
function Home() {
    function changeColor() {
        
        const [Color, setColor] = useState (0);
        
 }
	return (
		<div>
			<div className="trafficTop"></div>
			<div className="container">
				<button className="light firstColor" onClick= "changeColor">
                               
                </button>
				<div className="light firstColor"></div>
				<div className="light firstColor"></div>
			</div>
		</div>
	);
}
export default Home;