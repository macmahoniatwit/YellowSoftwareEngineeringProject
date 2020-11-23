const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  database: "codecamp_db",
});

/*app.post("/create", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const wage = req.body.wage;

  db.query(
    "INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)",
    [name, age, country, position, wage],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});*/
app.get("/SpeakerList", (req, res) => {
  db.query("SELECT Speaker_name, email, day_phone, primary_phone FROM speaker", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/AddSpeaker", (req, res) => {
  const Speaker_name = req.body.Speaker_name;
  const email = req.body.email;
  const primary_phone = req.body.primary_phone;
  const day_phone = req.body.day_phone;
  

  db.query(
    "INSERT INTO speaker (speaker_id, Speaker_name, email, primary_phone, day_phone) VALUES (NULL, ?, ?, ?, ?)",
    [Speaker_name,email,primary_phone,day_phone],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/sessions", (req, res) => {
  db.query("SELECT session_ID, session_name, speaker.Speaker_name, speaker.email, speaker.primary_phone, speaker.day_phone,time.Start, time.End, room.Room_name, room.capacity\
            FROM session\
            INNER JOIN speaker ON speaker.speaker_id = session.speaker_id\
            INNER JOIN room ON room.Room_id = session.room_id\
            INNER JOIN time ON time.Time_id = session.time_id\
            ORDER BY time.Start ASC;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

/*app.put("/update", (req, res) => {
  const id = req.body.id;
  const wage = req.body.wage;
  db.query(
    "UPDATE employees SET wage = ? WHERE id = ?",
    [wage, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});*/

/*app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});*/

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
