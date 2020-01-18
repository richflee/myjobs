import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import JobsList from "./JobsList";

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Router>
        <JobsList></JobsList>
      </Router>
    );
  }
}

export default App;
