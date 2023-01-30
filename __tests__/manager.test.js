const Manager = require("../lib/manager");

//Test to make sure the Manager.js file is functioning properly.

describe("Manager", () => {
    describe("Initialization", () => {
        it("Should create a new Manager with name, id, email, and office number, and also check that the getOfficeNumber and getRole functions in manager.js are working properly", () => {

            const name = "Billy";
            const id = 7;
            const email = "billyboy8@gmail.com";
            const officeNumber = 207;

            const newEmployee = new Manager(name, id, email, officeNumber);
            const info1 = newEmployee.getOfficeNumber();
            const info2 = newEmployee.getRole();

            expect(newEmployee instanceof Manager).toBe(true);
            expect(newEmployee.name).toEqual("Billy");
            expect(newEmployee.id).toEqual(7);
            expect(newEmployee.email).toEqual("billyboy8@gmail.com");
            expect(info1).toEqual(207);
            expect(info2).toEqual("Manager");

        })
    })
});
