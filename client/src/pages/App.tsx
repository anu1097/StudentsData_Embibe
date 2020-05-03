import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Dashboard from './Dashboard';
import { StudentProfile } from './StudentProfile';
import { StudentInformation } from '../types/data';
import ValidatedLoginForm from './LoginForm';

export class App extends React.Component<any, any>{
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.fetchStudentsData();
  }

  fetchStudentsData = () => {
    fetch('/studentData')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (this.state.response) {
          let response = this.state.response;
          data = response.concat(data);
        }
        this.setState({
          response: data,
        });
      })
      .catch((err) => {
        console.error({ err });
      });
  }

  fetchParticularStudentsInformation = (id: string) => {
    let data = this.state.response.filter((data: StudentInformation) => data.studentId === id);
    return data[0]
  }

  render() {
    const { response } = this.state;

    return (
      <Router {...this.props}>
        <Switch>
          <Route exact path="/">
            <ValidatedLoginForm />
          </Route>
          <Route path="/dashboard">
            <div className="App">
              {
                response &&
                <Dashboard
                  studentInfo={response}
                  fetchStudentsData={this.fetchStudentsData}
                />
              }
            </div>
          </Route>
          <Route path="/:id" render={(props: any) => {
            return (
              <StudentProfile {...props}
                studentInformation={this.fetchParticularStudentsInformation(props.match.params.id)} />
            )
          }}
          />
        </Switch>
      </Router>

    );
  }
}

export default App;
