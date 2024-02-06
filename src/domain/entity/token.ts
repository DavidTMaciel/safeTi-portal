class TokenPayloadEntity {
    public accountID: number
    public userID: number

    constructor(accountID: number, userID: number) {
        this.accountID = accountID
        this.userID = userID
    }
}

export {
    TokenPayloadEntity
}
