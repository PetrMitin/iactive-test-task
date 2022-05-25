import {FC, useState}  from 'react'
import { IMessage } from '../redux/utils/myInterfaces'
import Attachment from './Attachment'
import TextControls from './TextControls'
import './Message.scss'

const Message: FC<{message: IMessage}> = ({message}) => {
    const [isTextHidden, setIsHidden] = useState(true)
    const favoriteMsgIds: number[] = JSON.parse(localStorage.getItem('favoriteMessages') || '[]')
    const [isFavorite, setIsFavorite] = useState(favoriteMsgIds.includes(parseInt(message.id)))
    const fontSize = 16
    const currentTextContainerWidth = 810

    const getHHMM = (time: string): string => {
        const date = new Date(Date.parse(time))
        const hours = date.getHours()
        const minutes = date.getMinutes()
        const strHours = hours >= 10 ? hours.toString() : '0' + hours.toString()
        const strMinutes = minutes > 10 ? minutes.toString() : '0' + minutes.toString()
        return strHours + ':' + strMinutes
    }

    const handleFavoriteClick = (): void => {
        const favMsgs: number[] = JSON.parse(localStorage.getItem('favoriteMessages') || '[]')
        if (isFavorite) {
            const filteredFavMsgs = favMsgs.filter(msgId => msgId !== parseInt(message.id))
            setIsFavorite(false)
            localStorage.setItem('favoriteMessages', JSON.stringify(filteredFavMsgs))
        } else {
            favMsgs.push(parseInt(message.id))
            setIsFavorite(true)
            localStorage.setItem('favoriteMessages', JSON.stringify(favMsgs))
        }
    } 

    return (
        <div className="message">
            <div className="content-wrapper">
                <div className="user-info">
                    <div className="avatar-and-name">
                        <div className="avatar">
                            <img src="https://img2.freepng.ru/20180325/wae/kisspng-business-google-account-organization-service-avatar-5ab752c6a54db0.2719189215219637186771.jpg" alt="img" className="avatar-img" />
                            <br />
                            {getHHMM(message.date)}
                        </div>
                        <div className="author-name">
                            {message.author}
                            <br/>
                            <span className='comment'>Текст поста в соц. сетях если это комментарий</span>
                        </div>
                    </div>
                    <div className="icons">
                        <img 
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAAAwMDAPDw86Ojr7+/uVlZXr6+tqamru7u6RkZEYGBgjIyMbGxusrKyGhoa2trbc3NxNTU3GxsagoKB2dnaysrK8vLxZWVn09PQ8PDzNzc1DQ0MqKiqAgICLi4vBEFERAAADCklEQVR4nO2ci1LbMBBF5dRgp48QoCF1m8L//2UHSockMpmUXFl3r+/5AHnPWCv5od2UjDHGGGOMMcYYY4wxxhhjzEVs+3bR9uvaYRRj1fxjVTuUMvTNG33tYEqwLyipuGoOkZuow6cjw6Z2RGjWx4KN2oq6yQzVMnGRGba1QwKTpWGzqB0SGBvGx4bxsWF8bBgfG8bHhvGxYXxsGB8bxseG8bFhfGwYHxvGh8hwuH/Y3uKHpTHc3v29/GMHHpjEcPjxFsADdmgOw+HLfgTX0LE5DH8ehvAZOTaF4ffjGJB3kcHw6msWBFCRwfBXFgNSkcHwesQQp8hgeDNmCFPkNUQpMhiOztIGtWkwGI6tNLi7yGA4slsAFRkM8x0fqUhhmHYFFTkMD5+8sYochqn7VkyRxDB17642l24aLIZp+b7iZXeRxjAtC01UHsPUlVluiAxPTdQLcpHJsEwuUhkW2TS4DE8pfnSikhkWyEU2w7REr6h0hvBc5DNET1RCQ/CmwWiInaiUhtAHOE5DZC6SGgLfNFgNcblIawibqEUMrxCk7jdEEW44rDd3LYRdXt/6kYmKNlzlAxbh/LsINuxHginD2QXZWMPpBJvmsYbhcX+GstxXMJxUsNlNb5j3ZyjLeYfgkIZTZuEzT5MbthMb3kxueGKHFjHUv4f6eai/lurvhzN4ptF/Lp3Bu8UM3g9n8I7/QvHvNP/ztY33WxvqhA2tofz3Uvlv3vL/LeT/Pcn/P5T/Byz/H1/+LIb8eRr5M1EFju5xGcqfTZQ/Xyp/Rlj+nLf8WX35egv5mhn5uif92jX5+kP5GlL9OmD9Wm79enz9ngr6fTH0e5vo96fR7zGk3ydqBr2+ZtCvTb/nXtLvm/iMeu/LYtgwPjaMjw3jY8P42DA+NoyPDeNjw/jYMD42jI8N42PD+NgwPjaMT15r29YOCcwmMzy7DDwIeS+Lde2QwAxZItaOCM5xL4tV7YDwHDZ6UMvCF3p1wf2JKjhFX9n27aLt1VZRY4wxxhhjjDHGGGOMMcZI8wcFdy8L54w1kAAAAABJRU5ErkJggg==" 
                            alt="" 
                            className='icon' />
                        <img 
                            src="https://e.mail.ru/cgi-bin/getattach?file=square-and-bar.png&id=16534717000426627665%3B0%3B1&mode=attachment&x-email=petr09mitin%40mail.ru" 
                            alt="" 
                            className="icon" />
                        <img 
                            src="https://www.seekpng.com/png/full/9-91884_gear-png-image-background-gear-clipart.png" 
                            alt="" 
                            className='icon' />
                        {isFavorite 
                        ? <img 
                            src="https://e.mail.ru/cgi-bin/getattach?file=blue-star.png&id=16534911991590873726%3B0%3B2&mode=attachment&x-email=petr09mitin%40mail.ru" 
                            alt="" 
                            className="icon" 
                            onClick={handleFavoriteClick}/>
                        : <img 
                            src="https://toppng.com/uploads/preview/black-star-11530997434mka7x0rhq9.png" 
                            alt="" 
                            className='icon'
                            onClick={handleFavoriteClick} />}
                    </div>
                </div>
                    <div className={`text-content ${isTextHidden ? 'text-hidden' : 'text-visible'}`}>
                        {message.content}
                        {
                            message.content.length > (currentTextContainerWidth / fontSize) && <TextControls 
                                                            isTextHidden={isTextHidden} 
                                                            setIsHidden={setIsHidden} 
                                                            />
                        }
                    </div>
            </div>
            <div className="attachments-container">
                {message.attachments.map(elem => <Attachment attachment={elem} key={Date.now()}></Attachment>)}
            </div>
        </div>
    )
}

export default Message