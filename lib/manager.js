// Blueprint for manager object that extends the code/class written for employee.
const Employee = require("./Employee");
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Manager;