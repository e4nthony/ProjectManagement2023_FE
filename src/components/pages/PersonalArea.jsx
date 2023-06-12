/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import authService from '../../services/authService';
import Rating from 'react-rating';

function PersonalArea() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // change to false when log in
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('2000-01-01');
  const [userName, setUserName] = useState('');
  const [rating, setRating] = useState(0); // New rating state
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State to control success message
  const [averageRating, setAverageRating] = useState(0); // State for average rating
  const [ratings, setRatings] = useState([4, 5, 3, 4]); // Example ratings array


  const handleRatingChange = (value) => {
    setRating(value);
    handleRatingSubmit(value);
  };

  const handleRatingSubmit = async (value) => {
    try {
      console.log('Rating:', email);

      // Check if user is trying to rate themselves
      if (localStorage.getItem('activeUserEmail') !== email) {
        // TODO: Send the rating to the server and save it in the MongoDB database

        // Update the ratings array with the new rating
        const newRatings = [...ratings, value];

        // Calculate the new average rating
        const totalRating = newRatings.reduce((sum, rating) => sum + rating, 0);
        const newAverageRating = totalRating / newRatings.length || 0;

        // Update the state with the new average rating and ratings array
        setAverageRating(newAverageRating);
        setRatings(newRatings);

        // Show the success message
        setShowSuccessMessage(true);

        // Clear the success message after 2.5 seconds
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 2500);
      } else {
        console.log('You cannot rate yourself.');
      }
    } catch (error) {
      console.error('Error saving rating:', error);
    }
  };

  async function getInfo() {
    let email1;
    email1=localStorage.getItem('activeUserEmail').toString()
    setEmail(email1); // Corrected line
    //let email1 = localStorage.getItem('activeUserEmail');
    console.log('pppp', email1.toString());
    const res = await authService.get_user_info_by_email(email1); //to do 
    console.log(res.data.user_info._id);
    console.log(res);
    setEmail(res.data.user_info.email);
    setUserName(res.data.user_info.userName);
    setDateOfBirth(res.data.user_info.birth_date);
    setFirstName(res.data.user_info.firstName);
    setLastName(res.data.user_info.lastName);
    // TODO: Retrieve ratings from MongoDB and calculate the average rating
    // Replace the following line with the logic to calculate the average rating
    const totalRating = ratings.reduce((sum, rating) => sum + rating, 0);
    const averageRating = totalRating / ratings.length || 0;
    setAverageRating(averageRating);
  }

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div>
      <h1>Personal Area</h1>
      {isLoggedIn ? (
        <div>
          {/* User Information */}
          <div>
            <strong>First Name: {firstName} </strong>
          </div>
          <div>
            <strong>Last Name: {lastName} </strong>
          </div>
          <div>
            <strong>Username: </strong>
            {userName}
          </div>
          <div>
            <strong>Email: </strong>
            {email}
          </div>
          <div>
            <strong>Password: </strong>
            ********
          </div>
          {/* Following and Followers */}
          <div className="following-followers">
            <div className="following-followers-item">
              <h3>Following</h3>
              <span>{}</span>
            </div>
            <div className="following-followers-item">
              <h3>Followers</h3>
              <span>{}</span>
            </div>
          </div>
          {/* Rating */}
          {localStorage.getItem('activeUserEmail') !== email && ( // Check if user is not rating themselves
            <div>
              <label>Rate the user:</label>
              <Rating
                initialRating={rating}
                emptySymbol={<span className="rating-icon">&#9734;</span>}
                fullSymbol={<span className="rating-icon selected">&#9733;</span>}
                onChange={handleRatingChange}
              />
            </div>
          )}
          {/* Average Rating */}
          <div>
            <strong>Average Rating: </strong>
            {averageRating.toFixed(1)} stars
          </div>
          {/* Success Message */}
          {showSuccessMessage && <div className="success-message">Rating submitted successfully!</div>}
          {/* Edit Info and Delete Account buttons */}
          <Link to="/personalarea/editinfo">
            <button type="button">Edit Info</button>
          </Link>

          <Link to="/personalarea/confirmanddelet">
            <button type="button">Delete My Account</button>
          </Link>
        </div>
      ) : (
        <div>
          Please log in to view your information.
          <Link to="/login">
            <button type="button">Login</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default PersonalArea;
