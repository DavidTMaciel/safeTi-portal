import { ErrorEntity } from "../../entity/error"
import { TokenPayloadEntity } from "../../entity/token"

class AuthTokenUseCaseRequest {
    public token: string

    constructor(token: string) {
        this.token = token
    }
}

class AuthTokenUseCaseResponse {
    public payload: TokenPayloadEntity | null
    public error: ErrorEntity | null

    constructor(payload: TokenPayloadEntity | null, error: ErrorEntity | null) {
        this.payload = payload
        this.error = error
    }
}

export {
    AuthTokenUseCaseRequest,
    AuthTokenUseCaseResponse
}
