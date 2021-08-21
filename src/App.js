import React, {useState} from 'react';
import fire from './firebase';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import Button from 'react-bootstrap/Button';
import RenderClass from './components/renderClass';

function App() {
  const [studentName, setStudentName] = useState("");
  const [inputClassName, setInputClassName] = useState("");
  const [outputClassName, setOutputClassName] = useState("");
  const [renderData, setRenderData] = useState("");

  function getStudentName(event) {
    setStudentName(event.target.value);
  }

  function getInputClassName(event) {
    setInputClassName(event.target.value);
  }

  function getOutputClassName(event) {
    setOutputClassName(event.target.value);
  }

  function saveData() {
    //alert(outputClassName);
    if (inputClassName !== "" && studentName !== "") {
      let list = fire.database().ref(inputClassName).orderByValue().limitToLast(10000);
      fire.database().ref(inputClassName).push(studentName);
    } else {
      alert("Complete required information!");
    }
  }

  function outputData() {
    fire.database().ref(outputClassName).on("value", snapshot => {
      let clas = [];
      snapshot.forEach(snap => {
        clas.push(snap.val());
      });
      setRenderData(clas);
    });
  }

  return (
    <div className="App" align="center">
      <p />
      <Paper style={ { width: 1000 } } elevation="8">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            Name of student
            <input 
              type="text"
              className="form-control"
              style={ { width: 300 } }
              onChange={event => getStudentName(event)}
              placeholder="Type the name of student"
            />
            Name of class
            <input 
              type="text"
              className="form-control"
              style={ { width: 300 } }
              onChange={event => getInputClassName(event)}
              placeholder="Type the class of student"
            />
            <Button variant="outline-danger" onClick={saveData}>Save</Button>{' '}
          </Grid>
          <Grid item xs={12}>
            Type the name of class which you want to see the students
            <input
              type="text"
              className="form-control"
              style={ { width: 300 } }
              onChange={event => getOutputClassName(event)}
              placeholder="Type the name of the class"
            />
            <Button variant="outline-danger" onClick={outputData}>Display</Button>{' '}
          </Grid>
          <Grid item xs={12}>
            <RenderClass 
              renderData={renderData}
              outputClassName={outputClassName}
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default App;
