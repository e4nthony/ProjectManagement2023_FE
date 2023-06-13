/* eslint-disable  */
import style from './message.module.css';
import React from 'react';
// import { format } from 'timeago'


// eslint-disable-next-line react/prop-types
export default function Message ({ message, own }) {
    return (
        <div className= { own ? 'message own' : 'message' }>
            <div className={style.messageTop}>
                <image
                className={style.messageImg}
                src="../../logo.svg"
                alt=""
                />
                <p className={style.messageTex}>
                    {message.text}
                </p>
            </div>
            <div className={style.messageBottom}>{(message.createdAt)}</div>
        </div>
    )
}

