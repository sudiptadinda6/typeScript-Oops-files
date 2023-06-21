abstract class NewUserDetailed {
    userName: string;
    userAge: number;

    constructor(userName: string, userAge: number) {
        this.userName = userName;
        this.userAge = userAge
    }

    abstract display(): void

}

//Inheritance concept 

class StudentDetail extends NewUserDetailed {

    studentId: number

    constructor(userAge: number, userName: string, studentId: number) {
        super(userName, userAge)
        this.studentId = studentId
    }

//use abstraction method here

    display(): void {
        console.log(`user name ${this.userName} and user age is ${this.userAge} and student id is ${this.studentId}`)
    }
}

const result = new StudentDetail(34, 'sudipta dinda', 356464)
result.display()