const generateTeam =(team) => {
    console.log(team);

    const html =[];

    const generateManager =(manager) => {
        console.log(manager);
        let managerHtml = `
        <div class="card ">
        <div class="card-header d-flex justify-content-center">${manager.name}
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID number:${manager.id}</li>
        <li class="list-group-item">Email:<a href="mailto:${manager.email}">${manager.email}</a></li>
        <li class="list-group-item">Office number:${manager.officeNumber}</li>
    </ul>
    </div>
    `;
    html.push(managerHtml);
    }

    const generateIntern = (intern) => {
        console.log(intern);
        let internHtml = `
        <div class="card ">
        <div class="card-header d-flex justify-content-center">${intern.name}
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID number:${intern.id}</li>
        <li class="list-group-item">Email:<a href="mailto:${intern.email}">${intern.email}</a></li>
        <li class="list-group-item">School:${intern.school}</li>
    </ul>
    </div>
    `;
    html.push(internHtml);
    }

    const generateEngineer = (engineer) => {
        console.log(engineer);
        let engineerHtml =`
        <div class="card ">
        <div class="card-header d-flex justify-content-center">${engineer.name}
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID number:${engineer.id}</li>
        <li class="list-group-item">Email:<a href="mailto:${engineer.email}">${engineer.email}</a></li>
        <li class="list-group-item">Github:<a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
    </ul>
    </div>
    `;
    html.push(engineerHtml);
    }

    for(let i = 0; i <team.length; i++) {
        if(team[i].getRole() ==='Manager'){
            generateManager(team[i]);
        }
        if(team[i].getRole() ==='Intern'){
            generateIntern(team[i]);
        }
        if(team[i].getRole() ==='Engineer'){
            generateEngineer(team[i]);
        }
    };








return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Team Rolodex</title>
</head>
<body>
    ${generateTeam(team)}
</body>
</html>
`
};