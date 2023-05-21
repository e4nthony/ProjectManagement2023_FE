
/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';
import './styles/HomePage.css';
import logo from '../../pictures/BidZone-logo.png';

function HomePage() {
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

    const navigate = useNavigate();

    function handleClick() {
        navigate('/login');
    }

    return (
        <div className='main-container'>
            <div>
                <h1>Home page !</h1>
                <div><img src={logo} alt='' /></div>
                <p className='about-par' style={{ color: 'black' }}>
                    Welcome to our project in Project Managment course 2023
                </p >
                <div className='posts'>
                    {posts.map((post) => {
                        return (
                            <div
                                className="post"
                                onClick={() => {
                                    console.log(post.title + ' has been clicked')
                                }} >
                                <div className="title"> {post.title} </div>
                                <div className="body">{post.postText}</div>
                                <div className="body">{post.postImage}</div>
                                <div className="footer">{post.postMinPrice}</div>
                                <div className="footer">{post.postMaxTime}</div>
                                <div className="footer">{post.username}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
export default HomePage;
