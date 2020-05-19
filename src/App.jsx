// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import { connect } from "react-redux";
// import { Route, Switch, withRouter } from "react-router-dom";

// import Home from "./screen/Home/Home";
// import Navbar from "./component/navbar/Navbar";

// class App extends React.Component {
//   render() {
//     return (
//       <>
//         <Navbar>
//           <Switch>
//             <Route exact path="/" component={Home} />
//           </Switch>
//         </Navbar>
//       </>
//     );
//   }
// }

// export default App;

import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch, withRouter } from "react-router-dom";
import Navbar from "../src/component/navbar/Navbar";
import Home from "./screen/Home/Home";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <div style={{ height: "120px" }} />
      </>
    );
  }
}
export default App;
