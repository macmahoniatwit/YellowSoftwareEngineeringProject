const { Connection, Request } = require("tedious");

// Create connection to database
const config = {
  authentication: {
    options: {
      userName: "softwareadmin", 
      password: "" // update me
    },
    type: "default"
  },
  server: "softwareserver.database.windows.net", 
  options: {
    database: "softwaredb", 
    enableArithAbort: true,
    encrypt: true,
    validateBulkLoadParameters: true
  }
};

const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
/*
*dbo.room
*dbo.session
*dbo.speaker
*dbo.time
*/
connection.on("connect", err => {
  if (err) {
    console.error(err.message);
  } else {
    queryDatabase();
  }
});

function queryDatabase() {
  console.log("Reading rows from the Table...");

  // Read all rows from table
  const request = new Request(
    `SELECT * FROM dbo.room`,
    (err, rowCount) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`${rowCount} row(s) returned`);
      }
    }
  );

  request.on("row", columns => {
    columns.forEach(column => {
      console.log("%s\t%s", column.metadata.colName, column.value);
    });
  });

  connection.execSql(request);
}
