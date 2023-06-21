class UserData {
    public userName: string
    public userAge: number
    protected userBankAccountDetailIfscCode: string
    private BankAccountDetail: number

    constructor(userName: string, userAge: number, userBankAccountDetailIfscCode: string, BankAccountDetail: number) {
        this.userName = userName
        this.userAge = userAge
        this.BankAccountDetail = BankAccountDetail
        this.userBankAccountDetailIfscCode = userBankAccountDetailIfscCode
    }

    display(): void {
        console.log(`username :${this.userName} and userage is ${this.userAge} and bank/ac ${this.BankAccountDetail} and userbank ifsc code ${this.userBankAccountDetailIfscCode}`)
    }

    setUserData(BankAccountDetail: number) {
        this.BankAccountDetail = BankAccountDetail

    }
}

class NewUserData extends UserData {
    userJobId: string
    constructor(userName: string, userAge: number, userBankAccountDetailIfscCode: string, BankAccountDetail: number, userJobId: string) {
        super(userName, userAge, userBankAccountDetailIfscCode, BankAccountDetail)
        this.userJobId = userJobId
    }

    //method over writing 

    display(): void {
        console.log(`username :${this.userName} and userage is ${this.userAge}  and userbank ifsc code ${this.userBankAccountDetailIfscCode}`)
    }
}

let user12 = new UserData('sudipta dinda', 23, '234AS55', 5864545687086070867)

user12.setUserData(436)   //use private value set

user12.display()

let user34 = new NewUserData('arup das', 12, '3df45', 57756869, '345rt6')


user34.display()