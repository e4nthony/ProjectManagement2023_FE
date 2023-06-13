/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */

import React, { useEffect, useState, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';

import styles from './styles/PostInfoPageStyles.module.css';

import postService from '../../services/postService';

import { AuthContext } from '../AuthContext';

/* helps to print circular objects as string */
import { inspect } from 'util'; //DEBUG

import GenerateSinglePost from '../SinglePost';


function PostInfo() {
    // const [feedMode, setFeedMode] = useState('explore');

    const [feedData, setFeedData] = useState([]);

    const { authState, setAuthState } = useContext(AuthContext);



    async function loadPost() {

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
        setFeedData([post1]);



        try {
            const res = await postService.get_post_by_id();
            console.log('HomePage: return from postService.get_all_posts(): ' + inspect(res)) //DEBUG

            setFeedData(res.data);
        } catch (err) {
            console.log('HomePage: ERROR: ' + err);
        }

    }

    useEffect(() => {
        loadPost();
    }, []);

    return (
        <div>
            {/* --- Post Box --- */}
            <div className={styles.postBox}>

                {GenerateSinglePost(feedData)}

            </div>
        </div>
    );
}
export default PostInfo;
