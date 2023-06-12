import Message from '../../message/Message';
import Conversation from '../../Conversation/Conversation'
import './Messenger.css';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import ChatOnline from '../../chatOnline/ChatOnline';
import authService from '../../../services/authService';



    function Messenger () {
    const [conversation,, setconversation] = useState([]);
    const [user_id, setUser_id] = useState('')
    let user;
        const email1 = localStorage.getItem('activeUserEmail');
    // console.log('the email is : ' + user.data.user_info._id);
    useLayoutEffect(() => {
        const getInfo = async () => {
        console.log('first layout');
        const res_user = await authService.get_user_info_by_email(email1);
                console.log('*** the user info is *** \n ');
                console.log(res_user);
                console.log(res_user.data);
                setUser_id(res_user.data.user_info._id);
        }
        getInfo();
    })
    console.log('********************************');
    console.log(user);
    useEffect(() => {
        const getConversations = async () => {
            try {
                console.log('start to get convo');
                console.log(user_id);
                const res = await authService.get_convo(user_id);
                console.log(res)
                setconversation(1);
            } catch (err) {
                console.log(err)
            }
        };
        getConversations()
    }, [user_id]);

    return (
        <div className="messenger">
            <div className="chatMenu">
                <div className="chetMenuWrapper">
                    <input placeholder="Search for friends" className="chatMenuInput" />
                    {conversation.map(c => (
                        <Conversation key={user.data.user_info._id}/>
                    ))}
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    <div className="chatBoxTop">
                        <Message/>
                        <Message own={true}/>
                        <Message/>
                    </div>
                    <div className="chatBoxBottom">
                        <textarea className='chatMessageInput' placeholder='write something ...'></textarea>
                        <button className='chatSumbitButton'>Send</button>
                    </div>
                </div>
            </div>
            <div className="chatOnline"></div>
            <div className="chatOnlineWrapper">
                <ChatOnline/>
            </div>
        </div>
    )
}
export default Messenger;
