/* eslint-disable */
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './styles/CreatePost.module.css';

function CreatePost() {
    const initialValues = {
        title: '',
        postText: '',
        postMinPrice: '',
        postMaxTime: '',
        postImage: '',
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("This field can't be empty !"),
        postText: Yup.string().required("This field can't be empty !"),
        postMinPrice: Yup.string().required("This field can't be empty !"),
        postMaxTime: Yup.string().required("This field can't be empty !"),
        postImage: Yup.string().required("his field can't be empty !"),
    });

    const onSubmit = (data) => {
        //here you can see how the data orgenized after a post has been created
        // we need to send 'data' var to the server and save the post in our database
        console.log('title: ' + data.title);
        console.log('postText: ' + data.postText);
        console.log('postMinPrice: ' + data.postMinPrice);
        console.log('postMaxTime: ' + data.postMaxTime);
        console.log('postImage: ' + data.postImage);
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
                    <label>Maximum time: </label>
                    <ErrorMessage name='postMaxTime' component='span' />
                    <Field
                        autocomplete='off'
                        id='createPostFields'
                        name='postMaxTime'
                        placeholder='Set your timer in minutes..'
                    />
                    <label>Image: </label>
                    <ErrorMessage name='postImage' component='span' />
                    <Field
                        autocomplete='off'
                        id='createPostFields'
                        type='file'
                        name='postImage'

                    />
                    <button id='submit' type='submit'>Create Post</button>
                </Form>
            </Formik>
        </div>
    );
}

export default CreatePost;