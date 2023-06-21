class NewUser {
    userName: string;
    userAge: number;

    constructor(userName: string, userAge: number) {
        this.userName = userName;
        this.userAge = userAge
    }

    display(): void {
        console.log(`username :${this.userName} and useage is ${this.userAge} `)
    }
}

//Inheritance concept 

class NewStudent extends NewUser {
    studentId: number;

    constructor(userName: string, userAge: number, studentId: number) {
        super(userName, userAge)
        this.studentId = studentId
    }


    //Method over writing

    display(): void {
        console.log(`username :${this.userName} and userage is ${this.userAge} and isd is ${this.studentId} `)
    }

}

const newstudent1 = new NewStudent('Abhirup das', 34, 567899)

newstudent1.display()




