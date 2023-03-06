function generateRosterHTML(employees) {
    const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>My Team</title>
          <style>
            body {
              font-family: Arial, sans-serif;
            }
            .container {
              max-width: 1200px;
              margin: 0 auto;
              padding: 0 15px;
            }
            .row {
              display: flex;
              flex-wrap: wrap;
              margin: -15px;
            }
            .col {
              flex: 1;
              padding: 15px;
            }
            .card {
              border: 1px solid #ccc;
              border-radius: 4px;
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }
            .card-title {
              margin-bottom: 0;
            }
            .list-group-item {
              border: none;
            }
          </style>
        </head>
        <body>
          <header>
            <h1 class="text-center my-4">My Team</h1>
          </header>
          <main class="container">
            <div class="row">
              ${employees.map(employee => `
                <div class="col">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">${employee.getName()}</h5>
                      <p class="card-text">${employee.getRole()}</p>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${employee.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                        ${employee.getRole() === "Manager" ? `<li class="list-group-item">Office Number: ${employee.getOfficeNumber()}</li>` : ""}
                        ${employee.getRole() === "Engineer" ? `<li class="list-group-item">GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a></li>` : ""}
                        ${employee.getRole() === "Intern" ? `<li class="list-group-item">School: ${employee.getSchool()}</li>` : ""}
                      </ul>
                    </div>
                  </div>
                </div>
              `).join("")}
            </div>
          </main>
        </body>
      </html>
    `;
    return html;
  }
  
  module.exports = generateRosterHTML;
  