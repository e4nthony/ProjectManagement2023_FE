<<<<<<< HEAD
import './chatOnline.module.css'
=======
import style from './chatOnline.module.css'
>>>>>>> 1ac838bd0952baddf2572013c6952c5c4ec5f10e
import React from 'react';

function ChatOnline () {
    return (
        <div className={style.chatOnline}>
            <div className={style.chatOnlineFriend}>
            <div className={style.chatOnlineImgContainger}>
                <img className={style.chatOnlineImg}
                src='../../../preview/Create Post Page.png'
                alt=''/>
                <div className={style.chatOnlineBadge}></div>
            </div>
            </div>
            <span className={style.chatOnlinename}>Jhon Doe</span>
        </div>
    );
}

export default ChatOnline;
