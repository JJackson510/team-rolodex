const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateSite = require('./src/generateSite');
const output_dir = path.resolve(__dirname, 'output');
const outputPath = path.join(output_dir, 'team.html');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const teamMembers = [];

const promptManager = () =>{
    return inquirer.prompt ([
        {
            type: 'input', 
            name: 'name', 
            message: 'What is your name? (Required)', 
            validate:nameInput =>{
                if(nameInput){
                    return true;
                }else{
                    console.log('Please enter a valid name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: `Please enter your employee id. (Required)`,
            validate: id => {
                if (id) {
                    return true
                } else {
                    console.log(`Oops! You did not enter an employee id. Please enter an employee id.`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: `Please enter your email address. (Required)`,
            validate: email => {
                if (email) {
                    return true
                } else {
                    console.log(`Oops! You did not enter an email address. Please enter an email address.`);
                    return false
                }
            }
        },
        {
            type: 'input',
            name:'number',
            message: 'Please enter a valid office number',
        }
    ]) .then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name,answers.id,answers.email,answers.officeNumber);
        teamMembers.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message:'Please select what you would like to do', 
            choices:['add an intern', 'add an engineer', 'finish building my team']
        }
    ])
    .then(userChoices => {
        switch(userChoices.menu) {
            case 'add an intern':
                promptIntern();
                break
                case 'add an engineer':
                    promptEngineer();
                    break
                    case 'finish building my team':
                        teamDone();
                    
        }
    });
};

const promptIntern = () => {
    console.log(`
    ================
    Adding an Intern
    ================
    `);
    
    return inquirer.prompt([
        {
            type: 'input',
            name:'name', 
            message: 'What is the name of your intern?', 
            validate:internName => {
                if(internName){
                    return true;
                }else{
                    console.log('Please enter a name!');
                }
            }
        },
        {
            type: 'input',
            name:'id',
            message: 'Please provide an id number',
            validate: internId => {
                if(internId){
                    return true;
                }else{
                    console.log('Please provide an id number!');
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter an email address',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school did the intern go to?',
            validate:internSchool => {
                if(internSchool){
                    return true;
                }else{
                    console.log('Please enter a school!');
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide an email address.',
            validate: emailAddress => {
                if(emailAddress){
                    return true;
                }else{
                    console.log('Please enter an email address!');
                }
            }
        }
    ])
    .then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name,answers.email,answers.school,answers.id);
        teamMembers.push(intern);
        promptMenu();
    })
};

const promptEngineer = () => {
    console.log(`
    ==================
    Adding an Engineer 
    ==================
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name:'name',
            message: "What is the the name of the engineer?",
            validate:engineerName =>{
                if(engineerName){
                    return true;
                }else{
                    console.log("Please enter a name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name:'id',
            message: "What is the id of the engineer?",
            validate:engineerId =>{
                if(engineerId){
                    return true;
                }else{
                    console.log("Please enter a id");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name:'email',
            message: "What is the email of the engineer?",
            validate:engineerEmail =>{
                if(engineerEmail){
                    return true;
                }else{
                    console.log("Please enter a valid email");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the github of the engineer?",
            validate: engineerGithub =>{
                if(engineerGithub){
                    return true;
                }else{
                    console.log("Please enter a GitHub!");
                }
            }
        }
    ])
    .then(answers => {
        const engineer = new Engineer(answers.name,answers.id,answers.email,answers.github);
        teamMembers.push(engineer);
        promptMenu();
    })
};

const teamDone = () => {
    console.log(`
    ======================
    Welcome to the team!
    ======================`);

    //fs.writeFileSync()
    if(!fs.existsSync(output_dir)) {
        fs.mkdirSync(output_dir)
    }
    fs.writeFileSync(outputPath, generateSite(teamMembers), 'utf-8');
    
}
promptManager();
        