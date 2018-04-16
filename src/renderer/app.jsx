import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory } from "react-router";
import Login from "./Login";
import Signup from "./Signup";
import Rooms from "./Rooms";
import Room from "./Room";
import firebase from "firebase/firebase-browser";

const appRouting = (
    <Router history={hashHistory}>
        <Route path="/">
            <Route path="login" component={Login} />
            <Route path="signup" component={Signup} />
            <Route path="rooms" component={Rooms}>
                <Route path=":roomId" component={Room} />
            </Route>
        </Route>
    </Router>
);

if (!location.hash.length) {
    location.hash = "#/login";
}

var config = {
    apiKey: "AIzaSyCEzBfsbtkJVBq-91AZ3wbVRS4zyOEd4LU",
    authDomain: "electronmessenger-f60eb.firebaseapp.com",
    databaseURL: "https://electronmessenger-f60eb.firebaseio.com",
    projectId: "electronmessenger-f60eb",
    storageBucket: "electronmessenger-f60eb.appspot.com",
    messagingSenderId: "1041353232687"
};
firebase.initializeApp(config);

ReactDOM.render(appRouting, document.getElementById("app"));
