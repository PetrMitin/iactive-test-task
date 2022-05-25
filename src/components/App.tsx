import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/store/store';
import actionCreators from '../redux/actions/actionCreators';
import MessagesList from './MessagesList';
import { useInterval } from '../utils/hooks';
import './App.scss';
import ErrorMessage from './ErrorMessage';
import { reverseArr } from '../redux/utils/utils';

const App: FC = () => {
  const dispatch = useAppDispatch()
  const messages = useAppSelector(state => state.messages)
  const isError = useAppSelector(state => state.isError)
  const isReversed = useAppSelector(state => state.isReversed)
  const [isReversedTimeOrder, setIsReversedTimeOrder] = useState(isReversed)

  const getMessages = () => {
    dispatch(actionCreators.getMessagesAction(messages.length > 0 
    ? parseInt(messages[messages.length - 1].id)
    : 0))
  }

  useEffect(() => {
    dispatch(actionCreators.setIsReversedAction(isReversedTimeOrder))
    dispatch(actionCreators.setMessagesAction(isReversedTimeOrder ? reverseArr(messages) : messages))
  }, [isReversedTimeOrder])

  useEffect(getMessages, [])

  useInterval(getMessages, 5000)

  return (
    <div className="App">
      <header>
        <h1>
          Messages List By PetrMitin
        </h1>
      </header>
      {isError 
      ? <ErrorMessage /> 
      : <MessagesList messages={messages} setIsReversedTimeOrder={setIsReversedTimeOrder} />}
    </div>
  );
}

export default App;
