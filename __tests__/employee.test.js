const Employee = require("../lib/Employee");

// Test to make sure the Employee.js file is working correctly.
describe("Employee", () => {
    describe("Initialization", () => {
        it("Should create a new employee with name, id, email, and also test each of the functions in the employee.js file", () => {
            const name = "Sara";
            const id = 102345;
            const email = "saragirl@gmail.com";

            const newEmployee = new Employee(name, id, email);
            const info1 = newEmployee.getName();
            const info2 = newEmployee.getId();
            const info3 = newEmployee.getEmail();
            const info4 = newEmployee.getRole();

            expect(newEmployee instanceof Employee).toBe(true);
            expect(newEmployee.name).toEqual("Sara");
            expect(newEmployee.id).toEqual(102345);
            expect(newEmployee.email).toEqual("saragirl@gmail.com");
            expect(info1).toEqual("Sara");
            expect(info2).toEqual(102345);
            expect(info3).toEqual("saragirl@gmail.com");
            expect(info4).toEqual("Employee");
        });
    });
});