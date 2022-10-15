

const generateTeam = function (teamArray)  {
  var cards = []
  console.log(teamArray)
  
  for (let i = 0; i < teamArray.length; i++) {
   var currentEmployee = teamArray[i];

    if (currentEmployee.constructor.name === 'Manager') {
      var managerCard = `<div class="card">
      <div class="head">
          <div class="name">${currentEmployee.name}</div>
          <div class="role">${currentEmployee.constructor.name}</div>
      </div>
      <div class="body">
          <div class="info">ID:${currentEmployee.id}</div>
          <div class="info">Email: ${currentEmployee.email}</div>
          <div class="info">Office Number: ${currentEmployee.officeNumber}</div>
      </div>
  </div>`      
      cards.push(managerCard);


        }else if (currentEmployee.constructor.name === 'Engineer') {
      var EngineerCard = `<div class="card">
      <div class="head">
          <div class="name">${currentEmployee.name}</div>
          <div class="role">${currentEmployee.constructor.name}</div>
      </div>
      <div class="body">
          <div class="info">ID: ${currentEmployee.id}</div>
          <div class="info">Email: ${currentEmployee.email}</div>
          <div class="info">GitHub: ${currentEmployee.github}</div>
      </div>
  </div>`            
      cards.push(EngineerCard);
        }else if (currentEmployee.constructor.name === 'Intern') {
          var InternCard = `<div class="card">
          <div class="head">
              <div class="name">${currentEmployee.name}</div>
              <div class="role">${currentEmployee.constructor.name}</div>
          </div>
          <div class="body">
              <div class="info">ID: ${currentEmployee.id}</div>
              <div class="info">Email: ${currentEmployee.email}</div>
              <div class="info">School: ${currentEmployee.school}</div>
          </div>
      </div>`                  
          cards.push(InternCard);
            }
 
 
 
 
      }
return generateTeamLayout(cards);

}

  const generateTeamLayout = function (cards) {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./assets/css/style.css">
        <title>My Team</title>
    </head>
    <body>
        <header>
           <h1>My Team</h1> 
        </header>
        <div class="cards">
          ${cards}
        </div>
    </body>
    </html>`;
  }

module.exports = generateTeam;
