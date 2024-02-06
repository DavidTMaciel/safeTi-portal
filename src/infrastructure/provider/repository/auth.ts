import { TokenPayloadEntity } from "../../../domain/entity/token"
import { AuthTokenUseCaseRepositoryInterface } from "../../../domain/usecase/repository/auth"
import { decodeToken } from "../../internal/crypto/jwt"

class AuthTokenUseCaseRepository implements AuthTokenUseCaseRepositoryInterface {
    decodeToken(token: string): TokenPayloadEntity | null {
        return decodeToken(token)
    }
}

export {
    AuthTokenUseCaseRepository
}
