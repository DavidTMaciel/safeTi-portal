import { TokenPayloadEntity } from "../../domain/entity/token"

class ContextGraphQL {
  public token: string | null
  public tokenPayload: TokenPayloadEntity | null

  constructor(token: string | null, tokenPayload: TokenPayloadEntity | null) {
    this.token = token
    this.tokenPayload = tokenPayload
  }
}

export {
  ContextGraphQL
}
