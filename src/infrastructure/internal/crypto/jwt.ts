import { verify } from 'jsonwebtoken'
import { SECRET_KEY } from './config/config'
import { TokenPayloadEntity } from '../../../domain/entity/token'

function decodeToken(token: string): TokenPayloadEntity | null {
    try {
        const data: any = verify(token, SECRET_KEY)
        
        return data
    } catch (error: any) {
        return null
    }
}

export {
    decodeToken
}