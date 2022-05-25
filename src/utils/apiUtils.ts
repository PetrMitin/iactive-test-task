import axios, { AxiosResponse } from "axios"
import { IMessage } from "../redux/utils/myInterfaces"

class apiUtils {
    private axiosInstance = axios.create({
        baseURL: 'http://f0665380.xsph.ru/',
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        params: {
            actionName: 'MessagesLoad',
        }
    })

    getMessages = async (lastMessageId: number = 0): Promise<IMessage[]> => {
        const reqData = new FormData()
        reqData.append('actionName', 'MessagesLoad')
        const res: AxiosResponse<{Messages: IMessage[]}> = await this.axiosInstance.post('', reqData, {
            params: {
                messageId: lastMessageId
            }
        })
        if (res.status < 300) return res.data.Messages
        throw new Error('Failed to fetch messages, try reloading page...')
    }
}

export default new apiUtils()