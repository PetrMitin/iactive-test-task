import React, {FC} from 'react'

const TextControls: FC<{
    isTextHidden: boolean, 
    setIsHidden: React.Dispatch<React.SetStateAction<boolean>>
}> = ({isTextHidden, setIsHidden}) => {
    return (
        <span className='text-controls'>
            {isTextHidden && <p onClick={() => {setIsHidden(false)}}>Далее</p>}
            {!isTextHidden && <p onClick={() => {setIsHidden(true)}}>Скрыть</p>}
        </span>
    )
}

export default TextControls