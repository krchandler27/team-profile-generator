// Blueprint for engineer object that extends the code/class written for employee.
const Employee = require("./Employee");
class Engineer extends Employee {
    constructor(name, id, email, githubUserName) {
        super(name, id, email);
        this.githubUserName = githubUserName;
        this.role = "Engineer";
    }
    getGithub() {
        return this.githubUserName;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Engineer;