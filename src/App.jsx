import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import RouterWrapper from "./Router/Router";

function App() {
  return (
    <>
      <Router>
        <Route path="/">
          <RouterWrapper />
        </Route>
      </Router>
    </>
  );
}

export default App;
