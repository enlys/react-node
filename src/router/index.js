import React,{Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';


import Index from "../view/index";
import Details from "../view/details";
import User from "../view/user";
import About from "../view/about";
import Book from "../view/book";
import Write from "../view/write";
export default class RouterIndex extends Component {
    render(){
        return (
            <Switch>
                <Route path="/" exact render={()=>(<Redirect to="/index" />)}/>
                <Route path="/index" component={Index}/>
                <Route path="/details/:id" component={Details}/>
                <Route path="/user/:id" component={User}/>
                <Route path="/book" component={Book}/>
                <Route path="/about" component={About}/>
                <Route path="/write" component={Write}/>
            </Switch>
        );
    }
}