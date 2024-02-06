interface AuthTokenUseCaseValidateInterface {
    authToken(token: string): Promise<string | null>
}

export {
    AuthTokenUseCaseValidateInterface
}
