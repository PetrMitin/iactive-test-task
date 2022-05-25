import {FC, useState} from 'react'
import { IMessage } from '../redux/utils/myInterfaces'
import Message from './Message'
import './MessagesList.scss'

const MessagesList: FC<{messages: IMessage[], setIsReversedTimeOrder: React.Dispatch<React.SetStateAction<boolean>>}> = ({messages, setIsReversedTimeOrder}) => {
    return (
        <div className="messages-list">
            <div className="reverse-controls">
                <button onClick={() => {
                    setIsReversedTimeOrder(false)
                }}>
                    Сначала старые
                </button>
                <button onClick={() => {
                    setIsReversedTimeOrder(true)
                }}>
                    Сначала новые
                </button>
            </div>
            {messages.map(message => <Message message={message} key={message.id}></Message>)}
        </div>
    )
}

export default MessagesList