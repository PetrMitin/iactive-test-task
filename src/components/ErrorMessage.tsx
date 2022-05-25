import { FC } from "react";
import './ErrorMessage.scss'

const ErrorMessage: FC = () => {
    return (
        <div className="error-message">
            Oops! Something went wrong! Try refreshing page...
        </div>
    )
}

export default ErrorMessage