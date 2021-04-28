import React, { useState, useEffect, Component } from 'react';

//import firebase from '../firebaseDB';


export default class FireBaseConnection extends React.Component {

    
    constructor(props) {
        super(props);
        //this.dbRef = firebase.firestore().collection('Users');

        this.state = { 
            name: '' , 
            pass: '', 
            isLoading: false
        }
      
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);



      }
    
    handleNameChange(Name) {
        this.setState({ Name });
        console.log("name");
        console.log(Name);

        
        //firebase
        //     .collection('Users')
        //     .add({
        //         name: Name,
        //     })
        //     .then(() => {
        //         console.log('User added!');
        // });
        
    }
    handlePassChange(Pass) {
        this.setState({ Pass });
        console.log("pass");
        console.log(Pass);
      }
    };