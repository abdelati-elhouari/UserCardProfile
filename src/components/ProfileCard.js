import React from "react";
import "./ProfileCard.css";
// import PropTypes  from "react";
import PropTypes from 'prop-types';


function ProfileCard({data}) {
  const {  picture,name, jobTitle, bio } = data;
	return (
		<div className="card-container">
			<header>
				<img src={picture} alt={name} />
			</header>
			<h1 className="bold-text">
				{name} 
			</h1>
        <h2 className="normal-text">{jobTitle}</h2>
			<h2 className="normal-text">{bio}</h2>
		</div>
	);
}


ProfileCard.propTypes = {
  data: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
  }).isRequired,
};
export default ProfileCard;
