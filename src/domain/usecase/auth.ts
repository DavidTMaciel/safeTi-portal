import { InternalServerError, PreconditionError, TAG_INTERNAL_SERVER_ERROR, TAG_PRE_CONDITION_ERROR } from "../entity/error"
import { AuthTokenUseCaseRepositoryInterface } from "./repository/auth"
import { AuthTokenUseCaseRequest, AuthTokenUseCaseResponse } from "./ucio/auth"
import { AuthTokenUseCaseValidateInterface } from "./validate/auth"

class AuthTokenUseCase {
    public validate: AuthTokenUseCaseValidateInterface
    public repository: AuthTokenUseCaseRepositoryInterface

    constructor(validate: AuthTokenUseCaseValidateInterface, repository: AuthTokenUseCaseRepositoryInterface) {
        this.validate = validate
        this.repository = repository
    }

    async authToken(req: AuthTokenUseCaseRequest): Promise<AuthTokenUseCaseResponse> {
        try {
            const messageError = await this.validate.authToken(req.token)

            if (!messageError) {
                const tokenPayload = this.repository.decodeToken(req.token)

                if (tokenPayload) {
                    return new AuthTokenUseCaseResponse(tokenPayload, null)
                } else {
                    console.log(TAG_PRE_CONDITION_ERROR, "Token inválido")
                    return new AuthTokenUseCaseResponse(null, new PreconditionError("Token inválido"))
                }
            } else {
                console.log(TAG_PRE_CONDITION_ERROR, messageError)
                return new AuthTokenUseCaseResponse(null, new PreconditionError(messageError))
            }
        } catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error)
            return new AuthTokenUseCaseResponse(null, new InternalServerError(error.message))
        }
    }
}

export {
    AuthTokenUseCase
}
