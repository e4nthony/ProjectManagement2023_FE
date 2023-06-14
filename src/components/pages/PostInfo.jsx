/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */

import React, { useEffect, useState, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate, useParams } from 'react-router-dom';

import styles from './styles/PostInfoStyles.module.css';

import postService from '../../services/postService';

import { AuthContext } from '../AuthContext';

/* helps to print circular objects as string */
import { inspect } from 'util'; //DEBUG

import GenerateSinglePost from '../SinglePost';


function PostInfo() {
    // const [feedMode, setFeedMode] = useState('explore');

    const [postData, setPostData] = useState([]);
 
    const { authState, setAuthState } = useContext(AuthContext);
    const { postId } = useParams();  /* param from url */


    async function loadPost() {
        try {
            const res = await postService.get_post_by_id(postId);
            console.log('PostInfo: return from postService.get_post_by_id(): ' + inspect(res)) //DEBUG
            console.log('PostInfo: res.data.post: ' + inspect(res.data.post)) //DEBUG
            setPostData(res.data.post);
        } catch (err) {
            console.log('PostInfo: ERROR: ' + err);
        }
    }

    useEffect(() => {
        loadPost();
    }, []);

    return (
        <div>
            {/* --- Post Box --- */}
            <div className={styles.postBox}>

                <ul>
                    {postData.map(GenerateSinglePost)}
                </ul>

            </div>
        </div>
    );
}
export default PostInfo;
