// Blueprint for engineer object that extends the code/class written for employee.
const Employee = require("./Employee");
class Engineer extends Employee {
    constructor(name, id, email, engineerGitHub) {
        super(name, id, email);
        this.engineerGitHub = engineerGitHub;
        this.role = "Engineer";
    }
    getGitHub() {
        return this.engineerGitHub;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Engineer;