const Intern = require("../lib/intern");

//Test to make sure the Intern.js file is functioning properly.

describe("Intern", () => {
    describe("Initialization", () => {
        it("Should create a new Intern with name, id, email, and school, and also check that the getSchool and getRole function in intern.js are working properly", () => {

            const name = "J.T.";
            const id = 6;
            const email = "jtbigdawg12@gmail.com"
            const school = "ASU";

            const newEmployee = new Intern(name, id, email, school);
            const info1= newEmployee.getSchool();
            const info2= newEmployee.getRole();

            expect(newEmployee instanceof Intern).toBe(true);
            expect(newEmployee.name).toEqual("J.T.");
            expect(newEmployee.id).toEqual(6);
            expect(newEmployee.email).toEqual("jtbigdawg12@gmail.com");
            expect(info1).toEqual("ASU");
            expect(info2).toEqual("Intern");
        })
    })
})