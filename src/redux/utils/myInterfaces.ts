export interface IMessagesState {
    messages: IMessage[],
    isLoading: boolean,
    isError: boolean,
    isReversed: boolean
}

export interface IAttachment {
    type: 'video' | 'image',
    url: string
}

export interface IMessage {
    attachments: IAttachment[],
    author: string,
    channel: string,
    content: string,
    date: string,
    id: string,
    region: string,
    senderNumber: string
}