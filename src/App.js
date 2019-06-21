import React, { Component } from 'react';

import "@ui5/webcomponents/dist/List"; 
import "@ui5/webcomponents/dist/StandardListItem";
import "@ui5/webcomponents/dist/CustomListItem";
import "@ui5/webcomponents/dist/GroupHeaderListItem";

import './App.css';

import IssueList from './Containers/IssueList';
import PullList from './Containers/PullList';

const issuesAPI = "https://demo1035085.mockable.io/backlog_issues";
const pullsAPI = "https://demo1035085.mockable.io/backlog_pulls";

class App extends Component {

  constructor(){
    super();
    this.temporary = null;
  }

  state = {
    issueSize : 0,
    issueList: [],
    pullSize: 0,
    pullList: []
  }

  componentDidMount() {
    console.log("componentWillMount");
    this.loadIssues()
    this.loadPulls()
  }

  loadIssues = () => {
    fetch(issuesAPI)
    .then(response => response.json( ))
    .then(data => { 

      this.setState({ 
        issueSize: (data.results).length
      });
      this.setState({ 
        issueList: data.results
      });

    }).catch(function(ex) {
      console.log('Parsing failed:', ex);
    });
  }

  loadPulls = () => {
    fetch(pullsAPI)
    .then(response => response.json( ))
    .then(data => { 

      this.setState({ 
        pullSize: (data.results).length
      });
      this.setState({ 
        pullList: data.results
      });

    }).catch(function(ex) {
      console.log('Parsing failed:', ex);
    });
  }

  render() {
    return (
    <div className="App">

      <IssueList list = {this.state.issueList}/>
      <PullList list = {this.state.pullList}/>     

        <button onClick={[this.loadIssues, this.loadPulls]}>Load</button>
      </div>
    )
  }
}

export default App;

// https://stackoverflow.com/questions/51204735/react-js-fetch-api