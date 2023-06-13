/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import Message from '../../message/Message';
import Conversation from '../../Conversation/Conversation'
import './Messenger.css';
import React, { useState, useEffect } from 'react';
import ChatOnline from '../../chatOnline/ChatOnline';
import authService from '../../../services/authService';
import { async } from 'q';



    function Messenger () {
    const [conversation, setConversation] = useState([]);
    const email1 = localStorage.getItem('activeUserEmail');
    const [user, setUser] = useState(null);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        const getConversations = async () => {
            try {
                const res_user = await authService.get_user_info_by_email(email1);
                console.log(res_user);
                setUser(res_user.data.user_info);
                console.log(user);
                console.log('start to get convo');
                const res = await authService.get_convo(localStorage.getItem('id'));
                console.log(res)
                setConversation(res.data);
            } catch (err) {
                console.log(err)
            }
        };
        getConversations()
    }, [localStorage.getItem('id')]);

    useEffect(() => {
     const getMessages = async () => {
        try {
        const res = await authService.get_message(currentChat?._id);
        setMessages(res.data);
        } catch (err) {
                console.log(err)
        }
        };
        getMessages();
    }, [currentChat]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
            sender: localStorage.getItem('id'),
            text: newMessage,
            conversationId: currentChat?._id
        };
    };

    return (
        <div className="messenger">
            <div className="chatMenu">
                <div className="chetMenuWrapper">
                    <input placeholder="Search for friends" className="chatMenuInput" />
                    {conversation.map(c => (
                        <div onClick={() => setCurrentChat(c)}>
                        <Conversation conversation={c} currentUser={user} key={user._id}/>
                        </div>
                    ))}
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    { currentChat
? (
                    <><div className="chatBoxTop">
                        {messages.map((m) => (
                            <Message message={m} own={m.sender === localStorage.getItem('id')} />
                        ))}

                        </div><div className="chatBoxBottom">
                                <textarea className='chatMessageInput'
                                placeholder='write something ...'
                                onChange={(e) => setNewMessage(e.target.value) }
                                value={newMessage}
                                ></textarea>
                                <button className='chatSumbitButton' onClick={handleSubmit}>Send</button>
                            </div></>
                )
: (
                    <span className='noConversationtext'>Open conversation to start a chat.</span>
                    )}
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
