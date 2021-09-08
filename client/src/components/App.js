import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Connect from "./Connect";
import Chat from "./Chat";

const App = () =>{
    return(
        <Router>
            <Route path = "/" exact component = {Connect}/>
            <Route path = "/chat" component = {Chat} />
        </Router>
    );
};

export default App;