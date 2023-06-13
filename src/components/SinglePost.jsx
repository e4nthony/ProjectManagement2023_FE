/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */

import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './styles/SinglePostStyles.module.css';


import { AuthContext } from './AuthContext';

import defaultImage from '../pictures/default-image2.png';



function GenerateSinglePost(post) {
    // const navigate = useNavigate();

    const { authState, setAuthState } = useContext(AuthContext);
    // const [likeStatus, setLikeStatus] = useState(null); //todo pull info from db
    // const [followStatus, setFollowStatus] = useState(null); //todo pull info from db
    // const [PostId, setPostId] = useState(null); //todo pull info from db

    // const activeUserEmail = localStorage.getItem('activeUserEmail').toString();


    /* --- Single Post Functions --- */
    function handlePlaceBid() {
        console.log('HomePage: user attempts to place bid.');
    }

    function handleMessageClick() {
        console.log('HomePage: user attempts to start chat with buyer.');
    }

    function handleFollowClick() {
        console.log('HomePage: user attempts to follow the buyer.');
    }

    function handleLike() {
        console.log('HomePage: user attempts to like the post.');
        setLikeStatus(likeStatus);
    }

    function handlePostTittleClick() {
        console.log('HomePage: user attempts to go post\'s info page. (handlePostTittleClick.)');
        // const navString = '/postinfo/' + PostId

        // navigate(navString);
        // navigate('/postinfo');
    }

    
    return (
        <div id='singlePost'
            className={styles.post}
            onClick={() => {
                console.log('post id: ' + post._id + ' has been clicked')
            }} >

            <div id='header'>
                <div id='maxBidAndTittle'>
                    <>
                        <div id='maxBid'>{post.current_price}</div>

                        <a>{'$'}</a>
                    </>
                    
                    <div id='tittle' onClick={handlePostTittleClick}>{post.post_tittle}</div>
                </div>
                {/* <div id='status'>Status: Open</div> */}
                {authState && <button type='button' id='placeBidButton' onClick={handlePlaceBid}>Place Bid</button>}
            </div>

            <div id='body'>

                <div id='desctiption'>{post.post_text}</div>

                <div id='picContainer'>{post.postImage}
                    {/* <img id='pic' src={defaultImage} alt='post_image' >{post.postImage}</img> */}
                    {/* <div id='pic'></div> */}
                    {/* <svg id='default_pic' src='../../pictures/default-image-icon.svg' alt="default_image"></svg> */}
                    {/* <YourSvg /> */}
                    {/* <YourSvg class={'icon'} width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path></YourSvg> */}
                    {/* <YourSvg/> */}
                </div>

            </div>

            <div id='footer'>
                <div id='authorContainer'>
                    <>
                        <a>{'author:'}</a>
                        <div id='author'>{post.author_email}</div>
                    </>
                    {/* what about timer ??? */}
                    {/* <div id='timer'>{ }</div> */}

                    {authState && <div id='authorButtons'>
                        <div type='authorButtons' id='followButton' onClick={handleFollowClick}>follow</div>
                        <div type='authorButtons' id='messageButton' onClick={handleMessageClick}>start chat</div>
                    </div>}

                </div>

                {/* <div type='button' id='likeButton' onClick={handleLike}>like</div> */}

                {authState && <button id='likeButton' onClick={handleLike}>
                    <svg class="icon" width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path></svg>
                </button>}

            </div>


            {/* DEBUG dev _id */}
            {/* <div id='index'>{'post_id: ' + post._id}</div> */}


        </div>
    );
}

export default GenerateSinglePost;
