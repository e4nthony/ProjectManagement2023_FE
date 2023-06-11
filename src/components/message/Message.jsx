import './message.css';
import React from 'react';


// eslint-disable-next-line react/prop-types
export default function Message ({ own }) {
    return (
        <div className= { own ? 'message own' : 'message' }>
            <div className="messageTop">
                <image
                className="messageImg"
                src="../../logo.svg"
                alt=""
                />
                <p className="messageTex">Hello this is a message</p>
            </div>
            <div className="messageBottom">1 hour ago</div>
        </div>
    )
}

