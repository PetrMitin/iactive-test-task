import {FC}  from 'react'
import { IAttachment } from '../redux/utils/myInterfaces'

const Attachment: FC<{attachment: IAttachment}> = ({attachment}) => {
    return (
        <div className="attachment">
            {attachment.type === 'image' 
            ? <img src={attachment.url} alt='image'></img> 
            : <video src={attachment.url} controls></video>}
        </div>
    )
}

export default Attachment