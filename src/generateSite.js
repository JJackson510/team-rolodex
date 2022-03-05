const generateTeam =(team) => {
    console.log('team', team);

    const html =[];

    const generateManager =(manager) => {
        console.log('manager', manager);
        let managerHtml = `
        <div class="card ">
        <div class="card-header d-flex justify-content-center">${manager.name}
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID number:${manager.id}</li>
        <li class="list-group-item">Email:<a href="mailto:${manager.email}">${manager.email}</a></li>
        <li class="list-group-item">Office number:${manager.officeNumber}</li>
        <p><i class="fas fa-mug-hot"></i> Manager</p>
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
        <div><i class="fas fa-user-graduate"></i> Intern</div>
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
        <p><i class="fas fa-glasses"></i> Engineer</p>
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
    }
    
    return html.join('');

}

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <title>Team Rolodex</title>
    </head>
    <body>
        ${generateTeam(team)}
    </body>
    </html>
    `;
}