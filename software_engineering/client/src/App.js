import AddSession from './components/AddSession';
import ListSession from './components/ListSession';
import ViewSession from './components/ViewSession';
import SpeakerList from './components/SpeakerList';
import AddSpeaker from './components/AddSpeaker';
import ViewSpeaker from './components/ViewSpeaker';
import {Nav, Navbar} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  /*
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const [newWage, setNewWage] = useState(0);

  const [employeeList, setEmployeeList] = useState([]);
  */

  /*const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          name: name,
          age: age,
          country: country,
          position: position,
          wage: wage,
        },
      ]);
    });
  };*/
/*
  const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data);
    });
  };
*/
  /*const updateEmployeeWage = (id) => {
    Axios.put("http://localhost:3001/update", { wage: newWage, id: id }).then(
      (response) => {
        setEmployeeList(
          employeeList.map((val) => {
            return val.id == id
              ? {
                  id: val.id,
                  name: val.name,
                  country: val.country,
                  age: val.age,
                  position: val.position,
                  wage: newWage,
                }
              : val;
          })
        );
      }
    );
  };*/

  /*const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setEmployeeList(
        employeeList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };*/

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">Software Engineering</Navbar.Brand>
        <Nav className="justify-content-end">
            <div id="L1"><Link to="/ListSession">Session List</Link></div>
            <div id="L2"><Link to="/SpeakerList">Speaker List&nbsp;&nbsp;</Link></div>
            <div id="L3"><Link to="/AddSession">Add Session&nbsp;&nbsp;</Link></div>
            <div id="L4"><Link to="/AddSpeaker">Add Speaker&nbsp;&nbsp;</Link></div>
        </Nav>
      </Navbar>
      <Switch>
        <Route path="/ListSession" component= {ListSession} />
        <Route path="/AddSession" component= {AddSession} />
        <Route path="/ViewSession" component= {ViewSession} />
        <Route path="/SpeakerList" component= {SpeakerList} />
        <Route path="/AddSpeaker" component= {AddSpeaker} />
        <Route path="/ViewSpeaker" component= {ViewSpeaker} />
      </Switch>
    </div>
    /*<div className="App">
      <div className="information">
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Age:</label>
        <input
          type="number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <label>Country:</label>
        <input
          type="text"
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        />
        <label>Position:</label>
        <input
          type="text"
          onChange={(event) => {
            setPosition(event.target.value);
          }}
        />
        <label>Wage (year):</label>
        <input
          type="number"
          onChange={(event) => {
            setWage(event.target.value);
          }}
        />
        <button onClick={addEmployee}>Add Employee</button>
      </div>
      <div className="employees">
        <button onClick={getEmployees}>Show Employees</button>

        {employeeList.map((val, key) => {
          return (
            <div className="employee">
              <div>
                <h3>Name: {val.name}</h3>
                <h3>Age: {val.age}</h3>
                <h3>Country: {val.country}</h3>
                <h3>Position: {val.position}</h3>
                <h3>Wage: {val.wage}</h3>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="2000..."
                  onChange={(event) => {
                    setNewWage(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateEmployeeWage(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteEmployee(val.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>*/
  );
}

export default App;
