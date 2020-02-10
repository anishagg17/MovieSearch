import React,{Component} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter ,Switch, Route } from 'react-router-dom';

class Index extends Component{
    render(){
        return(
            <Switch>
        <Route exact path="/" component={App}/> 
        </Switch>

        )
    }
}

ReactDOM.render( 
    <BrowserRouter >
        <Index /> 
    </BrowserRouter>,
 document.getElementById("root"));
registerServiceWorker();
