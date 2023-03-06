const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateRosterHTML = require("./src/template");

const teamMembers = [];

async function addEmployee() {
    const employeeTypePrompt = [
      {
        type: "list",
        name: "employeeType",
        message: "What type of employee would you like to add?",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ];
  
    const employeePrompt = [
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee's email address?",
      },
    ];
  
    switch (await inquirer.prompt(employeeTypePrompt).then(answer => answer.employeeType)) {
      case "Manager":
        const managerPrompt = [
          {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?",
          },
        ];
        const managerAnswers = await inquirer.prompt([...employeePrompt, ...managerPrompt]);
        teamMembers.push(new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber));
        break;
  
      case "Engineer":
        const engineerPrompt = [
          {
            type: "input",
            name: "github",
            message: "What is the engineer's GitHub username?",
          },
        ];
        const engineerAnswers = await inquirer.prompt([...employeePrompt, ...engineerPrompt]);
        teamMembers.push(new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github));
        break;
  
      case "Intern":
        const internPrompt = [
          {
            type: "input",
            name: "school",
            message: "What school does the intern attend?",
          },
        ];
        const internAnswers = await inquirer.prompt([...employeePrompt, ...internPrompt]);
        teamMembers.push(new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school));
        break;
    }
  
    const addAnotherEmployeePrompt = [
      {
        type: "confirm",
        name: "addAnotherEmployee",
        message: "Would you like to add another employee?",
        default: true,
      },
    ];
    const { addAnotherEmployee } = await inquirer.prompt(addAnotherEmployeePrompt);
    if (addAnotherEmployee) {
      await addEmployee();
    }
  }

  async function init() {
    await addEmployee();
    const html = generateRosterHTML(teamMembers);
    fs.writeFileSync(path.resolve(__dirname, "dist", "index.html"), html);
  }

  init();
