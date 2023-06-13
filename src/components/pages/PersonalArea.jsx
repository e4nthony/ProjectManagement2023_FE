/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */
import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import authService from '../../services/authService';
import Rating from 'react-rating';
import './styles/PersonalArea.css';
import showFollower from '../showFollower';


// import { AuthContext } from '../AuthContext';

function PersonalArea() {
  const navigate = useNavigate();
  const [my_followers, set_my_followers] = useState([]);
  const [i_following_to, set_i_following_to] = useState([]);
  const { userEmail } = useParams();  /* param from url */

  console.log('PersonalArea: userEmail', userEmail);

  if (userEmail === undefined) {
    navigate('/home');
  }

  // const { authState } = useContext(AuthContext);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState(userEmail);
  const [dateOfBirth, setDateOfBirth] = useState('2000-01-01');
  const [userName, setUserName] = useState('');
  const [rating, setRating] = useState(0); // New rating state
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State to control success message
  const [averageRating, setAverageRating] = useState(0); // State for average rating
  const [ratings, setRatings] = useState([4, 5, 3, 4]); // Example ratings array

  let isMyProfile = false;
  if (userEmail == localStorage.getItem('activeUserEmail')) {
    /* if this page of active user */
    isMyProfile = true;
  }

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
    email1 = userEmail.toString()
    setEmail(email1); // Corrected line
    //let email1 = localStorage.getItem('activeUserEmail');
    console.log('calling authService.get_user_info_by_email()', email1.toString());
    const res = await authService.get_user_info_by_email(email1); //to do 

    set_my_followers(res.data.user_info.my_followers);
    set_i_following_to(res.data.user_info.i_following_to);
    console.log('my followers: ' + my_followers)
    console.log('I following to: ' + i_following_to)
    const statusCode = (await res).status;
    if (statusCode != 200) {
      /* TODO show message: servers busy, please try later */
    } else {
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
  }

  function showFollower(follower) {


    return (
      <div>{follower}</div>
    )
  }

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className='personal-area-page'>
      {isMyProfile && <h1>Personal Area</h1>}

      {!isMyProfile && <h1>User Information</h1>}
      {!!userEmail ? (
        <div className='details'>
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
          {/* <div className="following-followers">
            <div className="following-followers-item">
              <h3>Following</h3>
              <span>{}</span>
            </div>
            <div className="following-followers-item">
              <h3>Followers</h3>
              <span>{}</span>
            </div>
          </div> */}
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

          {isMyProfile && <div>
            <Link to="/personalarea/editinfo">
              <button type="button">Edit Info</button>
            </Link>

            <Link to="/personalarea/confirmanddelet">
              <button type="button">Delete My Account</button>
            </Link>
          </div>}

        </div>
      ) : (
        <div>
          Please log in to view information.
          <Link to="/login">
            <button type="button">Login</button>
          </Link>
        </div>
      )}
      {/* Following and Followers */}
      <div className="following-followers">
        <div className="following-followers-likedPosts">
          <div className='following'>
            <h3>Following:</h3>
            <div className='follower'>
              {my_followers.map(showFollower)}
            </div>
          </div>
          <div className="likedPosts">
            <h3>Liked posts:</h3>
            <span>{ }</span>
          </div>
          <div className='followers'>
            <h3>Followers:</h3>
            <div className='follower'>
              {i_following_to.map(showFollower)}
            </div>
          </div>

        </div>

      </div>


    </div>
  );
}

export default PersonalArea;
