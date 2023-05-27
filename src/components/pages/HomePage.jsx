/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';
import styles from './styles/HomeStyles.module.css';
import logo from '../../pictures/BidZone-logo.png';

function HomePage() {
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

    const navigate = useNavigate();

            </div>
        );
    }

    return (
        <div className='main-container'>
            <div>
                <h1>Home page !</h1>
                <div><img src={logo} alt='' /></div>

                <div className='posts'>
                    <div className='posts-type'>
                        <div className='explore' onClick={() => {
                            console.log('explore')
                        }}>Explore</div>

                        <div className='following' onClick={() => {
                            console.log('following')
                        }}>Following</div>
                    </div>
                    {posts.map((post) => {
                        return (
                            <div
                                className="post"
                                onClick={() => {
                                    console.log(post.title + ' has been clicked')
                                }} >
                                <div className="title"> {post.title} </div>
                                <div className="seller">{post.username}</div>
                                <div className="body">{post.postText}</div>
                                <div className="pic">{post.postImage}</div>
                                <div className="priceANDtimer"><div className="maxBid">{post.postMinPrice}</div><div className="timer">{post.postMaxTime}</div></div>
                            </div>
                        );
                    })}
                </div>

            </div>

        </div>
    );
}
export default HomePage;
