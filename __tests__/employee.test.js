const Employee = require("../lib/Employee");

// Test to make sure the Employee.js file is working correctly.
describe("Employee", () => {
    describe("Initialization", () => {
        it("Should create a new employee with name, id, email", () => {
            const name = "Sara";
            const id = 1;
            const email = "saragirl@gmail.com";

            const newEmployee = new Employee(name, id, email);

            expect(newEmployee instanceof employee).toBe(true);
            expect(newEmployee.name).toEqual("Sara");
            expect(newEmployee.id).toEqual(1);
            expect(newEmplyee.email).toEqual("saragirl@gmail.com");
        });
    });
});