class Student {
    //===========
    //constructor
    //===========
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }
    //================
    //instance methods
    //================
    fullName(){
        return `first name is ${this.firstName}, last name is ${this.lastName}`;
    }
    markLate(){
        this.tardies ++;
        if(this.tardies >= 3){
            return 'You are expelled';
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} time(s).`;
    }
    addScore(...grades){
        this.scores.push(...grades);
    }
    calcAverage(){
        let sum = this.scores.reduce((acc, curValue) => acc += curValue, 0);
        return Math.round(sum / this.scores.length);
    }
    //=============
    //class methods
    //=============
    static enrollStudents(){
        return 'Enrolling students';
    }

}

let firstStudent = new Student('Kamil', 'Alekber', 5);
let secondStudent = new Student('Rauf', 'Alekber', 8);
Student.enrollStudents();
firstStudent.addScore(85);
console.log(firstStudent.scores, secondStudent.scores);
firstStudent.addScore(92);
firstStudent.addScore(100);

console.log(firstStudent.calcAverage())
secondStudent.addScore(80);
secondStudent.addScore(65);
secondStudent.addScore(100);
secondStudent.addScore(100);
secondStudent.addScore(100);
console.log(firstStudent.scores, secondStudent.scores);
console.log(secondStudent.calcAverage())
// console.log(firstStudent.markLate());