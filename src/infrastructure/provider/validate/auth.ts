import { AuthTokenUseCaseValidateInterface } from "../../../domain/usecase/validate/auth"
//import { getTokenCache } from "../../internal/database/redis/token"
//import { checkStringEmpty } from "./validate"

class AuthTokenUseCaseValidate implements AuthTokenUseCaseValidateInterface {
    async authToken(token: string): Promise<string | null> {
   //     if (checkStringEmpty(token)) {
            return 'Token inválido.'
        }

    //    const tokenCache = await getTokenCache(`tatodesk.access-token:${token}`)

     //   if (!tokenCache) {
      //      return 'Token inválido.'
        }
        
       // return null
    //}
//}

export {
    AuthTokenUseCaseValidate
}
