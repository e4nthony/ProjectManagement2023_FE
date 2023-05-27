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




    // dev todo delete
    const post1 = {
        title: 'post1Title',
        postText: 'post1Text',
        postMinPrice: 'post1minPrice',
        postMaxTime: 'post1maxTime',
        postImage: 'post1Image',
        username: 'user1',
    };
    const post2 = {
        title: 'post2Title',
        postText: 'post2Text',
        postMinPrice: 'post2minPrice',
        postMaxTime: 'post2maxTime',
        postImage: 'post2Image',
        username: 'user2',
    };
    const posts = [post1, post2];









    function GenerateSinglePost(post) {
        return (
            <div
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

            </div>
        );
    }

    return (
        <div>

            {/* --- Logo --- */}
            <div>
                <img src={logo} alt='site_logo' />
            </div>

            {/* --- Feed --- */}
            <div className={styles.postsList}>

                {/* --- Buttons --- */}
                <div>
                    <div className={styles.postsList} onClick={() => {
                        console.log('Explore')
                    }}>Explore</div>

                    <div className={''} onClick={() => {
                        console.log('Following')
                    }}>Following</div>
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
