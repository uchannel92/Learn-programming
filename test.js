// class definition

export default class Employees {
    constructor(firstName, lastName, email, position, refId, employeeStatus, age){
        console.log("New instance has been created");
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.position = position;
        this.refId = refId;
        this.employeeStatus = employeeStatus;
        this.age = age;
    }

        getFullName(){
            return `${this.firstName} ${this.lastName}`
        }

        getPositionAndEmployeeStatus(){
            return  this.position + " " + this.employeeStatus
        }

        getEmail(){
            return `${this.email}`
        }

        getAge(){
            return this.age
        }

        canVote(){
            
            if (this.age >= 21) {
                return "You can Vote"
            } else {
                return "You cannot vote"
            }   
        }
        
        isPerm(){
            if (this.employeeStatus === "Permanent" || this.position === "Manager") {
                return true
            } else {
                return false
            }
        }

        getInitials(){
            return `${this.firstName[0]}${this.lastName[0]}`
        }
}

export class Admin extends Employees {
        paySalary() {
            console.log("Pay user salary");
        }

        getFullName() {
            return this.firstName
        }
}