import { AuthTokenUseCaseRepository } from "../../infrastructure/provider/repository/auth"
import { AuthTokenUseCaseRequest, AuthTokenUseCaseResponse } from "../../domain/usecase/ucio/auth"
import { AuthTokenUseCaseValidate } from "../../infrastructure/provider/validate/auth"
import { AuthTokenUseCase } from "../../domain/usecase/auth"

class AuthTokenController {
  async execute(ucReq: AuthTokenUseCaseRequest): Promise<AuthTokenUseCaseResponse> {

    const validate = new AuthTokenUseCaseValidate()
    const repository = new AuthTokenUseCaseRepository()
    const usecase = new AuthTokenUseCase(validate, repository)

    return await usecase.authToken(ucReq)
  }
}

export {
  AuthTokenController
}
