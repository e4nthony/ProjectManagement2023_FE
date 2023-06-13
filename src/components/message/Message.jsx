/* eslint-disable react/prop-types */
import './message.css';
import React from 'react';
// import { format } from 'timeago'


// eslint-disable-next-line react/prop-types
export default function Message ({ message, own }) {
    return (
        <div className= { own ? 'message own' : 'message' }>
            <div className="messageTop">
                <image
                className="messageImg"
                src="../../logo.svg"
                alt=""
                />
                <p className="messageTex">
                    {message.text}
                </p>
            </div>
            <div className="messageBottom">{(message.createdAt)}</div>
        </div>
    )
}

