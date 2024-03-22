import React from "react";
import ProfileCard from "./components/ProfileCard";
import "./App.css";
import avatar from "./images/image-rita.jpg";

function App() {
	const profileData = {
		picture: avatar,
		name: 'ABDELATI ELHOUARI',
		jobTitle: 'BACKEND DEVELOPER ',
		bio: "I'm a skilled backend developer with expertise in PHP, Laravel, and Node.js technologies. With a passion for building scalable and efficient server-side solutions, I excel in designing and implementing robust APIs, managing database systems, and ensuring seamless communication between frontend and backend components. My experience spans across developing RESTful APIs, creating secure authentication systems.",
	  };
	return (
		<div className="background">
			<ProfileCard data={profileData} />
		</div>
	);
}

export default App;
