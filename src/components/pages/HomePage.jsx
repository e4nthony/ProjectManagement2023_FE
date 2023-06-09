/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */

import React, { useEffect, useState, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';

import styles from './styles/HomeStyles.module.css';

import logo from '../../pictures/BidZone-logo.png';

import postService from '../../services/postService';

import { AuthContext } from '../AuthContext';

/* helps to print circular objects as string */
import { inspect } from 'util'; //DEBUG

import GenerateSinglePost from '../SinglePost';


function HomePage() {
    // const [feedMode, setFeedMode] = useState('explore');
    const [feedData, setFeedData] = useState([]);
    const { authState, setAuthState } = useContext(AuthContext);



    async function reloadFeed(feedMode = 'explore') {
        console.log('HomePage: reloadFeed started. feedMode:' + feedMode) //DEBUG


        if (feedMode == 'explore') {
            try {
                const res = await postService.get_all_posts();
                console.log('HomePage: return from postService.get_all_posts(): ' + inspect(res)) //DEBUG

                setFeedData(res.data);
            } catch (err) {
                console.log('HomePage: ERROR: ' + err);
            }
        }
        else if (feedMode == 'following') {



            // DEBUG dev todo delete
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
            setFeedData([post1, post2]);


        }
    }

    function handleExploreClick() {
        console.log('HomePage: \'Explore\' feed selected');
        // setFeedMode('explore')
        reloadFeed('explore');
    }

    function handleFollowingClick() {
        console.log('HomePage: \'Following\' feed selected');
        // setFeedMode('following')
        reloadFeed('following');
    }

    useEffect(() => {
        reloadFeed();
    }, []);

    return (
        <div>

            {/* --- Logo --- */}
            <div id='siteLogo' className={styles.siteLogo} >
                <img src={logo} alt='site_logo' />
            </div>

            {/* --- Feed --- */}
            <div className={styles.postsList}>

                {/* --- Buttons --- */}
                {authState && <div id='feedMode'>
                    <div id='exploreButton' onClick={handleExploreClick}>Explore</div>

                    <div id='followingButton' onClick={handleFollowingClick}>Following</div>
                </div>}

                {/* --- Posts List --- */}
                <ul>
                    {feedData.map(GenerateSinglePost)}
                </ul>

            </div>

        </div>
    );
}
export default HomePage;
