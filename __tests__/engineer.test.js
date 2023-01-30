const Engineer = require("../lib/engineer");

//Test to make sure the Engineer.js file is working properly.
describe("Engineer", () => {
    describe("Initialization", () => {
        it("Should create a new Engineer with name, id, and email also checking that functions work properly", () => {

            const name = "Sadi";
            const id = 5;
            const email = "sadidear112@gmail.com";
            const githubUserName = "sadiIsCool";
            
            const newEmployee = new Engineer(name, id, email, githubUserName);
            
            const info1 = newEmployee.getGitHub();
            const info2 = newEmployee.getRole();

            expect(newEmployee instanceof Engineer).toBe(true);
            expect(newEmployee.name).toEqual("Sadi");
            expect(newEmployee.id).toEqual(5);
            expect(newEmployee.email).toEqual("sadidear112@gmail.com");
            expect(info1).toEqual("sadiIsCool");
            expect(info2).toEqual("Engineer");
        });
    });
});