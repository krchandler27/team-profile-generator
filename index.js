const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/intern');
const organizeTeam = require('./src/page-template');

const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "index.html");

const teamMembers = [];
const addToTeam = [];

const questions = () => {

    const createTeam = () => {
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "teamMember",
                    message: "Which type of team member would you like to add?",
                    choices: [
                        "Manager",
                        "Engineer",
                        "Intern",
                        "I do not wish to add any more team members."
                    ]
                }
            ])
            .then((response) => {
                switch (response.teamMember) {
                    case "Manager":
                        createManager();
                        break;
                    case "Engineer":
                        createEngineer();
                        break;
                    case "Intern":
                        createIntern();
                        break;
                    default:
                        buildTeam();
                }
            });

    }
    const createManager = () => {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "managerName",
                    message: "Full Name:",
                },
                {
                    type: "input",
                    name: "managerId",
                    message: "Employee ID:",
                },
                {
                    type: "input",
                    name: "managerEmail",
                    message: "Email:",
                },
                {
                    type: "input",
                    name: "managerOfficeNum",
                    message: "Office Number:",
                },
            ])
            .then((response) => {
                const manager = new Manager(
                    response.managerName,
                    response.managerId,
                    response.managerEmail,
                    response.managerOfficeNum
                );
                teamMembers.push(manager);
                addToTeam.push(response.managerID);
                createTeam();
            });
    }

    const createEngineer = () => {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "engineerName",
                    message: "Name:",
                },
                {
                    type: "input",
                    name: "engineerId",
                    message: "Employee ID:",
                },
                {
                    type: "input",
                    name: "engineerEmail",
                    message: "Email:",
                },
                {
                    type: "input",
                    name: "engineerGitHub",
                    message: "GitHub Username:"
                },
            ])
            .then((response) => {
                const engineer = new Engineer(
                    response.engineerName,
                    response.engineerId,
                    response.engineerEmail,
                    response.engineerGitHub
                );
                teamMembers.push(engineer);
                addToTeam.push(response.engineerId);
                createTeam();
            });
    }

    const createIntern = () => {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "internName",
                    message: "Name:",
                },
                {
                    type: "input",
                    name: "internId",
                    message: "Employee ID:",
                },
                {
                    type: "input",
                    name: "internEmail",
                    message: "Email:",
                },
                {
                    type: "input",
                    name: "internSchool",
                    message: "College or University:",
                },
            ])
        .then((response) => {
            const intern = new Intern(
                response.internName,
                response.internId,
                response.internEmail,
                response.internSchool
            );
            teamMembers.push(intern);
            addToTeam.push(response.internId);
            createTeam();
        });
    }

    const buildTeam = () => {
        if (!fs.existsSync(DIST_DIR)) {
            fs.mkdirSync(DIST_DIR);
        }
        fs.writeFileSync(distPath, organizeTeam(teamMembers), "utf-8");
    };

    createTeam();

};

questions();