/* eslint-disable */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './styles/CreatePost.module.css';
import user_api from '../../api/user_api';

function CreatePost() {
    const navigate = useNavigate();

    const initialValues = {
        title: '',
        postText: '',
        postMinPrice: '',
        postMaxTime: '',
        //postImage: '',
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("This field can't be empty !"),
        postText: Yup.string().required("This field can't be empty !"),
        postMinPrice: Yup.number().required("This field can't be empty !"),
        postMaxTime: Yup.date().required("This field can't be empty !").min(new Date(), 'Expiration time must be in the future !'),
        //postImage: Yup.string().required("his field can't be empty !"),
    });

    const onSubmit = (data) => {
        //here you can see how the data orgenized after a post has been created
        // we need to send 'data' var to the server and save the post in our database
        console.log('title: ' + data.title);
        console.log('postText: ' + data.postText);
        console.log('postMinPrice: ' + data.postMinPrice);
        console.log('postMaxTime: ' + data.postMaxTime);
        //console.log('postImage: ' + data.postImage);
        const post = {
            post_tittle: data.title,
            post_text: data.postText,
            starting_price: data.postMinPrice,
            //timer: data.postMaxTime,
            //starting_time: Date(),
            expirationTime: data.postMaxTime,
            author_email: localStorage.getItem("activeUserEmail")
        };
        async function temp() {

            try {
                const res = await user_api.create_post(post);
                if (res.status === 200) {
                    alert(res.data.msg);
                    navigate("/");
                }
            } catch (e) { console.log(e); }
        }
        temp();
    };

    return (
        <div className={styles.createPostPage}>
            <h1>Create Post !</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <Form className={styles.formContainer}>
                    <label>Post title: </label>
                    <ErrorMessage name='title' component='span' />
                    <Field
                        autocomplete='off'
                        id='createPostFields'
                        name='title'
                        placeholder='Write here the title of your post..'
                    />
                    <label>Post text: </label>
                    <ErrorMessage name='postText' component='span' />
                    <Field
                        autocomplete='off'
                        id='createPostFields'
                        name='postText'
                        placeholder='Write here your description..'
                    />

                    <label>Minimum price: </label>
                    <ErrorMessage name='postMinPrice' component='span' />
                    <Field
                        autocomplete='off'
                        id='createPostFields'
                        name='postMinPrice'
                        placeholder='Enter your price in USD..'
                    />
                    <label>Expiration date: </label>
                    <ErrorMessage name='postMaxTime' component='span' />
                    <Field
                        type='datetime-local'
                        autocomplete='off'
                        id='createPostFields'
                        name='postMaxTime'
                        placeholder='Set your timer in minutes..'
                    />
                    {/*<label>Image: </label>
                    <ErrorMessage name='postImage' component='span' />
                    <Field
                        autocomplete='off'
                        id='createPostFields'
                        type='file'
                        name='postImage'

    />*/}
                    <button id='submit' type='submit'>Create Post</button>
                </Form>
            </Formik>
        </div>
    );
}

export default CreatePost;