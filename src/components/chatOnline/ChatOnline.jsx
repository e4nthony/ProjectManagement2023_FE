import './chatOnline.module.css'
import React from 'react';

function ChatOnline () {
    return (
        <div className='chatOnline'>
            <div className='chatOnlineFriend'>
            <div className='chatOnlineImgContainger'>
                <img className='chatOnlineImg'
                src='../../../preview/Create Post Page.png'
                alt=''/>
                <div className='chatOnlineBadge'></div>
            </div>
            </div>
            <span className="chatOnlinename">Jhon Doe</span>
        </div>
    );
}

export default ChatOnline;
