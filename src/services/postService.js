/* eslint-disable */
/* the line above disables eslint check for this file (temporarily) todo:delete */

import user_api from '../api/user_api'

/* This service calls api functions (to write less logic at pages) */


async function create_post(newPostData) {
    console.log('postService: trying to create a new post...');

    // /* Pack data to 'JSON' format to send via web */
    // const newPostData = {
    //     post_tittle: newPostData.post_tittle,
    //     post_text: newPostData.post_text,
    //     author_email: newPostData.author_email,
    //     starting_price: newPostData.starting_price,    // (Integer)
    //     current_price: newPostData.starting_price   // (Integer)                          // (Integer)
    // };

    try {
        const res = user_api.create_post(newPostData);

        const statusCode = (await res).status;
        console.log('postService: got response from server, status code: ' + statusCode);
        console.log('postService: response: ' + JSON.stringify(res, null, 2));
        if (res.status === 200) {
            console.log('postService: post created successfully: ' + JSON.stringify(newPostData));
        } else if (res.status === 400) {
            console.log('postService: post creation failed: ' + JSON.stringify(newPostData));
        }
        return res;
    } catch (err) {
        console.log('postService: post creation failed, error: ' + err);
    }
}

async function get_all_posts() {
    console.log('postService: trying to get_all_posts...');

    try {
        const res = user_api.get_all_posts();

        const statusCode = (await res).status;
        console.log('postService: got response from server, status code: ' + statusCode);
        console.log('postService: response: ' + JSON.stringify(res, null, 2));
        if (res.status === 200) {
            console.log('postService: got all posts successfully.');
        } else if (res.status === 400) {
            console.log('postService: get_all_posts failed.');
        } else if (res.status === 404) {
            console.log('postService: no posts found.');
        }
        return res;
    } catch (err) {
        console.log('postService: post get_all_posts failed, error: ' + err);
    }
}


export default {
    create_post,
    get_all_posts
};
