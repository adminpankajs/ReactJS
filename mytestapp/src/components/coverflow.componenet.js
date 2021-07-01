import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class CoverFlow extends Component{
    render(){
        return(
            <div>
                <h1>CoverFlow</h1> 
                <Link to="/">
                    HomePage
                </Link>           
            </div>
        );
    }
}