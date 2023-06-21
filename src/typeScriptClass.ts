class User {
    userName: string;
    userAge: number;

    constructor(userName: string, userAge: number) {
        this.userName = userName;
        this.userAge = userAge
    }

    display(): void {
        console.log(`username :${this.userName} and userage is ${this.userAge}`)
    }
}

const user1 = new User('sudipta dinda',23)

const user2 = new User('souman das',56)

user1.display()

user2.userAge =24

user2.display()