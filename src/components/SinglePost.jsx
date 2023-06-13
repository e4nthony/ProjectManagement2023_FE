/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */

import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './styles/SinglePostStyles.module.css';

import authService from '../services/authService';
import { AuthContext } from './AuthContext';

import defaultImage from '../pictures/default-image2.png';



function GenerateSinglePost(post) {
    // const navigate = useNavigate();

    const { authState, setAuthState } = useContext(AuthContext);
    //const [likeStatus, setLikeStatus] = useState(null); //todo pull info from db
    // const [followStatus, setFollowStatus] = useState(null); //todo pull info from db
    // const [PostId, setPostId] = useState(null); //todo pull info from db

    // const activeUserEmail = localStorage.getItem('activeUserEmail').toString();

    let likeStatus = false; // is following
    function setLikeStatus(flag) {
        likeStatus = flag;
    }
    function getLikeStatus() {
        return likeStatus;
    }

    let followStatus = false;
    function setFollowStatus(flag) {
        followStatus = flag;
    }
    function getFollowStatus() {
        return followStatus;
    }

    /* --- Single Post Functions --- */
    function handlePlaceBid() {
        console.log('HomePage: user attempts to place bid.');
    }

    function handleMessageClick() {
        console.log('HomePage: user attempts to start chat with buyer.');
    }

    async function isfollow() {
        const data = {
            /* reads values from fields */
            user: localStorage.getItem('activeUserEmail'),
            author: post.author_email,
        };
        try {
            const res = await authService.isfollow(data);
            if (res.status === 200) {
                if (res.data.flag === true) {
                    setFollowStatus(true);
                    console.log(data.user + ' is following ' + data.author)
                    return 'following';
                }
                else {
                    console.log(data.user + ' is not following ' + data.author)
                    setFollowStatus(false);
                    return 'follow';
                }
            }
        } catch (err) {
            console.log('failed to follow: ' + err);
            return 'follow';
        }
        return 'follow';
    }

    async function isliked() {
        const data = {
            /* reads values from fields */
            user: localStorage.getItem('activeUserEmail'),
            postID: post._id,
        };

        try {
            const res = await authService.isliked(data);
            if (res.status === 200) {
                if (res.data.flag === true) {
                    setLikeStatus(true);
                    console.log(data.user + ' liked post with id: ' + data.postID)
                    return true;
                }
                else {
                    console.log(data.user + ' not like post with id: ' + data.postID)
                    setLikeStatus(false);
                    return false;
                }
            }
        } catch (err) {
            console.log('failed to follow: ' + err);
            return false;
        }
        return false;
    }

    async function handleFollowClick() {
        console.log('HomePage: user attempts to follow the buyer.');

        /*/user/follow(user,author)
        /user/isfollowing*/

        const data = {
            /* reads values from fields */
            user: localStorage.getItem('activeUserEmail'),
            author: post.author_email,
        };

        try {
            const res = await authService.follow(data);

            if (res.status !== 200) {
                console.log(data.user + ' can not following ' + data.author)
                return;
            }
        } catch (err) {
            console.log('failed to follow: ' + err);
        }
        if (getFollowStatus())
            setFollowStatus(false);
        else
            setFollowStatus(true);

        let followBTN = document.getElementById(post._id + 'followButton')

        if (getFollowStatus())
            followBTN.textContent = 'following';
        else
            followBTN.textContent = 'follow';
    }

    async function handleLike() {
        console.log('HomePage: user attempts to like the post.');

        const data = {
            /* reads values from fields */
            user: localStorage.getItem('activeUserEmail'),
            postID: post._id,
        };

        try {
            const res = await authService.like(data);

            if (res.status !== 200) {
                console.log(data.user + ' can not like the post with id: ' + data.author)
                return;
            }
        } catch (err) {
            console.log('failed to like post: ' + err);
        }
        if (getLikeStatus())
            setLikeStatus(false);
        else
            setLikeStatus(true);

        let likeBTN = document.getElementById(post._id + 'likeButton');
        if (getLikeStatus)
            likeBTN.style.fill = "black";
        else
            likeBTN.style.fill = "red";
    }

    function handleShare() {
        console.log('HomePage: user attempts to share the post.');

        navigator.clipboard.writeText(document.URL + '/post/' + post._id);
        document.getElementById(post._id + 'copiedText').style.display = 'flex';
        setTimeout(function () {
            document.getElementById(post._id + 'copiedText').style.display = 'none';
        }, 1250);
    }

    // function timer() {
    //     var countDownDate = new Date(post.expirationTime); // date and time of exiration

    //     // Update the count down every sec
    //     var x = setInterval(function () {

    //         // Get current date and time
    //         var now = new Date().getTime();

    //         // Find the distance between now and the count down date
    //         var distance = countDownDate - now;

    //         // Time calculations for days, hours, minutes and seconds
    //         var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //         var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //         var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //         // Update timer
    //         document.getElementById("timer").innerHTML = days + "d " + hours + "h "
    //             + minutes + "m " + seconds + "s ";

    //         // If the count down is finished
    //         if (distance <= 0) {
    //             clearInterval(x);
    //             document.getElementById("timer").innerHTML = "EXPIRED";
    //             document.getElementById("time").innerHTML = "";
    //         }
    //     }, 1000);
    // }
    // timer();

    function timeShow() {
        var countDownDate = new Date(post.expiration_time); // date and time of exiration


        // Get current date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        // var seconds = Math.floor((distance % (1000 * 60)) / 1000);


        // If the count down is finished
        if (distance <= 0) {
            return "EXPIRED";
        }


        return days + "d " + hours + "h " + minutes + "m ";
    }

    function handlePostTittleClick() {
        console.log('HomePage: user attempts to go post\'s info page. (handlePostTittleClick.)');
        // const navString = '/postinfo/' + PostId

        // navigate(navString);
        // navigate('/postinfo');
    }

    async function temp() {
        try {
            const str = await isfollow();
            console.log('strFollow:' + str);
            if (!str || str === 'follow')
                setFollowStatus(false);
            else
                setFollowStatus(true);
            if (getFollowStatus())
                document.getElementById(post._id + 'followButton').textContent = 'following';
            else
                document.getElementById(post._id + 'followButton').textContent = 'follow';
        } catch { }

        try {
            const flag = await isliked();
            console.log('flagLike:' + flag);
            if (flag)
                setLikeStatus(true);
            else
                setLikeStatus(false);
            if (getLikeStatus())
                document.getElementById(post._id + 'likeButton').style.fill = 'red';
            else
                document.getElementById(post._id + 'likeButton').style.fill = 'black';
        } catch { }
    };

    temp();

    return (
        <div
            className={styles.post}
            onClick={() => {
                console.log('post id: ' + post._id + ' has been clicked')
            }}
            id={post._id}>

            <div id='header'>
                <div id='maxBidAndTittle'>
                    <>
                        <div id='maxBid'>{post.current_price}</div>

                        <a>{'$'}</a>
                    </>

                    <div id='tittle' onClick={handlePostTittleClick}>{post.post_tittle}</div>
                </div>
                {/* <div id='status'>Status: Open</div> */}
                <div id='time'>time left: </div>

                {/* <div id='timer'>00:00:00</div> */}
                <div id='timer'>{timeShow()}</div>

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
                        <div type='authorButtons' class='followButton' id={post._id + 'followButton'} onClick={handleFollowClick}>follow</div>
                        <div type='authorButtons' class='messageButton' id={post._id + 'messageButton'} onClick={handleMessageClick}>start chat</div>
                        <div type='authorButtons' class='shareButton' id={post._id + 'shareButton'} onClick={handleShare}>Share</div>
                        <div type='authorButtons' class='copiedText' id={post._id + 'copiedText'}>Copied!</div>
                    </div>}

                </div>

                {/* <div type='button' id='likeButton' onClick={handleLike}>like</div> */}
                {authState && <button class='likeButton' id={post._id + 'likeButton'} onClick={handleLike}>
                    <svg class="icon" width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path></svg>
                </button>}

            </div>


            {/* DEBUG dev _id */}
            <div id='index'>{'post_id: ' + post._id}</div>


        </div>
    );
}

export default GenerateSinglePost;
