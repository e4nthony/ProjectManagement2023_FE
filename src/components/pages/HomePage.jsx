/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';
import styles from './styles/HomeStyles.module.css';
import logo from '../../pictures/BidZone-logo.png';

function HomePage() {
    // const navigate = useNavigate();
    // function handleClick() {
    //     navigate('/login');
    // }

    function handleExploreClick() {
        console.log('\'Explore\' feed selected')
    }

    function handleFollowingClick() {
        console.log('\'Following\' feed selected')
    }





    // dev todo delete
    const post1 = {
        title: 'post1Title',
        postText: 'post1Text',
        postMinPrice: 'post1minPrice',
        postMaxTime: 'post1maxTime',
        postImage: 'post1Image',
        username: 'user1',
        //id - not to display
    };
    const post2 = {
        title: 'post2Title',
        postText: 'post2Text',
        postMinPrice: 'post2minPrice',
        postMaxTime: 'post2maxTime',
        postImage: 'post2Image',
        username: 'user2',
        //id - not to display
    };
    const posts = [post1, post2];









    function GenerateSinglePost(post) {
        return (
            <div id='aPost'
                className={styles.post}
                onClick={() => {
                    console.log(post.title + ' has been clicked')
                }} >

                <div id='title'> {post.title} </div>
                <div id='seller'>{post.username}</div>
                <div id='body'>{post.postText}</div>
                <div id='pic'>{post.postImage}</div>
                <div id='priceANDtimer'>
                    <div id='maxBid'>{post.postMinPrice}</div>
                    <div id='timer'>{post.postMaxTime}</div>
                </div>
                <div id='index'></div>

            </div>
        );
    }

    return (
        <div>

            {/* --- Logo --- */}
            <div id='siteLogo'>
                <img src={logo} alt='site_logo' />
            </div>

            {/* --- Feed --- */}
            <div className={styles.postsList}>

                {/* --- Buttons --- */}
                <div id='feedMode'>
                    <div id='explore' onClick={handleExploreClick}>Explore</div>

                    <div id='following' onClick={handleFollowingClick}>Following</div>
                </div>

                {/* --- Posts List --- */}
                <div>
                    {posts.map(GenerateSinglePost)}
                </div>

            </div>

        </div>
    );
}
export default HomePage;
