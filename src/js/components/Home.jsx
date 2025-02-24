import React from "react";
import Units from "./Units";

//create your first component
const Home = () => {
	return (
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
			<Units />
		</div>
	);
};

export default Home;