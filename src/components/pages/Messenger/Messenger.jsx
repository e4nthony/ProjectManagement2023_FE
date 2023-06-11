import Message from '../../message/Message';
import Conversation from '../../Conversation/Conversation'
import './Messenger.css';
import React, { useContext, useEffect, useState } from 'react';
import ChatOnline from '../../chatOnline/ChatOnline';
import { AuthContext } from '../../AuthContext';
import axios from 'axios';
import { async } from 'q';

 function Messenger () {
    const [conversation, setConversations] = useState([]);

    const {user} = useContext(AuthContext);

    useEffect( () => {
        const getConversations = async () => {
            try {
                const res = await exios.get("/conversations/" + user._id);
                setConversations(res.data);
            }catch (err) {
                console.log(err);
            }
            
        };
        getConversations();
    }, [user._id]);

    return (
        <div className="messenger">
            <div className="chatMenu">
                <div className="chetMenuWrapper">
                    <input placeholder="Search for friends" className="chatMenuInput" />
                    {Conversation.map((c) => (
                        <div onClick={() => setCurrentChat(c)}>
                            <Conversation conversation = {c} currentUser = {user} />
                        </div>    
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
