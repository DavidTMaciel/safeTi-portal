import { TokenPayloadEntity } from "../../entity/token"

interface AuthTokenUseCaseRepositoryInterface {
    decodeToken(token: string): TokenPayloadEntity | null
}

export {
    AuthTokenUseCaseRepositoryInterface
}
